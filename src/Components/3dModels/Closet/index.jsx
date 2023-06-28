import { useContext } from "react"
import Section from "./Section"
import { DataContext } from "../../../Context/MainContext"

function Closet({ dimensions }) {

  const
    order = useContext(DataContext).newFakeData.orders,
    sections = order.sections,
    numOfSections = sections.length


  return (
    sections.map((v, i) => {
      return (
        <Section
          key={i}
          dimensions={{
            X: (dimensions.X / numOfSections),
            Y: dimensions.Y,
            Z: dimensions.Z
          }}
          position={{
            X: (i * (dimensions.X / numOfSections)),
            Y: 0,
            Z: 0
          }}
          numOfShelves={i}
          withLegs = {true}
        />
      )
    })
  )
}
export default Closet