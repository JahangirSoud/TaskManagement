import React from 'react'
import { Card, Button, Badge, Spinner, Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import { dataSave } from "./Lol";

class CreateList extends React.Component{
  state = {
    isLoading: false,
    name: '',
    description: '',
    user_id :1,
    error :{},
    status:false,
  }
  componentDidMount(){}
  ChangeInput=(field)=>{
    this.setState({
      [field.target.name]:field.target.value,
    })
  }
  submit_form = async(field)=>{
    field.preventDefault();
    //const { history } = this.props;
    const postBody={
      name: this.state.name,
      description: this.state.description,
      user_id : this.state.user_id,
    }
    const response = await dataSave(postBody);
    if (response.success) {
      this.setState({
        name: "",
        description: "",
        isLoading: false,
        status:true,
      });
      //history.push(`/test/`);
    } else {
      console.log("response.errors", response.errors);
      this.setState({
        errors: response.errors,
        isLoading: false,
      });
    }
  }
  
  render(){
    return(
      <>
        <Card>
          <Card.Body>
            {this.state.status && !this.state.name && !this.state.description &&(
              <div className="alert alert-success">
              <strong>Success!</strong>This data is Added.
            </div>
            )}
          
            
            <Form onSubmit={this.submit_form}>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Project Name" value={this.state.name} onChange={(field)=>this.ChangeInput(field)}/>
            </Form.Group>
            {this.state.errors && this.state.errors.name && !this.state.name &&(
                <p className="text-danger">{this.state.errors.name[0]}</p>
              )}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Description" as="textarea" rows="5" value={this.state.description} onChange={(field)=>this.ChangeInput(field)} />
            </Form.Group>
            {this.state.errors && this.state.errors.description && !this.state.description &&(
                <p className="text-danger">
                  {this.state.errors.description[0]}
                </p>
              )}
            {!this.state.isLoading && (
                <Button variant="primary" type="submit">
                  Save Project
                </Button>
              )}
          </Form>
          </Card.Body>
        </Card>
      </>
    )
  }
}
//export default withRouter(CreateList);
export default CreateList;