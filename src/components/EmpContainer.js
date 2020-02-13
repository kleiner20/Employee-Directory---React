import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmpInfo from "./EmpInfo";
import EmpList from "../data/employees.json";
import JobSearchForm from "./JobSearchForm";
import JobInfo from "./JobInfo";


class EmpContainer extends Component {
  state = {
    result: [],
    search: 'Mohamed',
    searchtype: 'employee',
    empSearch: 'manager'
  };


//Dynamic Object Key

// firstOrJobTitle = "EmpSearch";
// firstOrJobTitle = "JobSearch";
// someObj = {
// 	[firstOrJobTitle]: "FirstName"
// [firstOrJobTitle]: "JobTitle"

// }


searchEmps = () => {
  const searchQuery = this.state.search.trim();
  const searchResults = EmpList.filter((emp) => emp.FirstName === searchQuery);
  this.setState({ 'result': searchResults, 'searchtype':'employee' });

};

searchJobs = event => {
  event.preventDefault();
  console.log("here")
  const searchQuery = this.state.empSearch.trim();
  const searchResults = EmpList.filter((emp) => emp.JobTitle === searchQuery);
  this.setState({ 'result': searchResults, 'searchtype':'job' });
};


  // When this component mounts, search for the employee
  componentDidMount() {   
    if (this.state.searchtype === "job"){
      this.searchJobs();
    } else{
      this.searchEmps();
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleEmpInputChange = event => {
    const value = event.target.value;
    // const name = event.target.name;
    this.setState({
      empSearch: value
    });
  };

  // When the form is submitted, search the employees.json for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();

  };
   

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <SearchForm
              searchtype={this.state.searchtype}
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              // onClick={()=>this.setState({'searchtype':'employee'})}
            />
             <JobSearchForm
              searchtype={this.state.searchtype}
              value={this.state.empSearch}
              handleEmpInputChange={this.handleEmpInputChange}
              handleFormSubmit={this.handleFormSubmit}
              searchJobs={this.searchJobs}
            />
          </Col>
          <Col size="md-3" />
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <EmpInfo search={this.state.search} />
            <JobInfo search={this.state.empSearch} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default EmpContainer;

