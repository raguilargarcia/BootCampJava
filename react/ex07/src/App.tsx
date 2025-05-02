import Tabla from './componentes/Tabla/Tabla';
import './App.css'

function App() {

  const columnas = ['Nombre', 'Apellido', 'Ocupación'];
  const filas = [
    ['Juan', 'Pérez', 'Desarrollador'],
    ['Ana', 'Gómez', 'Diseñadora'],
    ['Luis', 'Martínez', 'Gerente'],
  ];

  return (
    <div className="App">
      <h1>Tabla de Personas</h1>
      <Tabla columnas={columnas} filas={filas} />
    </div>
  );
}

export default App
