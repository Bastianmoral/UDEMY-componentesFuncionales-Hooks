import { useReducer, useState } from 'react'

//Contador simple
// state = { contador: 0 }
// action siempre tendra una propiedad de type y esta va a ser un string
// action = { type: string}
// adicionalmente puede tener la propiedad de payload
// action = { type: string, payload: any }

/* const inicial = { contador: 0}


const reducer = (state, action) => { 
  switch(action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 }
    case 'sustraccion':
      return { contador: state.contador - 1 }
    case 'set':
      return { contador: action.payload }
    default: 
      return state 
  }
} 

const App= () => {
  const [state, dispatch] = useReducer(reducer, inicial)
  const [valor, setValor] = useState(0)
  
  return (
    <div>
      contador: {state.contador}
      <input value={valor} onChange={e => setValor(e.target.value)}/>
      <button onClick={() => dispatch({ type: 'incrementar' })}> más </button>
      <button onClick={() => dispatch({ type: 'sustraccion' })}> menos </button>
      <button onClick={() => dispatch({ type: 'set', payload: valor })}> set </button>
    </div>
  )
}


export default App */