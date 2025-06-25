import "./style.css"
import { Link } from 'react-router-dom'

const Component404 =()=>{
    return(
        <main>
            <div className="container-404">
                <div className="box-404">
                    <h1>4</h1>
                    <img src="/hellmo-pizza.gif" alt="" />
                    <h1>4</h1>
                </div>
                <h2>Fatia não encontrada</h2>
            
                <h2>Você foi hipnotizado pela pizza e se perdeu?</h2>
                <Link to='/'>Voltar ao Início</Link>
            </div>
            
        </main>
    )
}

export default Component404