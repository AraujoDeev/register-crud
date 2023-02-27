import api from '../services/api'

const cadastroMotorista = async (data) => {
  try {
    const response = await api.post('http://localhost:3005/motoristas', data)
    return response
  } catch (error) {
    return error
  }
}

const cadastroPlacas = async (data) => {
  try {
    const response = await api.post('http://localhost:3005/placas', data)
    return response
  } catch (error) {
    return error
  }
}

export { cadastroMotorista, cadastroPlacas }
