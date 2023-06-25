import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {

  const inputRef = useRef(null);
  const [state, setState] = useState({
    name: "",
    jobs: {}
  });
  const prevName = useRef('');



  const changeName =(e) => {
    setState({...state, name: e.target.value})
  }
  const {name, jobs} = state; 
  useEffect(() => {
    inputRef.current.focus();
    // console.log(inputRef.current.value);
    // inputRef.current.className = "bg-danger"
  }, []);

  useEffect(() => {
    prevName.current = name;
  }, [name])

  return (
    <>
      <div className="w-50 d-grid gap-2 mx-auto">
        <h5 className="alert alert-success text-center">
          آشنایی با هوک useRef
        </h5>
        <p>{`نام فعلی شما : ${name}`}</p>
        <p>{`نام قبلی شما : ${prevName.current}`}</p>

        <input
          ref={inputRef}
          type="text"
          value= {name}
          onChange={changeName}
          className="form-control"
          placeholder="اسم بده دلبندم..."
        />
        <button
          type="button"

          className="btn btn-primary btn-block mt-2"
        >
          تمرکز بنما 👀
        </button>
      </div>
    </>
  );
};

export default UseRefExample;