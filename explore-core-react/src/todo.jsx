// export default function ToDo({task, isDone}){
//     return (
//       <div>
//         <li>Task: {task}</li>
//         {/* <li>Task: </li> */}
//       </div>
//     );
// }


// export default function ToDo({task, isDone}){
//     if(isDone){
//         return (
//           <div>
//             <li>Done: {task}</li>
//           </div>
//         );
//     }else{
//         return (
//           <div>
//             <li>Do Now: {task}</li>
//           </div>
//         );
//     }
// }


//conditional rendering: 3 ternary
//condition ? true : false

export default function ToDo({task, isDone, time = 0}){
  return isDone ? (
    <li>
      Done: {task} | Time: {time}
    </li>
  ) : (
    <li>
      Not Done: {task} | Time: {time}
    </li>
  );
}
