import React from 'react'
import SelectButton from '../Components/SelectorButton'

export default function Efrat() {
    return <>
        <div><SelectButton text={"glk"} isAvailable={true} /></div>
        <div><SelectButton text={"glk"} isAvailable={false} /></div>
        <div><SelectButton text={"glk"} isAvailable={false} /></div>
        <div><SelectButton text={"glk"} isAvailable={false} /></div>
    </>


}
