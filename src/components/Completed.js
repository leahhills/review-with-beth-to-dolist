import React, {Component} from 'react'
//functions need to be passed props when added here.

function Completed(props){
    return(
        <div className='Completed'>
            <h1>Completed</h1>
            <ul>
            {
                props.completedList.map((item,i,arr)=>{
                    return(
                        <li key={i}>{item}</li>
                    )
                })
            }
            </ul>
        </div>)
}

// class Completed extends Component{
//     render(){
//         //html element so we had to use classname not class from css
//         return(
//             <div className='Completed'>
//                 Hello Completed Component
//             </div>
//         )
//     }
// }

export default Completed