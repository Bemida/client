import './App.css'
import TestRoutes from './Test/MainTest'
import MainContext from './Context/MainContext'
import Layout from './Layout'
function App() {
  return (

    <div>
      <MainContext>
        <TestRoutes />
        <Layout />
      </MainContext>

    </div>
  )
}

export default App

