
function Game({dispatch}) {
  return (
    <div className="container">
      <h3>Play the Awesome Game Here...</h3>
      <button className="btn btn-primary"  onClick={() => {
            dispatch({screen : "WIN"});
          }}>Win!</button>
      <button className="btn btn-danger"onClick={() => {
            dispatch({screen : "LOSS"});
          }}>Lose!</button>
    </div>
  )
}

export default Game