import ListaDeTarjetas from './componentes/ListaDeTarjetas/ListaDeTarjetas'
import './App.css'

function App() {

  return (
    <>
      <h1>Ejercicio 01</h1>
      <ListaDeTarjetas
        personas={[
          {
            nombre: 'Juan',
            apellido: 'Pérez',
            ocupacion: 'Desarrollador Frontend',
            imagenURL: 'https://avatar.iran.liara.run/public/5'
          },
          {
            nombre: 'Ana',
            apellido: 'Gómez',
            ocupacion: 'Diseñadora Gráfica',
            imagenURL: 'https://avatar.iran.liara.run/public/93'
          },
          {
            nombre: 'Luis',
            apellido: 'Martínez',
            ocupacion: 'Gerente de Proyectos',
            imagenURL: 'https://avatar.iran.liara.run/public/48'
          }
        ]}
      />
    </>
  )
}

export default App
