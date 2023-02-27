import './editarMotorista.css'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { updateMotorista } from '../../../methods/put'
import InputMask from 'react-input-mask'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function EditarMotorista({
  openUpdate,
  setOpenUpdate,
  motorista,
}) {
  const handleClose = () => {
    setMotoristaEditado(motorista)
    setOpenUpdate(false)
  }

  const handleCloseModal = () => {
    setOpenUpdate(false)
  }

  const [motoristaEditado, setMotoristaEditado] = useState(motorista)

  function onChange(value, name) {
    setMotoristaEditado({ ...motoristaEditado, [name]: value })
  }

  const editMotorista = async () => {
    const response = await updateMotorista(motoristaEditado)
    window.location.reload()
  }

  return (
    <div>
      <Modal
        open={openUpdate}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          borderRadius={2}
          height={500}
        >
          <button
            onClick={() => handleCloseModal()}
            className="modalEditarMotora"
          >
            X
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Detalhes do cadastro
          </Typography>
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
            }}
            defaultValue={motoristaEditado.nome}
            name="nome"
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
            }}
            name="cpf"
            mask="999.999.999-99"
            defaultValue={motoristaEditado.cpf}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
            }}
            mask="(99)99999-9999"
            defaultValue={motoristaEditado.celular}
            name="celular"
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
            }}
            defaultValue={motoristaEditado.email}
            name="email"
            placeholder="Email"
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
            }}
            defaultValue={motoristaEditado.date}
            name="date"
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
            }}
            defaultValue={motoristaEditado.mae}
            name="mae"
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
            }}
            defaultValue={motoristaEditado.rg}
            name="rg"
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          {/* <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            variant="outlined"
            defaultValue={motoristaEditado.UfRg}
            name={'UfRg'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            variant="outlined"
            defaultValue={motoristaEditado.orgaoExpeditor}
            name={'orgaoExpeditor'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          /> */}

          <Button
            onClick={() => editMotorista()}
            variant="contained"
            style={{ marginTop: 30, backgroundColor: 'orangered' }}
          >
            Editar
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
