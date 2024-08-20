
function Win({dispatch}) {
  return (
    <div className="container">
      <h3>You Win!</h3>
      <div>
        <button className="btn btn-primary"onClick={() => {
            dispatch({screen : "HOME"});
          }}>Play Again</button>
        <button className="btn btn-primary"onClick={() => {
            dispatch({screen : "LEADERBOARD"});
          }}>Leaderboard</button>
      </div>
    </div>
  )
}

export default Win