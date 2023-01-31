import React from "react";
// import { buyCake } from "../store/cakes/cakeActions";
import { buyCake } from "../store";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes :-{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};
//when you want to access redux state in your component you need to define map StatetoProps fonction
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

//for dispatching actions
const mapDispatchTOProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
//connect function connects redux store to react components
export default connect(mapStateToProps, mapDispatchTOProps)(CakeContainer);
