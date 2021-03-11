import React from 'react';

const CartItem = (props) =>{
        const {price, title, qty} = props.product; //Object destructuring
        const{ 
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteQuantity
        } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs.{price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {button} */}
                        <img 
                        alt="increase" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1615478691~hmac=c38e94d9a3b7e222d22450360be25f7c"
                        onClick={()=> onIncreaseQuantity(product)} 
                         />

                        <img 
                        alt="decrease" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615478719~hmac=3395baca3559399142648b47fd22f682"
                        onClick={()=> onDecreaseQuantity(product)}
                        />

                        <img 
                        alt="delete" className="actions-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/3964/3964085.svg?token=exp=1615478745~hmac=0b0d7053dffdc81dc492175208bbbb5e"
                        onClick={()=> onDeleteQuantity(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;