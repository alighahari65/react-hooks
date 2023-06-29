import { useReducer, useState } from "react";

{/*
  comment
*/}



const UseReducerExample = () => {
  const reducer = (state , action) => {
    switch (action.type) {
      case "ICREAMENT":
        return {...state, count : state.count + action.payload}
      case "DECREAMENT":  
        return {count : state.count -1 }
    
      default:
        return state;
    }
  }
  
  const increament = () => {
    // console.log(state);
    dispatch ({type: "ICREAMENT", payload: 5})
  }
  
  const decreament = () => {
    dispatch ({type: "DECREAMENT"})
  }
  
  const [state, dispatch] = useReducer(reducer, {count : 0, name: "ali"})
  
  // const [count, setCount] = useState(1);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-info text-center">آشنایی با هوک useReducer</h5>
      {/* <button className="btn btn-primary" onClick={() => setCount((prevCount) => (prevCount + 1))}> */}
      <button className="btn btn-primary" onClick={increament}>

        اضافه بنما 😉
      </button>
      <p className="alert alert-warning text-center">
        شمارش شما دوست عزیز برابر است با :{" "}
        <span className="badge rounded-pill bg-success">{state.count}</span>
      </p>
      <button className="btn btn-danger" onClick={decreament}>
        کم بنما 🤠
      </button>
    </div>
  );
};

export default UseReducerExample;
