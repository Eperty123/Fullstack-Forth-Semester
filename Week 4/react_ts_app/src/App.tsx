import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { In, Out, PeepViewer} from './PersonViewer'
import './App.css'

function App() {
  const [name, setName] = useState<string>("")

  return (
    <div className="App">
      <div>
        <h1>Sup,</h1>
        <h4><Out name={name}/></h4>
        <label>Name:</label>
        <In name={name} setName={setName} />
        <PeepViewer />
      </div>
    </div>
  )
}

export default App
