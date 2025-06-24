import './style.css'
import pizza01 from '../../../assets/pizzas/pizza01.png'
import CardPizza from '../../cardPizza'

const MenuSection = () => {
    return (
        <section className="cardapio-section">

            <h2>Cardápio Completo</h2>

            <div className="menu-grid">
                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/>

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 

                 <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Calabresa"
                  pizzaIngredients="Tradicional, com bastante sabor e crocância."/> 
            </div>
        </section>
    )
}

export default MenuSection