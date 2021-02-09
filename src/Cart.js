import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {    //State
        super();
        this.state = {
           products: [
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
    handleIncreaseQuantity = (product) =>{
        console.log('Hey please inc. the qty of',product);
        const { products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity = (product) =>{
        console.log('Hey please dec. the qty of',product);
        const { products} = this.state;
        const index = products.indexOf(product);
        const {qty} = this.state.products;
        
        if(products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;
        this.setState({
            products
        })
    }
    handleDeleteProduct = (id) =>{
        const { products } = this.state;
        const items = products.filter((item)=> item.id !== id);
        this.setState({
            products: items
        })
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) =>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteQuantity={this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;