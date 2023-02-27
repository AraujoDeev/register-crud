import './editarPlaca.css'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { updatePlacas } from '../../../methods/put'
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

export default function EditarPlacas({ openUpdate, setOpenUpdate, placas }) {
  const handleClose = () => setOpenUpdate(false)

  const [placaEditada, setPlacaEditada] = useState(placas)

  function onChange(value, name) {
    setPlacaEditada({ ...placaEditada, [name]: value })
  }

  const editPlacas = async () => {
    const response = await updatePlacas(placaEditada)
    window.location.reload()
  }

  const handleCloseModal = () => setOpenUpdate(false)

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
        >
          <button
            onClick={() => handleCloseModal()}
            className="fechalModalPlacaEditada"
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
              padding: '10px 8px',
            }}
            mask={'***-****'}
            defaultValue={placaEditada.placa}
            name={'placa'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
              padding: '10px 8px',
            }}
            defaultValue={placaEditada.espTipo}
            name={'espTipo'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
              padding: '10px 8px',
            }}
            defaultValue={placaEditada.eixos}
            name={'eixos'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
              padding: '10px 8px',
            }}
            defaultValue={placaEditada.nomeEmpresa}
            name={'nomeEmpresa'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
              padding: '10px 8px',
            }}
            mask={'*****************'}
            defaultValue={placaEditada.chassi}
            name={'chassi'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
              padding: '10px 8px',
            }}
            mask={'99.999.999/9999-99'}
            defaultValue={placaEditada.cnpj}
            name={'cnpj'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />
          <InputMask
            style={{
              width: '300px',
              background: 'transparent',
              border: '1px solid lightGray',
              marginTop: '10px',
              outline: 'none',
              padding: '10px 8px',
            }}
            mask={'999999999'}
            defaultValue={placaEditada.antt}
            name={'antt'}
            onChange={(e) => onChange(e.target.value, e.target.name)}
          />

          <Button
            style={{ marginTop: 20, background: 'orangered' }}
            onClick={() => editPlacas()}
            variant="contained"
          >
            Editar
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
