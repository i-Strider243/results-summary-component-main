import { useState } from 'react'
import Summary from './components/Summary'
import Result from './components/Result'
function App() {
  const [score, setScore] = useState(0);

  return (
    <div className='card'>
      <Result score={score} />
      <Summary score={score} setScore={setScore} />
    </div>
  )
}

export default App
