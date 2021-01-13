import React from "react";
import {
  Card,
  Button,
  Badge,
  Spinner,
  Form,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
import { deleteproject } from "./Lol"

class Home extends React.Component{
  state ={
    projectList:[],
    searchProjectList: [],
    isLoading: false,
    searchText: "",
  };
  componentDidMount(){
    this.setState({ isLoading: true });
    Axios.get("http://localhost/test/api/projects").then((res) => {
      const projectList = res.data.data;
      const searchProjectList = res.data.data;
      this.setState({
        projectList,
        searchProjectList,
        isLoading: false,
      });
    });
}

deleteProjectprocess = async (id) => {
  const response = await deleteproject(id);
  if (response.success) {
    this.componentDidMount();

  } else {
    alert("Sorry !! Something went wrong !!");
  }
};
onSearchProjects = (e) => {
  const searchText = e.target.value;
  this.setState({
    isLoading: true,
  });
  if (searchText.length > 0) {
    const searchData = this.state.projectList.filter(function (item) {
      const itemData = item.name + " " + item.description;
      const textData = searchText.trim().toLowerCase();
      return itemData.trim().toLowerCase().indexOf(textData) !== -1;
    });
    this.setState({
      searchProjectList: searchData,
      searchText: searchText,
      isLoading: false,
    });
  } else {
    this.setState({
      searchText,
    });
    this.componentDidMount();
  }
};

  render() {
  
    return (
      <>
        <div className="header-part">
          <div className="float-left">
            <h2>
              Project List{" "}
              <Badge variant="primary">{this.state.projectList.length}</Badge>
            </h2>
          </div>
          <div className="float-right">
          <InputGroup className="mb-3">
              <FormControl
                placeholder="Type Projects to Search..."
                aria-label="Type Projects to Search..."
                aria-describedby="basic-addon2"
                onChange={(e) => this.onSearchProjects(e)}
              />
            </InputGroup>
          </div>
          <div className="float-right">
            <Link to={`/test/createNew`} className="btn btn-info">
              + Create New
            </Link>
          </div>
          <div className="clearfix"></div>
        </div>
        {this.state.isLoading && (
          <div className="text-center mt-5">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}

        {this.state.searchProjectList.map((project, index) => (
          <Card key={index} className="mt-3">
            <Card.Header>
              {project.name}{" "}
              <Badge variant="primary">{project.tasks_count}</Badge>
            </Card.Header>
            <Card.Body>
              <Card.Text>{project.description}</Card.Text>
              <Link
                to={`/test/view/${project.id}`} className="btn btn-primary mr-2">
                View
              </Link>
              <Link
                to={`/test/taskcreate/${project.id}`} className="btn btn-primary mr-2">
                Task Create
              </Link>
              <Button variant="danger" onClick={() => this.deleteProjectprocess(project.id)} className="mr-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export default Home;