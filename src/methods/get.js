// import api from '../services/api'
import React from 'react'
import api from '../services/api'

const pegarMotoristas = async (pageNumber, limite) => {
  try {
    const response = await api.get(
      `http://localhost:3005/motoristas/?_page=${pageNumber}&_limit=${limite}`
    )
    return response
  } catch (error) {
    return error
  }
}

const pegarPlacas = async (pageNumber, limite) => {
  try {
    const response = await api.get(
      `http://localhost:3005/placas/?_page=${pageNumber}&_limit=${limite}`
    )
    return response
  } catch (error) {
    return error
  }
}

// const pegarPlacas = async () => {
//   try {
//     const response = await api.get('http://localhost:3005/placas')
//     return response
//   } catch (error) {
//     return error
//   }
// }

export { pegarMotoristas, pegarPlacas }
