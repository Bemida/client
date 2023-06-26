import { interpolate } from '@react-spring/core'
// import styles from './style.module.css'

import { DataContext } from '../../Context/MainContext'
import { useContext } from 'react'



// props : 
// creator: Michael Arlan
function DisplayCurrentSelection({ ...props }) {

  const context = useContext(DataContext)

  //  console.log(context.fakeData.items.categories)

  // console.log(context.fakeData.order)

  const selections = context.fakeData.order.order

  // let SelectionOptions=
  // [ 
  //   [],
  //   [],
  //   ["מידות הארון","דלתות"],
  //   ["פרזול","צבע הארון","צבע חוץ"]
  // ]


  // console.log(SelectionOptions);
  // console.log('typeof(SelectionOptions)' + typeof(SelectionOptions));
  let currentStep = context.fakeData.order.stageNo
  let ListTitle = "הארון שלי"

  const keys = Object.keys(selections)
  return (
    <div className="currentSelection"  >

      <h3 className='ListTitle'>{ListTitle}</h3>

      <ul className='Selectionlist'>
        {/* for (const a of context.fakeData.order.order)
        {
          a && <li><span className='OderKey'>{a}</span><span className='OderValue'>{Selections[a]}</span></li>
        } */}
        {keys.map((k) => <li><span className='OderKey'>{k}</span><span className='OderValue'>{selections[k]}</span></li>)
        }




      </ul>

    </div>
  )
}

export default DisplayCurrentSelection