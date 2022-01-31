// función pura nunca cambia su valor de retorno
// funcion impura cambia su valor de retorno 
// useEffect se utiliza para generar cualquier efecto lateral.
// este podria ser actualizar el DOM, leer en BBDD, escribir en BBDD.
// Es decir, cada vez que nosotros queramos efectuar algo que pueda cambiar 
// el resultado de nuestro componente (Llamados a API)

/* 
import { useState, useEffect } from 'react'
import { Component } from 'react'

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador +1)
  }

  return [contador, incrementar]
} */


/* const Interval = ({ contador }) => {
  useEffect (() => {
      const i = setInterval(() => console.log(contador), 1000)
      return () => clearInterval(i) 
  }, [contador])
  return (
    <p>Intervalo</p>
  )
}  */

/* class Interval extends Component {
  intervalo = ''
  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalo)
  }
  
  render () {
    return (
      <p>Intervalo</p>
    )
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  useEffect(() => {
    document.title = contador
  }, [contador]) //Use Effect necesita de dos argumentos una funcion con la logica, la segunda es la dependencia.  
  // con el arreglo vacio el use effect se ejecutara solo una vez, cuando se monte
  //
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}> Incrementar</button>
      <Interval contador={contador} />
    </div>
    )
} 

export default App */