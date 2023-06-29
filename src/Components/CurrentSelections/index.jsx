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

  return (
    <div className={styles.name} style={style1} >

      <ul className={styles.Selectionlist}>
        {
          keys
            .filter((v) => LanguageTranslater[v] && LanguageTranslater[v]['group'] === 'dimentions')
            .forEach((k) => regularText += LanguageTranslater[k]['heb'] + ' ' + selections[k] + ' ' + LanguageTranslater[k]['postfix'])
        }
          {regularText&&<li key='dimentions'>
            <SelectionRow bolder={LanguageTranslater['dimentions']['heb']} regular={regularText} />
          </li>}
        
        {/* TODO: add sort() after filter */}
        {
        keys
          .filter((v) => LanguageTranslater[v] && !LanguageTranslater[v]['group'])
          .sort((a, b) => Number(LanguageTranslater[a]['ordinal']) < Number(LanguageTranslater[b]['ordinal']) ? 1 : -1)
          .map((k) => {
            typeof selections[k] === 'object' ?// <li key={k}>{k}</li>:
              Object.keys(selections[k])
                .map((d) =>
                  <li key={d}><SelectionRow bolder={LanguageTranslater[k]['heb']} regular={selections[k][d]} /></li>) :
              <li key={k}><SelectionRow bolder={LanguageTranslater[k]['heb']} regular={selections[k] + ' ' + LanguageTranslater[k]['postfix']} /></li>
            }
          )
        }


      </ul>

    </div>
  )
}

export default CurrentSelections