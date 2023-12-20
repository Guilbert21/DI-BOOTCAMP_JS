import React, { useState } from 'react';
import './vote.css'; 

const Vote = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const vote = (index) => {
    setLanguages((prevLanguages) => {
      const newLanguages = [...prevLanguages];
      newLanguages[index].votes++;
      return newLanguages;
    });
  };

  return (
    <div className="container">
      <h1>Vote for your favorite language!</h1>
      {languages.sort((a,b) => b.votes-a.votes).map((language, index) => (
        <div className="language-container" key={index}>
          <button onClick={() => vote(index)}>Vote</button>
          <p className="language-name">{language.name}</p>
          <p className="language-votes">{language.votes} Votes</p>
        </div>
      ))}
    </div>
  );
};

export default Vote;
