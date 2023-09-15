import { useState } from 'react';
import PriceInput from './PriceInput';

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [initalprice, changePrice ] = useState('');


  const name = 'Banana';
  const price = 2.99;
  

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  function handlerChange(event){
    changePrice(event.target.value)
    
  }

  return (
    <>
      <h2>{name}</h2>
      <button onClick={handlerMinus}>Minus</button>
      <span>{count}</span>
      <button  onClick={handlerPlus}>Plus</button>
      <br/>
      <h2>{`$ ${price}`} each</h2>
      <br/>
      <input  onChange={handlerChange}/>
      <div>{initalprice}</div>
      <h3>{`Discount: ${discount}%`}</h3>
    </>
  );
}
export default Counter;