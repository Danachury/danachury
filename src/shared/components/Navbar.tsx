import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import './Navbar.css'

interface NavLinkRenderProps {
  isActive: boolean
}

const activeClassName = (isActive: boolean) => isActive ? 'active' : ''
const navLinkClassName = ({ isActive }: NavLinkRenderProps) => `nav-item nav-link ${activeClassName(isActive)}`.trim()

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent p-2">

      <Link className="navbar-brand" to="/">
        <img src="/vite.svg" alt=""/>
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={navLinkClassName} to="/about">About</NavLink>
          <NavLink className={navLinkClassName} to="/portfolio">Portfolio</NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <Link className="navbar-brand" to="https://www.linkedin.com/in/denilson-anachury-castro/" target="_blank">
            <Icon iconName="Linkedin"/>
          </Link>
          <Link className="navbar-brand" to="https://github.com/Danachury" target="_blank">
            <Icon iconName="Github"/>
          </Link>
          <Link className="navbar-brand" to="https://x.com/DAnachury" target="_blank">
            <Icon iconName="Twitter"/>
          </Link>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
