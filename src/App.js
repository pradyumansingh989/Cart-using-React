import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {    //State
    super();
    this.state = {
       products: [
        {
            price: 68900,
            title: 'iPhone 12 PRO ',
            qty: 1,
            img: 'https://images-na.ssl-images-amazon.com/images/I/71fJ-gmBZtL._SX466_.jpg',
            id: 1
        },
        {
            price: 90900,
            title: 'iPad PRO ',
            qty: 1,
            img: 'https://static.bhphoto.com/images/images2500x2500/1584548574_1553824.jpg',
            id: 2
        },
        {
            price: 123900,
            title: 'Macbook PRO ',
            qty: 1,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1603406905000',
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
getCartCount = () => { 
  const { products } = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.qty;
  })
  return count;
}
getCartTotal = () => {
  const { products } = this.state;
  let cartTotal = 0;
  products.map((product)=>{
    cartTotal = cartTotal + product.qty * product.price
  })
  return cartTotal;
}
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteProduct}
        />
        <div style={{padding:10, fontSize:20}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
