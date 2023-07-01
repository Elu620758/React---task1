import React from 'react';
// For getting star value
import ReactStars from 'react-stars'
import './App.css';
import Nav from './Navigation';
// data stored in a productdata variable
import ProductData from './Products';
import './mobiles/1.jpg'

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            data: ProductData,
            cartCount: 0
        }
    }


    // Add to Cart function 
    addToCart = (event) => {
        let index = parseInt(event.target.dataset.id);

        let tempData = this.state.data;
        tempData[index].cart = true;
        this.setState({ cartCount: this.state.cartCount + 1 });
        this.setState({ data: tempData })
    }
    // Remove the product in Cart function
    removeFromCart = (event) => {
        let index = parseInt(event.target.dataset.id);

        let tempData = this.state.data;
        tempData[index].cart = false;

        if (this.state.cartCount > 0) {
            this.setState({ cartCount: this.state.cartCount - 1 });
        }

        this.setState({ data: tempData })
    }

    render() {
        return (
            <div className="App">
                <Nav count={this.state.cartCount} />                 {/* Navbar  */}
                <header className="bg-dark py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">Elumalai Mobile Shop</h1>
                            <p className="lead fw-normal text-white-50 mb-0">created by Elumalai</p>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row" style={{ marginTop: 20 }}>
                        {
                            this.state.data.map((item, index) => (
                                <div key={item.id} className="col-12 col-sm-12 col-md-4 col-lg-4 pb-2 pt-2">
                                    <div className="card" style={{ width: "18rem", padding: 10 }}>
                                        <img src={item.image} className="card-img-top" alt={item.title} width="450" height="300" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">$ {item.price}</p>
                                            <p className="ps-5 ms-4">
                                                {/* user can give Star Rating according to value   */}
                                                <ReactStars size={30}
                                                    half={false}
                                                    onChange={newRating => {
                                                        console.log(newRating);
                                                    }}
                                                />
                                            </p>
                                            {
                                                item.cart === false ?

                                                    <button className="btn btn-dark" data-id={index} onClick={(event) => this.addToCart(event)}>Add to Cart</button>
                                                    :

                                                    <button className="btn btn-danger" data-id={index} onClick={(event) => this.removeFromCart(event)}>Remove from cart</button>

                                            }

                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <footer className="py-5 bg-dark">
                    <div className="container"><p className="m-0 text-center text-white">Copyright © Elumalai</p></div>
                </footer>
            </div>
        );
    }
}

export default Main;