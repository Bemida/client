import { useContext } from 'react'
import Layout from '../Layout'
import { DataContext } from '../Context/MainContext'

export default function Didi() {
  const context = useContext(DataContext)
  // console.log(context.stage);
  return (
    <div>
      <Layout />
    </div>
  )
}
