import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake } from "../store";

const HooksCakeContainer = (props) => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  console.log(numOfCakes);

  return (
    <div>
      <h2>Num of Cakes- {numOfCakes}</h2>
      <button  onClick={props.buyCake}>
        Buy Cake
      </button>
    </div>
  );
};

const mapDispatchToProps=(dispatch)=>{
    return {
        buyCake: () => {
          dispatch(buyCake());
        },
      };
}

export default connect(null,mapDispatchToProps)(HooksCakeContainer);
