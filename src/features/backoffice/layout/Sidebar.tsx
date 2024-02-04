import { Link } from "react-router-dom"
import styles from './Layout.module.scss'
export default function Root() {
  return (
    <div className={`${styles.sidebar} d-none d-md-flex flex-column align-items-center justify-content-center` }>
      <div className="">
        imagen
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className='nav-item'>
          <Link to="home">
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="home">
            MMPP
          </Link>
        </li>
      </ul>

    </div>
  )
}