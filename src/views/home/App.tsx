import TextPressure from '../../components/TextPressure'
import Projects from '../projects/Projects'
import './App.css'

function App() {

  return (
  <div style={{position: 'relative', }}>
    <TextPressure
      text="Welcome!"
      textColor="#edecee"
    />
    <Projects />
  </div>
  )
}

export default App
