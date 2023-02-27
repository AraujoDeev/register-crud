import './acoes.css'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { Edit, Delete } from '@mui/icons-material'
import { Box } from '@mui/system'
import DeleteModalPlaca from '../deleteModalPlacas'
import EditarPlacas from './editarPlacas'

export default function PopoverPopupStatePlaca({ placa }) {
  const [openModal, setOpenModal] = React.useState(false)
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false)

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button variant="text" {...bindTrigger(popupState)}>
              ...
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box
                onClick={() => setOpenModalUpdate(true)}
                display={'flex'}
                alignItems={'center'}
                className="box"
              >
                <Edit sx={{ fontSize: '20px' }} />
                <Typography fontSize={12} sx={{ p: 2 }}>
                  Editar
                </Typography>
              </Box>
              <Box
                onClick={() => setOpenModal(true)}
                display={'flex'}
                alignItems={'center'}
                className="box"
              >
                <Delete sx={{ fontSize: '20px' }} />
                <Typography fontSize={12} sx={{ p: 2 }}>
                  Excluir
                </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
      <DeleteModalPlaca placa={placa} open={openModal} setOpen={setOpenModal} />
      <EditarPlacas
        placas={placa}
        openUpdate={openModalUpdate}
        setOpenUpdate={setOpenModalUpdate}
      />
    </>
  )
}
