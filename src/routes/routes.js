import { Route, Routes as Switch } from 'react-router-dom'
import TelaDeCadastroDeMotoristas from '../Pages/TelaCadastroMotorista'
import TelaDeCadastroDePlacas from '../Pages/TelaDeCadastroPlacas'
import TelaDeMotorista from '../Pages/TelaMotorista'
import TelaDePlacas from '../Pages/TelaPlacas'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<TelaDeMotorista />} />
      <Route path="tela-de-placas" element={<TelaDePlacas />} />
      <Route
        path="tela-de-cadastro-motoristas"
        element={<TelaDeCadastroDeMotoristas />}
      />
      <Route
        path="tela-de-cadastro-placas"
        element={<TelaDeCadastroDePlacas />}
      />
    </Switch>
  )
}

export default Routes
