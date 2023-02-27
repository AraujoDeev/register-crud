import './deleteModalMotorista.css'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { deletarCadastroPlaca } from '../../methods/delete'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function DeleteModalPlaca({ open, setOpen, placa }) {
  const handleClose = () => setOpen(false)

  const deletarMotorista = async () => {
    const response = await deletarCadastroPlaca(placa.id)
    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            color: 'black',
            flexDirection: 'column',
            border: 'none',
            borderRadius: '8px',
          }}
        >
          <button onClick={() => handleClose()} className="botaoFecharModal">
            X
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja realmente excluir a placa {placa.placa}?
          </Typography>
          <Button
            className="botao"
            onClick={() => deletarMotorista()}
            sx={{
              width: '130px',
              backgroundColor: 'transparent',
              color: 'red',
              border: '2px solid red',
            }}
          >
            Excluir
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
