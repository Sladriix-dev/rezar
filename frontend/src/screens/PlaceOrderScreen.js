import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

function PlaceOrderScreen() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  if (cart.paymentMethod) {
    navigate("/payment");
  }

  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );

  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h3>Livraison</h3>
                <p>
                  <strong>Nom:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Addresse:</strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  , {cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h3>Paiment</h3>
                <p>
                  <strong>Méthode:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h3>Vos articles</h3>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          />
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          {item.qty} x {item.price}€ = {item.qty * item.price}€
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h3>Récapitulatif de la commande</h3>
              </li>
              <li>
                <div className="row">
                  <div>Articles</div>
                  <div>{cart.itemsPrice.toFixed(2)} €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Livraison</div>
                  <div>{cart.shippingPrice.toFixed(2)} €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>TVA</div>
                  <div>{cart.taxPrice.toFixed(2)} €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    <strong>{cart.totalPrice.toFixed(2)} €</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Passer la commande
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
