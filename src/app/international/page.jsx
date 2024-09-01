"use client";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

const page = () => {
  const [items, setItems] = useState([]);
 

  useEffect(() => {
    fetch("/internatialNews.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold">International News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24">
        {items?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
