import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import Image1 from '../Images/img1.jpg';
import Image2 from '../Images/img2.jpg';
import Image3 from '../Images/img3.jpg';
import Image4 from '../Images/img4.jpg';
import Image5 from '../Images/img5.jpg';
import Image6 from '../Images/img6.jpg';

function Home() {
    return (
        <div className="home">
            {/* Banner Section */}
            <Banner />

            {/* Cards Section */}
            <div className="card_wrapper">
                <Card src={Image1} title={"Outdoor Gateaways"} description={"Superhost with breathtaking view of Lake in Sunny eastside."} price={"$55/night"}/>
                <Card src={Image2} title={"Open space penthouse spacious apartment"} description={"Fully furnished rooftop pad with outdoor pool area. "} price={"$30/night"}/>
                <Card src={Image3} title={"Nairobi Dawn Chorus"} description={"Enjoy the amazing sites of Nairobi with this stunning penthouse"} price={"$35/night"}/>
            </div>
            <div className="card_wrapper">
                <Card src={Image4} title={"Cozy Loft apartment with a pool and gym"} description={"Superhost with great amenities and a fabulous shopping complex nearby"} price={"$70/night"}/>
                <Card src={Image5} title={"Unique stays"} description={"Spaces that are more than just a place to sleep."} price={"$45/night"}/>
                <Card src={Image6} title={"Entire homes"} description={"Comfortable private places,with room for friends or family"} price={"$50/night"}/>
            </div>
        </div>
    )
}

export default Home
