import logo from '../../assets/images/cafe.jpg';
import css from './App.module.css';
import { ProductCard } from "../../components";
import { products } from "../../utils/products";

function App() {
  return (
    <div className={css.App}>
      <header className={css.App_header}>
        <img src={logo} className={css.App_logo} alt="logo" />
        <h1>Coffee Shop</h1>

        <boddy className={css.body}>
        <p>Seleccionamos los mejores granos de café para que disfrutes de una experiencia única en cada taza. Ya sea que prefieras un café suave o intenso, tenemos opciones para todos los gustos. ¡Haz de cada momento un ritual perfecto con nuestros granos de calidad!</p>
        </boddy>

        
        <div className={css.ProductList}>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} className={css.ProductList_card} />
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
