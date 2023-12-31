import { createContext, useState } from "react"
import newFakeData from '../Data/fakeDataTest'

//This is where we'll manager any context that needs to be used across our applications. 
//Below we've created a component that contains multiple states. We can later wrap a component with this one to give it access to all our different contexts

export const DataContext = createContext({});

const ContextProvider = ({ children }) => {
    const [stage, setStage] = useState(1)
    const [order, setOrder] = useState(newFakeData.order)
    const [fullOrder, setFullOrder] = useState(newFakeData.emptyOrderData)

    return (
        <DataContext.Provider value={{
            fakeData: newFakeData, order, setOrder, newFakeData,
            stage, setStage, fullOrder, setFullOrder
        }}>
            {children}

        </DataContext.Provider>)

}

export default ContextProvider
