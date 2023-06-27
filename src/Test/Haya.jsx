import Input from '../Components/Input'
import numberDoors from '../Functions/numberDoors'
import Button from '../Components/Button'
import { useContext } from 'react';
import { DataContext } from '../Context/MainContext'
import { useState } from 'react';

export default function Haya() {
    const context = useContext(DataContext);

    const [widthValue, setWidthValue] = useState();
    const [heightValue, setHeightValue] = useState();
    const [depthValue, setDepthValue] = useState();

    const extremeWidth = { min: 100, max: 150 };
    const extremeDepth = { min: 20, max: 60 };
    const extremeHeight = { min: 120, max: 180 };

    const selection = [{
        width: 60,
        height: 120,
        depth: 50
    },
    {
        color: 'beige',
        material: 'wood'
    }
    ];



    function handleOnClick() { //for click on next button==> updates the state
        console.log(context.order)
        context.setOrder({ stageNo: context.order.stageNo, order: { ...context.order.order, ...selection[context.order.stageNo - 1] } })
    }

    function updateState(elmt) {
        switch (elmt.id) {
            case 'width':
                setWidthValue(Number(elmt.value));
                break;
            case 'height':
                setHeightValue(Number(elmt.value));
                break;
            case 'depth':
                setDepthValue(Number(elmt.value));
        }
        console.log('width' + widthValue);
        console.log('depth' + depthValue);
        console.log('height' + heightValue);
    }

    function handleChange(e) {
        updateState(e.target);
        context.setOrder({ stageNo: context.order.stageNo, order: { ...context.order.order, [e.target.id]: Number(e.target.value) } })
        console.log(widthValue);
        console.log(depthValue);
        console.log(heightValue);
    }

    function checkValue(value, min, max) {
        let x = !value || value >= min && value <= max;
        return x;
    }
    return (
        <div>
            {/* < Button onClick={handleOnClick} text='next' color='red' width='100px' height='30px' /> */}
            {/* <form action=''> */}
            <Input type='number' isRequired={true} label='width in cm' id='width' isValid={checkValue(widthValue, extremeWidth.min, extremeWidth.max)} min={100} max={150} onChange={handleChange} />
            <Input type='number' isRequired={true} id='depth' isValid={checkValue(depthValue, extremeDepth.min, extremeDepth.max)} min={120} max={180} onChange={handleChange} />
            <Input type='number' label='height in cm' id='height' isValid={checkValue(heightValue, extremeHeight.min, extremeHeight.max)} min={20} max={60} onChange={handleChange} />
            {/* <input type="submit" value="Submit" />  */}
            {/* </form> */}
        </div>
    )
}
