import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/home">ホームへ</Link>
    </div>
  );
}

export default About;
