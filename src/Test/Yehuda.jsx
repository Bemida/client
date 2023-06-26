import React, { useContext } from 'react'
import { DataContext } from '../Context/MainContext'

export default function Yehuda() {
  const context = useContext(DataContext)

  console.log(context.fakeData.items.categories)

  
  console.log(context);
  return (
    <div>Yehuda</div>
  )
}
