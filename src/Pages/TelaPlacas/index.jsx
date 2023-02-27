import './telaPlacas.css'

import React, { useEffect, useState } from 'react'
import MainTemplate from '../../components/Templates/main'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from '@mui/material'

import { pegarPlacas } from '../../methods/get'
import HeaderPlacas from '../TelaDeCadastroPlacas/Header'
import PopoverPopupStatePlaca from '../../components/acoesPlacas'
import Loading from '../../components/skeleton'

const TelaDePlacas = () => {
  const [placas, setPlacas] = useState([])
  const [placaBuscadas, setPlacaBuscadas] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [allPlacas, setAllPlacas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const limite = 8

  const getPlacas = async () => {
    const response = await pegarPlacas(pageNumber, limite)
    setPlacas(response.data)
    setIsLoading(false)
  }

  const getAllPlacas = async () => {
    const allData = await pegarPlacas()
    setAllPlacas(allData.data)
    const count = Math.ceil(allData.data.length / limite)
    setPageCount(count)
  }

  const handleChange = (event, value) => {
    setPageNumber(value)
  }

  const placasFiltradas =
    placaBuscadas.length > 0
      ? allPlacas.filter((placa) => placa.placa.includes(placaBuscadas))
      : placas

  useEffect(() => {
    getPlacas()
  }, [pageNumber])

  useEffect(() => {
    getAllPlacas()
  }, [])

  return (
    <MainTemplate>
      <HeaderPlacas setPlacaBuscadas={setPlacaBuscadas} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Placa</TableCell>
              <TableCell align="center">Tipo de Unidade Veicular</TableCell>
              <TableCell align="center">Eixos</TableCell>
              <TableCell align="center">CPF/CNPJ</TableCell>
              <TableCell align="center">Situação cadastral</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          {isLoading ? (
            <Loading />
          ) : (
            <TableBody>
              {placasFiltradas.map((placa) => (
                <TableRow
                  key={placa.id}
                  className="teste"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {placa.placa}
                  </TableCell>
                  <TableCell align="center">{placa.espTipo}</TableCell>
                  <TableCell align="center">{placa.eixos}</TableCell>
                  <TableCell align="center">{placa.cnpj}</TableCell>
                  <TableCell align="center">Aprovado</TableCell>
                  <TableCell align="center">
                    <PopoverPopupStatePlaca placa={placa} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <Pagination
        count={pageCount}
        style={{ marginTop: 10 }}
        onChange={handleChange}
      />
    </MainTemplate>
  )
}

export default TelaDePlacas
