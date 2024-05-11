import React from 'react';

const Card = ({ title, name, price, country, rate, img, reviewCount, sold}) => {
  return (
    <div className='card'>
      {sold === true && <div className="card-badge">Active</div>}
      <img src={img} alt="" />

      <div className="card-stats">
        <img src="public/images/star.png" alt="" />
        <span>{rate}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{country}</span>
      </div>

      <p className='title'>{title}</p>
      <p className='name'>{name}</p>
      <p className='price'>From {price} / person</p>
    </div>
  );
};

export default Card;