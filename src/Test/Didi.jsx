import { useContext } from 'react'
import Layout from '../Layout'
import { DataContext } from '../Context/MainContext'
import Size from '../Components/Size'

export default function Didi() {
  const context = useContext(DataContext)
  // console.log(context.stage);
  return (
    <div>
      <Layout />
    </div>
  )
}
