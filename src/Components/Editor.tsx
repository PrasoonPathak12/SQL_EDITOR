// import { useState,KeyboardEvent } from 'react';

// export default function Editor(){
//   const [line,setLine] = useState<number[]>([1]);
//   const [lineNum,setLineNum] = useState<number>(2);
//   const handleKeyDown = (event : KeyboardEvent<HTMLTextAreaElement>):void=>{
//     if(event.key==='Enter')
//     {
//       setLineNum(lineNum+1);
//       setLine([...line,lineNum]);
//     }
//   };

//    const handleKeyUp = (event : KeyboardEvent<HTMLTextAreaElement>):void=>{
//     if(event.key==='Backspace')
//     {
//       setLineNum(lineNum-1);
//       setLine([...line,lineNum]);
//     }
//   };

 

//   return (
//     <div className='editor'>
//       <div className='lineNumber'>{
//         line.map((value,index)=>(
//          <p key={index} className='numbering'>{value}</p>
//         ))
//         }

//       </div>
//           <textarea name="" 
//                 onKeyDown={ handleKeyDown }
//                 onKeyUp={handleKeyUp}
//                 placeholder='// Write SQL queries here to test...'
//                 id="sqlQuery">
//           </textarea>
//     </div>
//   )
// }


// // import React, { useState, KeyboardEvent } from 'react';

// // interface Query {
// //   id: number;
// //   text: string;
// // }

// // export default function Editor(): JSX.Element {
// //   const [queries, setQueries] = useState<Query[]>([{ id: 1, text: '' }]);

// //   const handleKeyDown = (index: number) => (event: KeyboardEvent<HTMLTextAreaElement>) => {
// //     const updatedQueries = [...queries];

// //     // Add new query on Enter
// //     if (event.key === 'Enter') {
// //       event.preventDefault(); // Prevent newline in the textarea
// //       const newId = queries.length + 1;
// //       updatedQueries.splice(index + 1, 0, { id: newId, text: '' });
// //       setQueries(updatedQueries);
// //     }

// //     // Remove query on Backspace if current textarea is empty
// //     if (event.key === 'Backspace' && queries[index].text === '' && queries.length > 1) {
// //       event.preventDefault(); // Prevent default backspace
// //       updatedQueries.splice(index, 1);
// //       setQueries(updatedQueries);
// //     }
// //   };

// //   const handleChange = (index: number) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// //     const updatedQueries = [...queries];
// //     updatedQueries[index].text = event.target.value;
// //     setQueries(updatedQueries);
// //   };

// //   return (
// //     <div className="editor" style={{color:  'magenta'}}>
// //       {queries.map((query, index) => (
// //         <div key={query.id} className="query-row" style={{ display: 'flex', marginBottom: '8px',marginLeft:10 }}>
// //           <p style={{ width: '30px' }}>{index + 1}.</p>
// //           <div style={{ flex: 1 }}>
// //             <textarea
// //               value={query.text}
// //               onChange={handleChange(index)}
// //               onKeyDown={handleKeyDown(index)}
// //               placeholder="// Write SQL query..."
// //               style={{ width: '100%', height: '30px', backgroundColor:'black' }}
// //             />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
