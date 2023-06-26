import styles from './style.module.css'
// import { createContext, useContext } from 'react';

// props : 
// creator: Michael Arlan
function DsplayCurrentSelection({ ...props} ) {

  let currentSelection = useContext(DataContext)

  let SelectionOptions=[ 
    [],
    [],
    ["מידות הארון","דלתות"],
    ["פרזול","צבע הארון","צבע חוץ"],
  ]

  let currentStep = 4

  let ListTitle = "הארון שלי"

  return (
    <div className="currentSelection" style={style} {...props}>

        <h3 className='ListTitle'>{ListTitle}</h3>
        
        <ul className='Selectionlist'>
            {/* SelectionOptions. */}
          

        </ul>
        
    </div>
  )
}

export default DsplayCurrentSelection