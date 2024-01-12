import React, { useState, useEffect } from "react";

const Card = ({ id }) => {
  const [robotData, setRobotData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRobotData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setRobotData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching robot data:", error);
        setLoading(false);
      }
    };

    fetchRobotData();
  }, [id]);

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
          <div>
            <h2>{robotData.name}</h2>
            <p>{robotData.email}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
