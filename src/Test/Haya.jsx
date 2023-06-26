import Input from '../Components/Input'
import numberDoors from '../Functions/numberDoors'
import Button from '../Components/Button'
import { useContext } from 'react';
//import MainContext from '../Context/MainContext
import { DataContext } from '../Context/MainContext'


export default function Haya() {
    const context = useContext(DataContext)
    // console.log(context);
    // console.log(context.fakeData.items.categories)

    //console.log(x)
    //console.log(numberDoors(65))
    const selection = [{
        width: 60,
        height: 120,
        depth: 50
    },
    {
        color: 'beige',
        material: 'wood'
    }
    ]
    function handleOnClick() {
        //  debugger;
        // console.log('handle click')
        console.log(context.order)
        context.setOrder({ stageNo: context.order.stageNo + 1, order: { ...context.order.order, ...selection[context.order.stageNo - 1] } })
        // console.log(context.order);
    }
    return (
        <div>
            < Button onClick={handleOnClick} text='next' color='red' width='100px' height='30px' />
            {/* <form action=''> */}
            {/* <Input type='number' isRequired={true} label='width in cm' id='width' isValid={false} />
            <Input type='number' isRequired={true} id='depth' isValid={true} />
            <Input type='number' label='height in cm' id='height' isValid={false} />
            <input type="submit" value="Submit" /> */}
            {/* </form> */}
        </div>
    )
}