import CardPizza from '../../cardPizza'
import './style.css'
import pizza01 from '../../../assets/pizzas/pizza01.png'

const HighlightsSection = () => {
    return (
        <section className="highlights-section">

            <h3>Nossos Destaques</h3>

            <div className="cards">
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância."/>                                              
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância."/>                                              
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância."/>                                              
            </div>
            
        </section>
    )
}

export default HighlightsSection