import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getProductList } from './slice/productSlice';
import { addToCart, removeFromCart } from './slice/cartSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.products?.products);
  const cartData = useSelector((state) => state?.cart?.cart);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const add = (data) => {
    dispatch(addToCart(data));
  };

  const remove = (data) => {
    dispatch(removeFromCart(data));
  };

  const isItemAdded = (id) => {
    const item = cartData.find((item) => item.id === id);
    if (item) {
      return true;
    }
    return false;
  };

  return (
    <div className="">
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <p>{index + 1} : {item.title}</p>

            {
              isItemAdded(item?.id) ? <button onClick={() => remove(item)}>Remove from cart</button> : <button onClick={() => add(item)}>Add to cart</button>
            }
          </div>
        );
      })}
    </div >
  );
}

export default App;
