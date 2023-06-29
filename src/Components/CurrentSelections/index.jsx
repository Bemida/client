import SelectionRow from '../../Layout/SelectionRow';
import styles from './style.module.css'

export const LanguageTranslater = {

  userName: { heb: "שם", ordinal: 10, postfix: '', group: '' },// "John Doe",
  userPhone: { heb: "טלפון", ordinal: 10, postfix: '', group: '' },// "082345678",
  userEmail: { heb: 'דוא"ל' },// "test@test.com",

  status: { heb: "סטטוס", ordinal: 10, postfix: '', group: '' },// "in_progress",
  shipping: { heb: "שיטת משלוח", ordinal: 10, postfix: '', group: '' },// "regular",
  furniture: { heb: "סוג", ordinal: 10, postfix: '', group: '' },// "Closet",
  color: { heb: "צבע", ordinal: 10, postfix: '', group: '' },// "red",

  shelves: { heb: "מדפים", ordinal: 10, postfix: '', group: '' },
  hangingRod: { heb: "מוט תליה", ordinal: 10, postfix: '', group: '' },
  drawers: { heb: "מגירות", ordinal: 10, postfix: '', group: '' },
  section1: { heb: "עמודה ימנית", ordinal: 10, postfix: '', group: '' },
  section2: { heb: "עמודה שמאלית", ordinal: 10, postfix: '', group: '' },
  material: { heb: "חומר", ordinal: 10, postfix: '', group: '' },// "wood",
  height: { heb: "גובה", ordinal: 1, postfix: 'ס"מ', group: "dimentions" },// 200,
  width: { heb: "רוחב", ordinal: 2, postfix: 'ס"מ', group: "dimentions" },// 100,
  depth: { heb: "עומק", ordinal: 3, postfix: 'ס"מ', group: "dimentions" },// 50,
  doors: { heb: "מספר דלתות", ordinal: 10, postfix: '', group: '' },// 2,
  // color: {heb: "צבע", ordinal: 10, postfix: '', group: ''},// "brown",
  handleId: { heb: "דגם ידית", ordinal: 10, postfix: '', group: '' },// "5678",
  stageNo: { heb: "סוג בסיס", ordinal: 10, postfix: '', group: '' },// 5,
  base: { heb: "בסיס", ordinal: 10, postfix: '', group: '' },// "legs",
  // total: 1000,
  dimentions: { heb: "מידות", ordinal: 10, postfix: '', group: '' }
};


// props : selections - the order data form the conte
// creator:
function CurrentSelections({ style = {}, selections }) {

  const keys = Object.keys(selections)
  let regularText = ''
  console.log(selections)
const listOfFlat = keys
.filter((v) => selections[v] && LanguageTranslater[v] && !LanguageTranslater[v]['group'])
.sort((a, b) => Number(LanguageTranslater[a]['ordinal']) < Number(LanguageTranslater[b]['ordinal']) ? 1 : -1)

// console.log(listOfFlat);
  keys//שרשור נתוני מימדי הארון לשורה יחידה
    .filter((v) => selections[v] && LanguageTranslater[v] && LanguageTranslater[v]['group'] === 'dimentions')
    .sort((a, b) => Number(LanguageTranslater[a]['ordinal']) < Number(LanguageTranslater[b]['ordinal']) ? 1 : -1)
    .forEach((k) => regularText += LanguageTranslater[k]['heb'] + ' ' + selections[k] + ' ' + LanguageTranslater[k]['postfix'])
  return (
    <div className={styles.name} style={style} >

      <ul className={styles.Selectionlist} style={style.li} >
        {
          regularText&&<li key='dimentions'>
            <SelectionRow bolder={LanguageTranslater['dimentions']['heb']} regular={regularText} />
          </li>
        }
        {
       listOfFlat
          .map((k) => 
            typeof selections[k] === 'object' ?// <li key={k}>{k}</li>:
              Object.keys(selections[k])//כניסה לאובייקט
                .map((d) =>
                  <li key={d}><SelectionRow bolder={LanguageTranslater[k]['heb']} regular={selections[k][d]} /></li>) :
            //   //אם לא אובייקט
              <li key={k}><SelectionRow bolder={LanguageTranslater[k]['heb']} regular={selections[k] + ' ' + LanguageTranslater[k]['postfix']} /></li>
            
          )
        }


      </ul>

    </div>
  )
}

export default CurrentSelections