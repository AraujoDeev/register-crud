import './telaDeCadastroMotoristas.css'
import React, { useState } from 'react'

import MainTemplate from '../../components/Templates/main'
import { Alert, Snackbar, Slide } from '@mui/material'
import HeaderMotoristas from '../TelaCadastroMotorista/Header'
import { cadastroMotorista } from '../../methods/post'

import InputMask from 'react-input-mask'

const formInicial = {
  rg: '',
  cpf: '',
  date: '',
  celular: '',
  nome: '',
  sexo: '',
  email: '',
  mae: '',
  orgaoExpeditor: '',
  ufrg: '',
}

const TelaDeCadastroDeMotoristas = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [form, setForm] = useState(formInicial)

  function onChange(name, value) {
    setForm({ ...form, [name]: value })
  }

  const novoCadastro = async (e) => {
    e.preventDefault()
    const response = await cadastroMotorista(form)
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
      <HeaderMotoristas nome="Unidade Veicular" />

      <div className="contentCadastro">
        <form id="teste" onSubmit={novoCadastro}>
          <div className="dadosPessoais">
            <h3>Dados Pessoais</h3>
            <div className="firtLine">
              <div className="filds">
                <input
                  type="text"
                  className="nome"
                  placeholder="Nome completo"
                  name="nome"
                  value={form.nome}
                  required
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
              <select name="sexo">
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
            </div>
            <div className="secondLine">
              <div className="filds">
                <InputMask
                  mask={'(99)99999-9999'}
                  className="cell"
                  placeholder="Celular"
                  required
                  name="celular"
                  value={form.celular}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="filds">
                <input
                  className="email"
                  placeholder="E-mail"
                  name="email"
                  value={form.email}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
            </div>
            <div className="thirtLine">
              <div className="filds">
                <input
                  type="date"
                  className="date"
                  required
                  name="date"
                  value={form.date}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="filds">
                <input
                  type="text"
                  className="mae"
                  placeholder="Nome da mãe"
                  name="mae"
                  required
                  value={form.mae}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="documentos">
            <h3>Documentos</h3>
            <div className="docFirtLine">
              <div className="filds">
                <InputMask
                  mask={'999.999.999-99'}
                  placeholder="CPF"
                  name="cpf"
                  value={form.cpf}
                  required
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
            </div>
            <div className="docSecondLine">
              <div className="filds">
                <input
                  className="docs"
                  placeholder="RG"
                  name="rg"
                  required
                  value={form.rg}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="filds">
                <input
                  className="orgaoExpeditor"
                  placeholder="Órgão expedidor"
                  name="orgaoExpeditor"
                  required
                  value={form.orgaoExpeditor}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="filds">
                <input
                  className="orgaoExpeditor"
                  placeholder="UF do RG"
                  required
                  name="ufrg"
                  value={form.ufrg}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                />
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
          Motorista cadastrado com sucesso!
        </Alert>
      </Snackbar>
    </MainTemplate>
  )
}

export default TelaDeCadastroDeMotoristas
