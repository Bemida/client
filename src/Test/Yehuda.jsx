import React, { useContext } from 'react'
import { DataContext } from '../Context/MainContext'


export default function Yehuda() {
  const context = useContext(DataContext)

  console.log(context.fakeData.items.categories)
  
  const something = ()=>{
   context.setStage(20)
    console.log (context.stage)
  }
  something ()

  
  console.log(context);
  return (
    <div>Yehuda</div>
  )
}
