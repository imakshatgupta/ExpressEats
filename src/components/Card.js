import React , {useState , useRef , useEffect}from 'react';
import './Card.css'; 
import { useDispatchCart , useCart} from './ContextReducer';
const Card = (props) => {
  const options = props.options;
  const priceOptions = Object.keys(options); 
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const dispatch = useDispatchCart();
  const data  = useCart();
  const priceRef = useRef();
const handleAddtoCart = async() => {
  let food =[]
  for (const item of data){
    if(item.id === props.FoodItems._id)
    {
      food =item;
      break;
  }}
  if(food !== []){
    if(food.size === size){
      await dispatch({type : "UPDATE" , id : props.FoodItems._id , price: finalPrice , qty : qty})
      return 
    }
    else if(food.size !== size){
      await dispatch({type:"ADD" , id:props.FoodItems._id , name:props.FoodItems.name , price:finalPrice , qty:qty , size:size})
      return
    }
    return
  }
await dispatch({type:"ADD" , id:props.FoodItems._id , name:props.FoodItems.name , price:finalPrice , qty:qty , size:size})
 
}
let finalPrice = qty * parseInt(options[size]);
useEffect(() => {
  setSize(priceRef.current.value)
},[])
  return (
    <div className="card custom-card mt-3">
      <img src={props.FoodItems.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.FoodItems.name}</h5>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
          <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>

        </div>
<hr/>
<button className={`btn btn-success justify-center ms-2`} onClick={handleAddtoCart}>Add to Cart</button>

      </div>
    </div>
  );
};

export default Card;
