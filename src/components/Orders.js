import React, { useEffect, useState } from "react";
import { db } from "../auth/firebase";
import "../css/Orders.css";
import { useStateValue } from "../StateProvider";
import Order from "./Order";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="order-container">
        {orders?.map((order) => {
          return <Order order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
