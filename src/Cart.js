import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {    //State
        super();
        this.state = {
           product: [
            {
                price: "68,900",
                title: 'iPhone 12 PRO ',
                qty: 1,
                img: '',
                id: 1
            },
            {
                price: "90,900",
                title: 'iPad PRO ',
                qty: 1,
                img: '',
                id: 2
            },
            {
                price: "1,23,900",
                title: 'Macbook PRO ',
                qty: 1,
                img: '',
                id: 3
            }
        ]
        }
    }
    render() {
        const { product } = this.state;
        return (
            <div className="cart">
                {product.map((product) =>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;