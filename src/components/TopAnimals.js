import React, { useState, useEffect } from 'react';
import DeleteAnimalButton from './DeleteAnimalButton';

function TopAnimals() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topAnimals, setTopAnimals] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/animals')
      .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        })
      .then((jsonifiedResponse) => {
          setTopAnimals(jsonifiedResponse)
          setIsLoaded(true)
        })
      .catch((error) => {
        setError(error.message)
        setIsLoaded(true)
      });
    }, [isLoaded])

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <>
        <h1>Top Animals</h1>
        <button onClick={() => setIsLoaded(false)}>Reload top animals</button>
        <ul>
          {topAnimals.map((animal, index) =>
            <li key={index}>
              <h3>{animal.name}</h3>
              <p>Species: {animal.species}</p>
              <p>Age: {animal.age}</p>
              <DeleteAnimalButton animalId={animal.animalId}/>
            </li>
          )}
        </ul>
      </>
    );
  }
}

export default TopAnimals;