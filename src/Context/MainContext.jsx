import { createContext, useState } from "react"
import data from '../Data/fakeData'


//This is where we'll manager any context that needs to be used across our applications. 
//Below we've created a component that contains multiple states. We can later wrap a component with this one to give it access to all our different contexts

export const DataContext = createContext({})

const ContextProvider = ({ children }) => {
    const [stage, setStage] = useState({})

    return (
        <DataContext.Provider value={{  stage, setStage, fakeData:data }}>
            {children}
        
        </DataContext.Provider>)

}

export default ContextProvider

