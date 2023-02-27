import api from '../services/api'

const updateMotorista = async (motoristaEditado) => {
  try {
    const response = await api.put(
      `http://localhost:3005/motoristas/${motoristaEditado.id}`,
      motoristaEditado
    )
  } catch (error) {
    return error
  }
}

const updatePlacas = async (placaEditada) => {
  try {
    const response = await api.put(
      `http://localhost:3005/placas/${placaEditada.id}`,
      placaEditada
    )
  } catch (error) {
    return error
  }
}

export { updateMotorista, updatePlacas }
