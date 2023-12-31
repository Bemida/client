import { useContext } from "react"
import Section from "./Section"
import { DataContext } from "../../../Context/MainContext"
import FloorFrame from "./FloorFrame"

function Closet({ dimensions, withDoors }) {


  const
    // order = useContext(DataContext).newFakeData.orders,
    order = useContext(DataContext).fullOrder,
    doors = order.doors,
    // doors = order.doors,
    sections = order.sections
  // sections = order.sections,
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
            numOfDrawers={v.drawers}
            withRod={v.hangingRod}
            withLegs={true}
            oneDoor={isSingleDoor(i)}
            withDoors={withDoors}
          />
        )
      })}
      {(order.base !== "רגליים") && <FloorFrame dimensions={dimensions} />}
    </>
  )
}

export default Closet



      // X: isSingleDoor(i) ? (i * (dimensions.X / doors)) : (i * (dimensions.X / (doors * 2))),