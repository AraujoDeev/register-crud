import './acoes.css'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { Edit, Delete } from '@mui/icons-material'
import { Box } from '@mui/system'
import DeleteModal from '../deleteModalMotorista'
import EditarMotorista from './editarMotorista'

export default function PopoverPopupState({ motorista }) {
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
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
                onClick={() => setOpenModalDelete(true)}
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
      <DeleteModal
        motorista={motorista}
        open={openModalDelete}
        setOpen={setOpenModalDelete}
      />
      <EditarMotorista
        motorista={motorista}
        openUpdate={openModalUpdate}
        setOpenUpdate={setOpenModalUpdate}
      />
    </>
  )
}
