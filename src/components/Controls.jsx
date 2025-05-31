import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";


const Controls = () => {

  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());

  }

  const handlePrivacyToggle = () => {
    dispatch(counterActions.privacyToggle());

  }

  const handleAddButton = () => {

    dispatch(counterActions.add());

  }

  const handleSubtractButton = () => {

  }




  return (
    <>
      <div className="list-group list-group-flush">
        <button onClick={handleIncrement} type="button" className="btn btn-primary">+1</button>
        <button onClick={handleDecrement} type="button" className="btn btn-secondary">-1</button>
        <button onClick={handlePrivacyToggle} type="button" className="btn btn-danger">Privacy Toggle</button>
      </div>

      <div className="input-section">
        <input ref={inputElement} type="text" placeholder="Enter the number" className="form-control" />
        <div className="action-buttons">
          <button onClick={handleAddButton} type="button" className="btn btn-success">Add</button>
          <button onClick={handleSubtractButton} type="button" className="btn btn-info">Subtract</button>
        </div>
      </div>
    </>
  );
};


export default Controls;