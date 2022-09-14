import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div>
      
        <img src={image} alt='' />
        <h2>{title}</h2>
        <h3>{calories} <span className='caloriesSpan'> Cal </span></h3>
        <ol> {ingredients.map(ingredient =>
          <li>{ingredient.text}</li>
          
          
          
          )}</ol>
       <hr className='HrStyle'/>
    </div>
  );
};

export default Recipe;