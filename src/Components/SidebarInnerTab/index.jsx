import styles from "./style.module.css";
import Counter from "../Counter";
import Toggle from "../Toggle";



export default function SidebarInnerTab({ childTab, onChange }) {

    const transObj = {
        drawers :" עמודות",
        hangingRod : "מוט תלוי",
        shelves :" מגירות"
    }

    switch (typeof  childTab[1]) {
        case 'number':
            return (
                <div className={styles.shelves}>
                    <span>{transObj[childTab[0]]}</span>
                    <Counter defaultNumber={0} onChange={(value) => onChange(value, childTab[0])} />
                </div>
            )

        case 'boolean':
            return (
                <div className={styles.hangingRod}>
                    <span>{transObj [childTab[0]]}</span>
                    {<Toggle defaultChecked={true} onChange={((checked) => onChange(checked, childTab[0]))} />}
                </div>
            )



        default:
            return null;
    }
}
