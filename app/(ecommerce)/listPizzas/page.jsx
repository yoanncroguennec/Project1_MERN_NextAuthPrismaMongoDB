"use client"

import React, { useEffect, useState } from "react";

export default function ListPizzas() {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
      fetchPrices();
    }, []);

    const fetchPrices = async () => {
      const res = await fetch("/api/listProductsCalledFromStripe");
      const data = await res.json();
      console.log(data);
      setPrices(data);
    };

  return (
    <div>ListPizzas</div>
  )
}
