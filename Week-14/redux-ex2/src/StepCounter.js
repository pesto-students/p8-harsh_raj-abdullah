import React from "react";
// import { connect } from "react-redux";
import { useDispatch } from 'react-redux'

function StepCounter(){
  // const { addStep, resetSteps } = props;
  const dispatch = useDispatch();

  const addStep = () => dispatch({ type: 'ADD_STEP' });
  const resetSteps = () => dispatch({ type: 'RESET_STEP' });
  
  return (
    <div>
      <button onClick={addStep} className="btn add">Add a Step</button>
      <br />
      <button onClick={resetSteps} className="btn reset">Reset Steps</button>
    </div>
  )
}

export default StepCounter;

// using connect method
// const mapDispatchToProps = {
//   addStep: () => ({ type: 'ADD_STEP' }),
//   resetSteps: () => ({ type: 'RESET_STEP' })
// }

// export default connect(null, mapDispatchToProps)(StepCounter)