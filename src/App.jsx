import { Link } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import CustomRoutes from './routes/CstmRoutes'

function App() {

  return (
    <div className='outer-pokedex'>
    <h1 id="pokedex-heading">
      <Link to="/">Pokedex</Link> {/* It will not reload again and again */}
    </h1>
    <CustomRoutes/>
    <Analytics />
    </div>
  )
}

export default App
