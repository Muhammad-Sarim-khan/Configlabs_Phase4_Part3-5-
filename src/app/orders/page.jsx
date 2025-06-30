'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      const res = await fetch(`/api/get-orders?userId=${user.id}`);
      const data = await res.json();
      setOrders(data.orders || []);
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 mb-4 rounded shadow">
            <p><strong>Total:</strong> ${order.totalPrice}</p>
            <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
            <ul className="mt-2 list-disc ml-5">
              {order.products.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.quantity} — ${item.price}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
