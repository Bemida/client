import Input from '../Components/Input'
import numberDoors from '../Functions/numberDoors'
export default function Haya() {
    console.log('haya cmp')
    console.log(numberDoors(65))
    return (
        <div>
            {/* <form action=''> */}
            <Input type='number' isRequired={true} label='width in cm' id='width' isValid={false} />
            <Input type='number' isRequired={true} id='depth' isValid={true} />
            <Input type='number' label='height in cm' id='height' isValid={false} />
            <input type="submit" value="Submit" />
            {/* </form> */}
        </div>
    )
}