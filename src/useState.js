//import { useState } from 'react'



/* Reglas de los Hooks:
1.- Los hooks no se pueden llamar en loops, ni condiciones (sin while ni if, ni else)
2- siempre en el nivel mas alto del componente
3.- Solo se puede llamar en 2 partes. Componentes de react y custom hooks
4.- Cuando creemos un custom Hook, este siempre debe comenzar con el el use(nombre que le queramos dar al hook) */


// este es un componente basado en clases que esta siendo utilizando para que
//tenga la misma funcionalidad que el componente funcional.
/* class App extends Component {
  state = {contador: 0}
  incrementar = () => {
    this.setState ({ contador: this.state.contador + 1})
  }
  render () {
    return (
      <div>
        contador: {this.state.contador}
        <button onClick={this.incrementar}> Incrementar </button>
      </div>
    )
  }

} */

// useEffect se utiliza para generar cualquier efecto lateral.
// este podria ser actualizar el DOM, leer en BBDD, escribir en BBDD.
// Es decir, cada vez que nosotros queramos efectuar algo que pueda cambiar 
// el resultado de nuestro componente (Llamados a API)


/* const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador +1)
  }

  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}> Incrementar</button>
    </div>
    )
} 

export default App  */