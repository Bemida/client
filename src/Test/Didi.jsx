import { useContext } from 'react'
import Layout from '../Layout'
import { DataContext } from '../Context/MainContext'
import Viewer3d from '../Components/Viewer3d'
export default function Didi() {
  const context = useContext(DataContext)
  return (
    <div>
  <Viewer3d />
    </div>
  )
}
