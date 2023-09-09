import React from 'react';
// import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import './App.css';
import StepCounter from './StepCounter';

function App() {
  // const { step } = props;
  const step = useSelector(state => state);

  return (
    <div className="App">
      <p className='text'>You've walked {step} steps today!</p>
      <StepCounter/>
    </div>
  );
}

export default App

// const mapStateToProps = (state) => {
//   return { step : state };
// }

// export default connect(mapStateToProps, null)(App);
