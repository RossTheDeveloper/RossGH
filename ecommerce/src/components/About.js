import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <h1>{props.match.params.filter}</h1>
    </div>
  );
}

export default About;
