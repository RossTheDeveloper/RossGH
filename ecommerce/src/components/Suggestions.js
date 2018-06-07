import React from 'react'
import { Link } from 'react-router-dom';

const Suggestions = (props) => {
  const options = props.results.map((r,i) => (
    <li key={i} onClick={()=>props.off()}>
      <Link to to={`/product/${r.id}`}>
        {r.name}
      </Link>
    </li>
  ))
  return <div className={(props.results.length !== 0)? "sugg": "sugg2"}>
          <ul>{options}</ul>
          </div>
}

export default Suggestions
