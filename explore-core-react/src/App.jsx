import "./App.css";
// import ToDo from "./todo";
import Actor from "./actor";


function App() {
  const actors = ['bappa raj', 'salman shah', 'omar sunny']
  return (
    <>
      <h1>React Core concepts</h1>
      {
        actors.map(actor =><Actor actor={actor}></Actor>)
      }



      {/* <ToDo task="Learn React" isDone={true} time="50 mins"></ToDo>
      <ToDo task="Revise JavaScript" isDone={false}></ToDo>
      <ToDo task="Shower" isDone={false}></ToDo>

      <Student></Student>
      <Person></Person>
      <Sports name="Monzu" game="Football"></Sports>
      <Sports name="Tonzu" game="Basketball"></Sports>
      <Player name="tamim" run="5000"></Player>
      <Player name="Mushi" run="3000"></Player> */}
    </>
  );
}

function Person() {
  const age = 27;

  const personStyle = {
    color: "red",
    textAlign: "right",
  };
  return (
    <p className="student" style={personStyle}>
      I am a person {age}
    </p>
  );
}

// const {name,run} = {
//   name: "Monzu",
//   run: "Football",
// };
function Player({ name, run }) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {run}</p>
    </div>
  );
}

function Sports(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h1>Hi React</h1>
      <p>Player: {props.name} </p>
      <p>Sport: {props.game}</p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

export default App;
