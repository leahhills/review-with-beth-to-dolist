import React, {Component} from 'react'
//if we have data we need setstate then sconst, super,etc...
class Todo extends Component {
    constructor(){
        super();
        this.state={
            input:''
        }
       
    }

    
    render(){
        console.log(this.props)
        return(
            <div className='Todo'>
               <h1>ToDo</h1>
               <ol className='todoList'>
                {
                    this.props.todoList.map((item,index,arr)=>{
                        return(
                            <li onClick={()=>this.props.completeItem(index,item)} key={index}>{item}</li>
                           
                        )
                    })
                }
               </ol>
               {/* //e stands for the event */}
               <div className='inputContainer'>
                   <input type='text' value = {this.state.input} onChange={(e)=>{
                       this.setState({
                        input:e.target.value
                       })
                   }}
                   />
                   <button onClick={()=> this.props.addItem(this.state.input)}>Add the thing!</button>
               </div>
            </div>
          
        )
    }
}
export default Todo;



