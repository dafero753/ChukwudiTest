import React from 'react';
import firebase from 'firebase';
import selected from '../statics/recursos/products.json';
import Singup from '../Singup';
import Selected from '../Selected';
import icon6 from '../statics/recursos/assets/icons/emoji.png'
import icon8 from '../statics/recursos/assets/icons/109617.svg'
import './style.css';

export default class Aside extends React.Component{

    constructor () {
        super()
        this.state = {
            user: null,
        };
    };
    
    componentWillMount ( user ) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              this.setState( (state) => { return { user: user } } );
              console.log("esta conectado");
            } else {
              //this.setState({ user: null })
              console.log("no esta conectado");
            }
          });
    }

    handleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then( result => console.log ( `${result.user.email} is connected` ) )
            .catch(error => console.error ( `Error: ${error.data}: ${error.message}`));
    };

    handleLogout () {
        firebase.auth().signOut()
        .then( result => console.log ( `You just disconnected` ) )
        .catch(error => console.error ( `Error: ${error.data}: ${error.message}`));
    };

    render(){
        return(
        <aside className="aside">
            <Singup 
                user = { this.state.user }
                onAuth = { this.handleAuth.bind( this ) }
                onLogout = { this.handleLogout.bind (  this ) }
            />
            <div className="order">
                <div className="my">
                    <h1 className="my-my">My</h1>
                    <img className="my-emoti" src={icon6} alt="emoti" />
                </div>
                <div className="my-order">
                    <h1 className="my-order">order</h1>
                </div>
            </div>
            <div className="data">
                <div className="data-box1">
                    <div><p className="adress">625 St Marks Ave</p></div>
                    <div><p className="edit">Edit</p></div>
                </div>
                <div className="data-box2">
                    <div className="left-box2">
                        <i className="fa fa-clock-o clock2" aria-hidden="true"></i>
                        <div><p className="minuts">35 min</p></div>
                    </div>
                    <div>
                        <p className="choose">Choose time</p>
                    </div>
                </div>
            </div>
            <Selected selected={selected} />
            <div className="total">
                <div className="total1">
                    <p className="total-text">Total:</p>
                </div>
                <div className="total2">
                    <p className="total-price">$99.92</p>
                </div>                
            </div>
            <div className="checkout">
                <div className="checkout-person">
                    <div className="person-text">
                        <p className="tx">Persons</p>
                    </div>
                    <div className="person-number">
                    <p className="num">-</p><p className="num">1</p><p className="num">+</p>
                    </div>
                </div>
                <div className="checkout-arrow">
                    <p className="checkout-text">Checkout</p>
                    <img className="checkout-icon" src={icon8} alt="checkout-icon" />
                </div>
            </div>
        </aside>
        )
    }
}