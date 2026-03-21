import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
function App() {

  function handleClick(){
    alert('I am clicked.')
  }
  const handleClick3 = ()=>{
    alert('Clicked 3')
  }

  const handleAdd5 = (num) =>{
    const newNum = num+5;
    alert(newNum);
  }
  return (
    <>
      <h1>React Core Part 2</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert('clicked 4')}>Click Me 4</button>
      <button onClick={() => handleAdd5(8)}>Add 5</button> */}
    </>
  )
}

export default App
