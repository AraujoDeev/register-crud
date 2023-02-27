import styles from '../Header/header.module.css'
import { useNavigate } from 'react-router-dom'

const HeaderMotoristas = ({ setMotoristaBuscado }) => {
  const IrParaTelaDeCadastro = useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.titulo}>
        <p>Motoristas</p>
      </div>
      <div className={styles.direita}>
        <div>
          <input
            className={styles.search}
            type="search"
            onChange={(e) => setMotoristaBuscado(e.target.value)}
          />
        </div>
        <button
          className={styles.button}
          onClick={() => IrParaTelaDeCadastro('/tela-de-cadastro-motoristas')}
        >
          Novo
        </button>
      </div>
    </div>
  )
}

export default HeaderMotoristas
