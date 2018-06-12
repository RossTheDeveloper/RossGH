import React from 'react'
import { Link } from 'react-router-dom';

const Suggestions = (props) => {
  const options = props.results.map((r) => (
    <Link key={r.id} to={`/product/${r.id}`}>
      <li onClick={()=>props.off()}>
          {r.name}
      </li>
    </Link>
  ))

  return <div className={(props.results.length !== 0)? "sugg": "sugg2"}>
          <ul className="suggestionList">{options}</ul>
          </div>
}

export default Suggestions
