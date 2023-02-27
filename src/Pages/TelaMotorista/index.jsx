import './telaDeMotorista.css'
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

import { pegarMotoristas } from '../../methods/get'
import HeaderMotoristas from '../TelaCadastroMotorista/Header'
import PopoverPopupState from '../../components/acoes'
import Loading from '../../components/skeleton'

const TelaDeMotorista = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [motoristas, setMotoristas] = useState([])
  const [motoristaBuscado, setMotoristaBuscado] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [pageCount, setPageCount] = useState() // Quantidade de paginas
  const [allMotoristas, setAllMotoristas] = useState([]) // Pega todos os motoristas
  const limite = 8

  const getMotoristas = async () => {
    const response = await pegarMotoristas(pageNumber, limite)
    setMotoristas(response.data)
    setIsLoading(false)
  }

  const getAllMotoristas = async () => {
    const allData = await pegarMotoristas()
    setAllMotoristas(allData.data)
    const count = Math.ceil(allData.data.length / limite)
    setPageCount(count)
  }

  const handleChange = (event, value) => {
    setPageNumber(value)
  }

  const motoristasFiltrados =
    motoristaBuscado.length > 0
      ? allMotoristas.filter(
          (motorista) =>
            motorista.nome.includes(motoristaBuscado) ||
            motorista.cpf.includes(motoristaBuscado)
        )
      : motoristas

  useEffect(() => {
    getMotoristas()
  }, [pageNumber])

  useEffect(() => {
    getAllMotoristas()
  }, [])

  return (
    <MainTemplate>
      <HeaderMotoristas setMotoristaBuscado={setMotoristaBuscado} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">CPF</TableCell>
              <TableCell align="center">Situação cadastral </TableCell>
              <TableCell align="center">Origem do cadastro </TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          {isLoading ? (
            <Loading />
          ) : (
            <TableBody>
              {motoristasFiltrados.map((motorista) => (
                <TableRow
                  className="teste"
                  key={motorista.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{motorista.nome}</TableCell>
                  <TableCell align="center">{motorista.cpf}</TableCell>
                  <TableCell align="center">Aprovado</TableCell>
                  <TableCell align="center">Plataforma</TableCell>
                  <TableCell align="center">
                    <PopoverPopupState motorista={motorista} />
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

export default TelaDeMotorista
