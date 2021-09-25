import React from 'react';
import './Meals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowRight} />

const Meals = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    return (
        <div>
            <div class="card mb-3 meal">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={strMealThumb} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{strMeal}</h5>
                            <p class="card-text">{strInstructions.slice(0,160)}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <button onClick={()=> props.handleDetails(props.meal)} className='detail-btn'>Details {element}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;