import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
function App() {
  return (
    <div className="App">
      <h1>E-comerce Horizon</h1>
      <NavBar/>
      <ItemListContainer greetings="Hola, soy una bienvenida provisional" />
      <ItemCount initial="1" stockNum="5" stockE={true} />
    </div>
    
    
  );
}

export default App;
