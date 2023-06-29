import { useContext } from "react"
import Section from "./Section"
import { DataContext } from "../../../Context/MainContext"
import FloorFrame from "./FloorFrame"

function Closet({ dimensions }) {

  const
    order = useContext(DataContext).newFakeData.orders,
    doors = order.doors,
    sections = order.sections,
    numOfSections = sections.length

  function isSingleDoor(i) {
    return (i + 1 === sections.length && doors % 2 === 1)
  }

  return (
    <>
      {sections.map((v, i) => {
        return (
          // (i === 2) &&
          < Section
            key={i}
            dimensions={{
              X: isSingleDoor(i) ? (dimensions.X / doors) : ((dimensions.X / doors) * 2),
              Y: dimensions.Y,
              Z: dimensions.Z
            }
            }
            position={{
              X: isSingleDoor(i) ? (i * (dimensions.X / doors) * 2) : (i * ((dimensions.X / doors) * 2)),
              Y: 0,
              Z: 0
            }}
            numOfShelves={v.shelves}
            withLegs={true}
            oneDoor={isSingleDoor(i)}
          />
        )
      })}
      {(order.base !== "legs") && <FloorFrame dimensions={dimensions} />}
    </>
  )
}

export default Closet



      // X: isSingleDoor(i) ? (i * (dimensions.X / doors)) : (i * (dimensions.X / (doors * 2))),