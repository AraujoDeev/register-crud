import './skeleton.css'

import React from 'react'
import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material'

const Loading = () => {
  return (
    <>
      <TableBody>
        <TableRow
          className="teste"
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="center" component="th" scope="row">
            <Skeleton variant="rectangular" height={10} />
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            <Skeleton variant="rectangular" height={10} />
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            <Skeleton variant="rectangular" height={10} />
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            <Skeleton variant="rectangular" height={10} />
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            <Skeleton variant="rectangular" height={10} />
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            <Skeleton variant="rectangular" height={10} />
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  )
}

export default Loading
