import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <h1>🍕 Pizzaria</h1>
            <nav>
                <Link to='/'>Início</Link>
                <Link to='/cardapio'>Cardápio</Link>
                <Link to='/contact'>Contato</Link>                
                                                                
            </nav>
        </header>
    )
}

export default Header