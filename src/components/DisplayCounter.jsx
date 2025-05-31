import { useSelector } from "react-redux";

const DisplayCounter = () => {


  const { counterVal } = useSelector((store) => store.counter);
  return <h3 className="counter-value">COUNTER VALUE IS: {counterVal} </h3>;

}

export default DisplayCounter;