import logo from '../../assets/images/cafe.jpg';
import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      <header className={css.App_header}>
        <img src={logo} className={css.App_logo} alt="logo" />
        <h1>Coffee Shop</h1>
      </header>
    </div>
  );
}

export default App;
