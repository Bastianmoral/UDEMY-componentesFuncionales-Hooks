/* // Los componentes funcionales pueden ser llamados de dos maneras

// function App () {}
//const App = () => {}

const impura = () => new Date().toLocaleString()
console.log(impura()) //que una funcion sea impura 
//significa que siempre te daran retornos diferentes


//una funcion pura nunca cambia su valor de retorno
const MiComponente = ({miProp}) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}


const App = () => {
  return(
    <MiComponente miProp={'Chanchito Feliz'} />
  )
}



export default App
 */