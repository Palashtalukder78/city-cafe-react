import React from 'react';
import photo from '../../images/nodata.gif';
import './Details.css'

const Details = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.details;
    if (!strMeal) {
        return (
            <div class="card photo p-4">
                <img src={photo} class="card-img-top " alt="Images" />
                <p class="card-text text-center">No Cooking yet</p>
            </div>
        );
    } else {
        return (
            <div>
                <div class="card ">
                    <img src={strMealThumb} class="card-img-top" alt="Images" />
                    <div class="card-body">
                        <h5 class="card-title">{strMeal}</h5>
                        <p class="card-text">{strInstructions}</p>
                    </div>
                </div>
            </div>
        );
    }

};

export default Details;