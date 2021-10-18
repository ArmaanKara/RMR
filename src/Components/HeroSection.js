import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import { SearchBar } from './SearchBar';
// import Cards from './Cards';

class HeroSection extends React.Component {
    
    state = {
        search : ""
    }

    onChange = (e) =>{
        this.setState({ search : e.target.value });
    }
    render() {

        return(
            <div className='hero-container'>
                {/* <img src="/images/amy-tran-NbP0_9xb83s-unsplash.jpg" /> */}
                <h1>Rate My Residence</h1>
                <p>Find a Residence Below!</p>
                {/* <input type="text" icon="search" label="Search...." onChange={this.onChange}/> */}
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>Write a review</Button>
                    <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>Residences <i className='fas fa-house-user'/> </Button>
                </div>
            </div>
        )
    }
}

export default HeroSection;