import Input from '../Components/Input'
import numberDoors from '../Functions/numberDoors'
export default function Haya() {
    console.log('haya cmp')
    console.log(numberDoors(65))
    return (
        <div>
            <form action=''>
                <Input type='text' isRequired={true} label='width in cm' id='width' />
                <Input type='text' isRequired={true} />
                <Input type='number' label='height in cm' id='height' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}