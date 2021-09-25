import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Meals from '../Meals/Meals';
import './Main.css'

const Main = () => {
    const [meals, setmeals] = useState([]);
    const [details, setDetails] = useState([]);
    const [searchedMeal, setSearchMeal] = useState([]);
    useEffect(() => {
        fetch('./meal.JSON')
            .then(res => res.json())
            .then(data => {
                setmeals(data);
                setSearchMeal(data);
            })
    }, []);

    const handleDetails = meals => {
        setDetails(meals);
    }
    const searchHandle = event =>{
        const searchText = event.target.value;
        const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setSearchMeal(matchedMeals);
    }
    return (
        <div className='container'>
            <form class="d-flex w-50 mx-auto my-4">
                <input onChange={searchHandle}  class="form-control me-2 search-btn" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className="row my-3">
                <div className="col-md-8">
                    {
                        searchedMeal.map(meal => <Meals
                            key={meal.idMeal}
                            meal={meal}
                            handleDetails={handleDetails}
                        ></Meals>)
                    }
                </div>
                <div className="col-md-4">
                    <Details details={details}></Details>
                </div>
            </div>
        </div>
    );
};

export default Main;