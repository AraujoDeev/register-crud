import api from '../services/api'

const deletarCadastroMotorista = async (id) => {
  try {
    const response = await api.delete(`http://localhost:3005/motoristas/${id}`)
  } catch (error) {
    return error
  }
}

const deletarCadastroPlaca = async (id) => {
  try {
    const response = await api.delete(`http://localhost:3005/placas/${id}`)
  } catch (error) {
    return error
  }
}

export { deletarCadastroMotorista, deletarCadastroPlaca }
