import { ProductCard } from "../../components";
import { products } from "../../utils/products";

import css from './AboutUsPage.module.css';

const AboutUsPage = () => {
  return (
    <div className={css.About} >
        <header className={css.About_header}>
            <h1>Conoce sobre nosotros</h1>
        </header>
        <body className={css.About_body}>
        <p>En nuestra tienda en línea encontrarás más que solo café; te ofrecemos una experiencia completa para los verdaderos amantes de esta bebida. Explora nuestra selección de granos premium provenientes de fincas sustentables, y complementa tu pasión con nuestras cafeteras de alta calidad y utensilios especializados. Desde métodos tradicionales hasta innovadores accesorios, tenemos todo lo que necesitas para preparar la taza perfecta en casa. ¡Descubre el mundo del café con nosotros y disfruta de un momento único en cada sorbo!</p>
        </body>

        <div className={css.ProductList}>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} className={css.ProductList_card} />
            })}
        </div>
    </div>
  );
}

export default AboutUsPage
