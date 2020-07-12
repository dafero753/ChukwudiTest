import React from 'react';
import axios from 'axios';
import Categories from '../Categories';
import Plates from '../Plates';
import categories from '../statics/recursos/categories.json';
import plates from '../statics/recursos/products.json';
import "./style.css";
import Icon1 from '../statics/recursos/assets/icons/igual.svg';
import Icon2 from '../statics/recursos/assets/icons/126474.svg';
import Icon3 from '../statics/recursos/assets/icons/1046784.svg';
import Img1 from '../statics/recursos/assets/images/headerimage.png';
import Icon9 from '../statics/recursos/assets/icons/118740.svg';


export default class Main extends React.Component{ 

    state = {
        categories: [],
        plates: [],
    }

    async componentDidMount() {
        try {
            this.setState( { loading: true });
            const { data } = await axios( {
                method: "GET",
                url: categories,
            } );
            this.setState( {categories: data.results } );
        } catch ( error ) {
            this.setState( { loading: false } );
        };
    };

    render(){
        return(
        <main className="main">
            <header className="header">
                <div className="title">
                    <img className="title-imagen" src={Icon1} alt="drownbox"/>
                    <div className="title-name">Chukwudi</div>
                </div>
                <form className="search">
                    <img className="search-image" src={Icon2} alt="drownbox"/>
                    <input className="search-input" placeholder="Search"></input>
                </form>
            </header>
            <div className="banner">
                <div className="banner-box">
                    <div>
                        <img className="banner-img" src={Img1} alt="inner" />   
                    </div>
                    <div className="banner-title">
                        <h1 className="banner-text1">$0 delivery for 30 days!</h1>
                        <h4 className="banner-text2">$0 deliverys fee for orders over $10for 30 days </h4>
                        <p className="learn">Learn more 
                            <i className="fa fa-long-arrow-right arrow" aria-hidden="true"></i>
                        </p>
                    </div>
                </div>
            </div>
            <div className="restaurants">
                <div className="side">
                    <h2 className="restaurant">Restaurants</h2>
                    <img className="hamburger" src={Icon3} alt="hamburger" />
                </div>
                <div>
                    <button className="button1">
                        <i className="fa fa-clock-o clock" aria-hidden="true"></i>
                        Delivery:<strong>Now</strong>
                        <i className="fa fa-angle-down pointer" aria-hidden="true"></i>
                        </button>
                </div>
            </div>
            <div className="type">
                <div className="type-options">
                    <Categories categories={categories} />
                    <div className="type-next">
                        <img className="next" src={Icon9} alt="next" />
                    </div>
                </div>                    
            </div>
            <div className="items">
            <   div className="item-food">
                    <Plates plates={plates} />
                </div>  
            </div>
        </main>
        );
    };
};