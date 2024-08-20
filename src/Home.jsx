function Home({dispatch}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Home</h1>
          <p>Welcome to the game. Click the button to start.</p>
          <button className="btn btn-primary" onClick={() => {
            dispatch({screen : "GAME"});
          }}>Start</button>
          <button className="btn btn-secondary" onClick={() => {
            dispatch({screen : "LEADERBOARD"});
          }}>Leaderboard</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
