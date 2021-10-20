import React from 'react';
import './SearchResults.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResults({
    location,
    src,
    title,
    description,
    rating,
    price,
    total
}) {
    return (
        <div className="search_results_container">
            <img src={src} alt="" />
            <FavoriteBorderIcon className="fav_icon" />
            <div className="search_info_container">
                <div className="results_info_top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div> 
                <div className="results_info_bottom">
                    <div className="star">
                        <StarIcon className="star_icon"/>
                        <strong>{rating}</strong>
                    </div>
                    <div className="price">
                        <h3>{price}</h3>
                        <h5>{total}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
