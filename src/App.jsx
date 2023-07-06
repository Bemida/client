import './App.css'
import TestRoutes from './Test/MainTest'
import MainContext from './Context/MainContext'
import Layout from './Layout'
import MainRoutes from './Routes/mainRoutes'

function App() {
  return (

    <div>
      <MainContext>
        <TestRoutes />
        <MainRoutes />
      </MainContext>

    </div>
  )
}

export default App

