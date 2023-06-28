import styles from "./style.module.css";
import Counter from "../Counter";
import Toggle from "../Toggle";



export default function SidebarInnerTab({ childTab, onChange }) {


    switch (childTab[1].type) {
        case 'number':
            return (
                <div className={styles.shelves}>
                    <span>{childTab[1].name}</span>
                    <Counter defaultNumber={0} onChange={(value) => onChange(value, childTab)} />
                </div>
            )

        case 'boolean':
            return (
                <div className={styles.hangingRod}>
                    <span>{childTab[1].name}</span>
                    {<Toggle defaultChecked={true} onChange={((checked) => onChange(checked, childTab))} />}
                </div>
            )



        default:
            return null;
    }
}
