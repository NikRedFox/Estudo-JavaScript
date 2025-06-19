import reactBackground from '../../assets/image/reactBackground.jpg'
import './style.css'
import Card from '../card/card'

const MainSection =()=>{
    return(
        <main>
            <img src={reactBackground} alt="" />

            <h2>Aprenda com projetos reais</h2>
            <p>
                Nossa plataforma oferece cursos praticos, com foco em desenvolvimento
                de projetos do zero.
                Aprenda na prática com aulas simples, didáticas e acessiveis.
            </p>

            <div className="card-grid">
                <Card title="JavaScript Moderno" description="Lorem"/>           
                <Card title="ReactJS na prática" description="Componentes, props, hooks, e consumo de API reais."/>           
                <Card title="JavaScript Moderno" description="Lorem"/>           
                <Card title="ReactJS na prática" description="Componentes, props, hooks, e consumo de API reais."/>           
                <Card title="JavaScript Moderno" description="Lorem"/>           
                <Card title="ReactJS na prática" description="Componentes, props, hooks, e consumo de API reais."/>           
                <Card title="JavaScript Moderno" description="Lorem"/>           
                <Card title="ReactJS na prática" description="Componentes, props, hooks, e consumo de API reais."/>           
                <Card title="JavaScript Moderno" description="Lorem"/>           
                           
            </div>
        </main>
    )    
}

export default MainSection