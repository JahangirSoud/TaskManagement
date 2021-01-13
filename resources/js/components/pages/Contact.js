import React from 'react';
import ReactDOM from 'react-dom';

/*function Example(){
    return (
            <div>Hello Function</div>
        );
}

class Example extends React.Component{
    render()
    {
        return <div>Hello Class</div>
    }
}*/

class Contact extends React.Component{
    state ={
        count:0,
    };

    increment = (a)=>{
        let count = this.state.count+a;
        this.setState({
            count,
        });

    }
    render(){
        return(
            <div><h1>Counter : {this.state.count}</h1>
                <p>
                    <button type="button" className="btn btn-primary btn-lg" onClick={()=>this.increment(5)}>+</button>
                    <button type="button" className="btn btn-secondary btn-lg ml-5" onClick={()=>this.increment(-5)}>-</button>
                </p>
            </div>
            
        );
    }
}
export default Contact;