import styles from '../Header/header.module.css'
import { useNavigate } from 'react-router-dom'

const HeaderPlacas = ({ setPlacaBuscadas }) => {
  const IrParaTelaDeCadastro = useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.titulo}>
        <p>Unidades Veiculares</p>
      </div>
      <div className={styles.direita}>
        <div>
          <input
            className={styles.search}
            type="search"
            onChange={(e) => setPlacaBuscadas(e.target.value)}
          />
        </div>
        <button
          className={styles.button}
          onClick={() => IrParaTelaDeCadastro('/tela-de-cadastro-placas')}
        >
          Novo
        </button>
      </div>
    </div>
  )
}

export default HeaderPlacas
