import React from 'react';
import PropTypes from 'prop-types'

function DeleteAnimalButton(props) {
  const { animalId } = props

  const handleDelete = async (animalId) => {
    try {
      await fetch(`https://localhost:5001/api/animals/${animalId}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error deleting animal:', error);
    }
  };

  return (
    <>
      <button onClick={() => handleDelete(animalId)}>Delete</button> 
    </>
  );
}

DeleteAnimalButton.propTypes = {
  animalId: PropTypes.number
}

export default DeleteAnimalButton;
