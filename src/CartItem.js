import React from 'react';

class CartItem extends React.Component {
    constructor() {    //State
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        console.log('this',this.state);
    }
    render() {
        const {price, title, qty} = this.state; //Object destructuring
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs.{price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {button} */}
                        <img 
                        alt="increase" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1612591898~hmac=f3a7ae29f1c4c958832dd1a6d47875a2"
                        onClick={this.increaseQuantity.bind(this)} 
                         />

                        <img 
                        alt="decrease" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1612591934~hmac=630d323e02b12df8377fc2da2a1a5187" />

                        <img 
                        alt="delete" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1612591986~hmac=0df38927315989ce404348ebfbdb8c05" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;