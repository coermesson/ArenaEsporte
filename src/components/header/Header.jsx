import arenaesportelogo from '../../assets/arenaesportelogo.svg'
import './Header.css'
const Header = () => {
  return (
    <header>
         <header className="header">
      <a href="#inicio" className="header-logo">
         <img src={arenaesportelogo} alt="Logo da Arena VIVA" />
      </a>

      <nav className="header-nav">
        <a href="#">Início</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#modalidades">Modalidades</a>
        <a href="#cadastro">Cadastro</a>
      </nav>
    </header>
    </header>
  )
}

export default Header