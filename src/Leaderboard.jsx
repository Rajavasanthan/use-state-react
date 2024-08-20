
function Leaderboard({dispatch}) {
  return (
    <div className="container">
       <h3>Leaderboard</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Doe</td>
              <td>90</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John Smith</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={() => {
            dispatch({screen : "HOME"});
          }}>Play Again</button>
    </div>
  )
}

export default Leaderboard