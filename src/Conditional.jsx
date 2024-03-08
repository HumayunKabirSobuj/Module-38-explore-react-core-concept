// // conditional rendaring

// way 1
// export default function Conditional({ task, isDone }) {
//     if (isDone === true){
//         return (
//             <h2>Complete Work: {task}</h2>
//         )
//     }
//     else{
//         return (
//             <h2>Working On : {task}</h2>
//         )
//     }
// }



// way 2
// export default function Conditional({ task, isDone }) {
//     if (isDone === true){
//         return (
//             <h2>Complete Work: {task}</h2>
//         )
//     }  
//     return <h2>Working On : {task}</h2> 

// }


// way 3 Ternary operator
// export default function Conditional({ task, isDone }) {
//     return (
//         <h2> {isDone?"Complete Work":"Working On"} : {task} </h2>
//     )

// }

// way 4 using AND operator (&&)
// export default function Conditional({ task, isDone }) {
//     return (
//         <h2> {task} {isDone && ': Done'} </h2>
//     )

// }

// way 5 using OR operator (||)
// export default function Conditional({ task, isDone }) {
//     return (
//         <h2> {task} {isDone || ': Working'} </h2>
//     )

// }

// way 6
export default function Conditional({ task, isDone }) {
    let listItem;
    if(isDone){
        listItem=<h2>Finish : {task} </h2>
    }
    else{
        listItem= <h2>Work On : {task} </h2>
    }
    return listItem;

}

