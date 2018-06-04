import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map((r,i) => (
    <li key={i}>
      {r}
    </li>
  ))
  return <div className={(props.results.length !== 0)? "sugg": "sugg2"}>
          <ul>{options}</ul>
          </div>
}

export default Suggestions
