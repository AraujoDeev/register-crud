import './telaDeCadastroPlacas.css'
import React, { useState } from 'react'
import { cadastroPlacas } from '../../methods/post'
import MainTemplate from '../../components/Templates/main'
import HeaderPlacas from '../TelaDeCadastroPlacas/Header'
import { Alert, Snackbar, Slide } from '@mui/material'
import InputMask from 'react-input-mask'

const formInicial = {
  placa: '',
  antt: '',
  espTipo: ' ',
  eixos: '',
  chassi: '',
  nomeEmpresa: '',
  cnpj: '',
}

const TelaDeCadastroDePlacas = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [form, setForm] = useState(formInicial)

  function onChange(name, value) {
    setForm({ ...form, [name]: value })
  }

  const novoCadastro = async (e) => {
    e.preventDefault()
    const response = await cadastroPlacas(form)
    setOpenSnackBar(true)
    setForm(formInicial)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackBar(false)
  }

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />
  }

  return (
    <MainTemplate>
      <HeaderPlacas />
      <div className="contentCadastro">
        <form id="teste" onSubmit={novoCadastro}>
          <div className="unidadeVeicular">
            <h3>Unidade Veicular</h3>
            <div className="label">
              <label htmlFor="placa">Placa*</label>
              <InputMask
                mask={'***-****'}
                name="placa"
                value={form.placa}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                required
              />
            </div>
            <div className="label">
              <label htmlFor="RNTRC">RNTRC</label>
              <InputMask
                mask={'999999999'}
                type="text"
                name="antt"
                value={form.antt}
                required
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </div>

            <div className="thirthLine">
              <div className="label">
                <label htmlFor="espTipo">Especie Tipo*</label>
                <select
                  name="espTipo"
                  value={form.espTipo}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="Trator Trucado">Trator Trucado</option>
                  <option value="Trator">Trator</option>
                </select>
              </div>

              <div className="label">
                <label htmlFor="eixos">Eixos</label>
                <input
                  name="eixos"
                  value={form.eixos}
                  required
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="label">
                <label htmlFor="chassi">Chassi</label>
                <InputMask
                  name="chassi"
                  type="text"
                  value={form.chassi}
                  mask={'*****************'}
                  required
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="licenciamento">
            <h3>Informações de Licenciamento</h3>
            <div className="label">
              <label htmlFor="nomeEmpresa">Nome</label>
              <input
                name="nomeEmpresa"
                required
                value={form.nomeEmpresa}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                type="text"
              />
            </div>
            <div className="label">
              <label htmlFor="CNPJ">CNPJ</label>
              <InputMask
                mask={'99.999.999/9999-99'}
                name="cnpj"
                value={form.cnpj}
                required
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="label">
              <div className="anexo">
                <input
                  type="file"
                  id="anexoCrlv"
                  name="anexo"
                  accept="image/*"
                />
                <label className="labelAnexo" htmlFor="anexoCrlv">
                  Anexo da CRLV
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="buttonCadastrar">
            Cadastrar
          </button>
        </form>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={TransitionLeft}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Placa cadastrada com sucesso!
        </Alert>
      </Snackbar>
    </MainTemplate>
  )
}

export default TelaDeCadastroDePlacas
