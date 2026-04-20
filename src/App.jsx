import { Link } from 'react-router-dom'
import './App.css'
import CustomRoutes from './routes/customRoutes'

function App() {

  return (
    <div className='outer-pokedex'>
    <h1 id="pokedex-heading">
      <Link to="/">Pokedex</Link> {/* It will not reload again and again */}
    </h1>
    <CustomRoutes/>
    </div>
  )
}

export default App
