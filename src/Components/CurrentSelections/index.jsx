import SelectionRow from '../../Layout/SelectionRow';
import styles from './style.module.css'

export const LanguageTranslater = {

  userName: {heb: "שם", ordinal: 10, postfix: ''},// "John Doe",
  userPhone: {heb: "טלפון", ordinal: 10, postfix: ''},// "082345678",
  userEmail: {heb: 'דוא"ל'},// "test@test.com",

  status: {heb: "סטטוס", ordinal: 10, postfix: ''},// "in_progress",
  shipping: {heb: "שיטת משלוח", ordinal: 10, postfix: ''},// "regular",
  furniture: {heb: "סוג", ordinal: 10, postfix: ''},// "Closet",
  color: {heb: "צבע", ordinal: 10, postfix: ''},// "red",
  section1: {
      shelves: 3,
      hangingRod: true,
      drawers: 4,
  },
  section2: {
      shelves: 2,
      hangingRod: true,
      drawers: 2,
  },
  material: {heb: "חומר", ordinal: 10, postfix: ''},// "wood",
  height: {heb: "גובה", ordinal: 1, postfix: 'ס"מ'},// 200,
  width: {heb: "רוחב", ordinal: 2, postfix: 'ס"מ'},// 100,
  depth: {heb: "עומק", ordinal: 3, postfix: 'ס"מ'},// 50,
  doors: {heb: "מספר דלתות", ordinal: 10, postfix: ''},// 2,
  // color: {heb: "צבע", ordinal: 10, postfix: ''},// "brown",
  handleId: {heb: "דגם ידית", ordinal: 10, postfix: ''},// "5678",
  stageNo: {heb: "סוג בסיס", ordinal: 10, postfix: ''},// 5,
  base: {heb: "", ordinal: 10, postfix: ''},// "legs",
  // total: 1000,
};


// props : 
// creator:
function CurrentSelections({style={},selections} ) {

  const keys = Object.keys(selections)
  // console.log("selections :", selections);
  // console.log("style :", style1);
  //{console.log('------',style1.li)}
  return (
    <div className={styles.name} style={style1} >

      <ul className={styles.Selectionlist}>
        {/* TODO: add sort() after filter */}
        {keys
        .filter((v)=>LanguageTranslater[v])
        .sort((a,b)=>Number(LanguageTranslater[a]['ordinal'])<Number(LanguageTranslater[b]['ordinal'])?1:-1)
        .map((k) => 
          <li key={k}>{// style={style1.li}
            
            typeof selections[k] === 'object' ? k : 
            <SelectionRow bolder= {LanguageTranslater[k]['heb']} regular={selections[k] + ' ' + LanguageTranslater[k]['postfix']}/>

            }
          </li>)}

      </ul>

    </div>
  )
}

export default CurrentSelections