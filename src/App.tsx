import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Post } from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <div>
          <Routes>
            <Route path='/' element={<Post/>}/>
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
