import React from 'react'

function Errors({ errorsMsg }) {
  return (
    <div><ul>{errorsMsg.map((e, i) => <li key={i}>{e.msg}</li>)}</ul></div>
  )
}

export default Errors