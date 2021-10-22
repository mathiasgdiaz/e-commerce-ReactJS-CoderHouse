import './App.css';
import './styles/output.css'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return(
    <div>
      <NavBar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">OBJETOS ÚTILES Y BOLUCOMPRAS</h1>
        </div>
      </header>
      <main>
        <ItemListContainer mensaje="Próximamente las ofertas de la semana"/>
      </main>
    </div>
  );
}

export default App;
