import './App.css';
import './styles/output.css'
import NavBar from './components/NavBar.jsx';

function App() {
  return(
    <div>
      <NavBar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-40 h-96 flex justify-center">
              <h2 className="text-xl font-bold text-gray-900">Próximamente las ofertas de la semana</h2>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default App;
