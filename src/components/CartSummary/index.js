// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      const lengthOfList = cartList.length
      return (
        <div className="cart-summary-container">
          <div className="responsive-cart-summary-container">
            <h1 className="total-count">
              Order Total: <span className="amount">Rs {total}/-</span>
            </h1>
            <p className="items-in-cart">{lengthOfList} items in Cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
