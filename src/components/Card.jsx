import React from "react";

const Card = ({ item }) => {
  const { title, description, date } = item;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 20)}...</p>
          <span>{date}</span>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
