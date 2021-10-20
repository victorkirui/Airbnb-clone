import React,{ useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import DatePicker from './DatePicker';
import { useHistory } from 'react-router-dom';

function Banner() {
    const [datePicker,setDatePicker] = useState(false);
    const history = useHistory();

    return (

        <div className="banner">
            <div className="search_dates">
                { datePicker && <DatePicker /> }
                <Button className="search_dates_btn" onClick={()=> setDatePicker(!datePicker) }>{datePicker ? "Hide Calender" : "Search Dates"}</Button>
            </div>
            <div className="banner_content">
                <h1>Get out and stretch your imagination</h1>
                <p>Plan a differnt kind of gataway to uncover the hidden gems near you.</p>
                <Button variant="outlined" onClick={()=> history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
