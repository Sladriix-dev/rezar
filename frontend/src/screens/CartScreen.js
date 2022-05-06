import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function CartScreen(props) {
    const params = useParams();
    const productId = params.id;
    const {search} =useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl?Number(qtyInUrl):1;

  return (
    <div>
      <h1>Cart screen</h1>
      <p>Ajouté au panier : ProductID: {productId} Qty: {qty}</p>
    </div>
  );
}
