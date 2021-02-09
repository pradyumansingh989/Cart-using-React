import React from 'react';

class CartItem extends React.Component {
    increaseQuantity = () => {
        // console.log('this',this.state);
        this.setState({
            qty: this.state.qty + 1  //Shallow Merging with  state
        });
    }
    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState({
            qty: this.state.qty - 1
        });
    }
    render() {
        console.log('this.props', this.props);
        const {price, title, qty} = this.props.product; //Object destructuring
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
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1612760291~hmac=5b68397451c32563e559f109ab86cf4e"
                        onClick={()=> this.props.onIncreaseQuantity(this.props.product)} 
                         />

                        <img 
                        alt="decrease" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612760366~hmac=0beb2a57830d942f76f49da663c0b201"
                        onClick={()=> this.props.onDecreaseQuantity(this.props.product)}
                        />

                        <img 
                        alt="delete" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1612760400~hmac=4dd59b982b8cec0f8faecfe7d8aadd6c"
                        onClick={()=> this.props.onDeleteQuantity(this.props.product.id)}
                        />
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