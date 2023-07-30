import React from 'react';
import './Card.css'; 

const Card = (props) => {
  const options = props.options;
  const priceOptions = Object.keys(options);
const handleAddtoCart = () => {
  
}
  return (
    <div className="card custom-card mt-3">
      <img src={props.imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            {priceOptions.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>

        </div>
<hr/>
<button className={`btn btn-success justify-center ms-2`} onClick={handleAddtoCart}>Add to Cart</button>

      </div>
    </div>
  );
};

export default Card;
