import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResults from './SearchResults';
import Image7 from '../Images/img7.jpg';
import Image8 from '../Images/img8.jpg';
import Image9 from '../Images/img9.jpg';
import Image10 from '../Images/img10.jpg';
import Image11 from '../Images/img11.jpg';
import Image12 from '../Images/img12.jpg';


function SearchPage() {
    return (
        <div className="search">
            <div className="search_info">
                <p>72 stays - 25 November to 5 December - 4 guests</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>

                <SearchResults location={"location"} src={Image7} title={"Lakeside stylish cotage"} description={"2 guests · 1 bedroom · 1 bed · 1 bath · Kitchen"} rating={"4.83"} price={"$15/night"} total={"$15 total"} />
                
                <SearchResults location={"location"} src={Image8} title={"Independent luxury studio apartment"} description={"2 guests · 1 bedroom · 1 bed · 1.5 bath · Wifi · Kitchen"} rating={"4.55"} price={"$30/night"} total={"$150 total"} />

                <SearchResults location={"location"} src={Image9} title={"Stay at this spacious 2br house"} description={"2 guests · 2 bedroom · 2 bed · 1 bath · Wifi · Kitchen"} rating={"4.6"} price={"$35/night"} total={"$35 total"} />

                <SearchResults location={"location"} src={Image10} title={"Lavin Suites- Accessible clean and secure"} description={"2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen"} rating={"4.8"} price={"$30/night"} total={"$150 total"} />

                <SearchResults location={"location"} src={Image11} title={"5 star luxury apartment"} description={"2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen"} rating={"4.9"} price={"$45/night"} total={"$45 total"} />

                <SearchResults location={"location"} src={Image12} title={"Lovely studio aprt Free Wifi & parking"} description={"2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen"} rating={"4.8"} price={"$18/night"} total={"$36 total"} />

            </div>
        </div>
    )
}

export default SearchPage
