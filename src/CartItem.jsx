import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse price string or number to float
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    if (typeof cost === 'string') {
      return parseFloat(cost.replace(/[^0-9.-]+/g, '')) || 0;
    }
    return 0;
  };

  // Calculate total amount for all products in the cart (Task 7)
  const calculateTotalAmount = () => {
    const total = cart.reduce((sum, item) => {
      return sum + parseCost(item.cost) * item.quantity;
    }, 0);
    return total.toFixed(2);
  };

  // Calculate total quantity of all items in cart
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate subtotal for an individual plant item (Task 7)
  const calculateTotalCost = (item) => {
    const subtotal = parseCost(item.cost) * item.quantity;
    return subtotal.toFixed(2);
  };

  // Increment item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement item quantity (removes if quantity reaches 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item completely from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Checkout button handler with "Coming Soon" notification
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('🌱 Coming Soon: Online checkout functionality is under development!');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header-section">
        <h2 className="cart-title">Your Plant Cart</h2>
        <p className="cart-summary-text">
          Review your chosen houseplants before continuing to checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-view">
          <div className="empty-cart-icon">🪴</div>
          <h3>Your cart is currently empty</h3>
          <p>You haven't selected any houseplants yet. Bring nature into your space today!</p>
          <button className="btn-continue-shopping" onClick={handleContinue}>
            ← Explore Plants Catalog
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-card" key={item.name}>
                <div className="cart-image-box">
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>

                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <button
                      className="btn-delete-item"
                      title="Remove plant from cart"
                      onClick={() => handleRemove(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                      <span>Delete</span>
                    </button>
                  </div>

                  <p className="cart-item-unit-price">
                    Unit Price: <strong>{typeof item.cost === 'string' && item.cost.startsWith('$') ? item.cost : `$${item.cost}`}</strong>
                  </p>

                  <div className="cart-item-footer">
                    <div className="quantity-controller">
                      <span className="qty-label">Quantity:</span>
                      <button
                        className="btn-qty btn-decrement"
                        onClick={() => handleDecrement(item)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="cart-item-quantity-value">{item.quantity}</span>
                      <button
                        className="btn-qty btn-increment"
                        onClick={() => handleIncrement(item)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="item-subtotal">
                      <span className="subtotal-label">Subtotal:</span>
                      <span className="subtotal-value">${calculateTotalCost(item)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="order-summary-card">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-row">
              <span>Total Plant Units:</span>
              <strong className="summary-total-qty">{calculateTotalQuantity()}</strong>
            </div>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${calculateTotalAmount()}</span>
            </div>
            <div className="summary-row">
              <span>Standard Nursery Delivery:</span>
              <span className="free-shipping-tag">FREE</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Total Cart Amount:</span>
              <strong className="summary-grand-total">${calculateTotalAmount()}</strong>
            </div>

            <div className="summary-actions">
              <button
                id="checkout-btn"
                className="btn-checkout"
                onClick={handleCheckoutShopping}
              >
                Proceed to Checkout
              </button>
              <button
                id="continue-shopping-btn"
                className="btn-continue-shopping secondary"
                onClick={handleContinue}
              >
                ← Continue Shopping
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartItem;
