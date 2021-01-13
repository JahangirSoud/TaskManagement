import React from "react";
import { Card, Button, Badge, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import Projectedit from "./Projectedit";
class view extends React.Component{
state={
    project:{},
    taskList:[],
    isLoading:false,
    toggleAddTask:true,
}
componentDidMount(){
    this.getProjectDetails();
    console.log(this.props.match.params.id);
}
getProjectDetails = () => {
    //this.setState({ isLoading: true });
    Axios.get(
      `http://localhost/test/api/projects/${this.props.match.params.id}`
    ).then((res) => {
      this.setState({
        taskList: res.data.data.tasks,
        project: res.data.data,
        isLoading: false,
      });
    });
  };
  toggleAddTask = ()=>{
    this.setState({
      toggleAddTask : !this.state.toggleAddTask,
    })
    

  }
  onCompleteProjectEdit = () => {
    this.getProjectDetails();
    this.toggleAddTask();
  };
render(){
    return(
        <>
        <div className="header-part">
          <div className="float-left">
            <h2>
              {this.state.project.name}
              <Badge variant="primary">{this.state.taskList.length}</Badge>
            </h2>
          </div>
          <div className="float-right">
            <Button className="btn btn-success mr-2" onClick={()=>this.toggleAddTask()}>
              {this.state.toggleAddTask && <span>Edit</span>}
              {!this.state.toggleAddTask && <span>Cancel</span>}
            </Button>
          </div>
          <div className="clearfix"></div>
        </div>
        <div>
          {this.state.toggleAddTask && <span>{this.state.project.description}</span>}
          {!this.state.toggleAddTask && <Projectedit project={this.state.project} onCompleteProjectEdit={this.onCompleteProjectEdit}/>}
        </div>

        {this.state.taskList.map((task, index) => (
          <Card key={index} className="mt-3">
            <Card.Header>
              {task.id} {task.name}{" "}
            </Card.Header>
            <Card.Body>
              <Card.Text>{task.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}

       

        
        </>
    );
}
}
export default view;