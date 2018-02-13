import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ClassList from '../ClassList/ClassList';

export default class Student extends Component {
  constructor() {
    super()

    this.state= {
      studentInfo:{}
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res=> {
    this.setState({studentInfo:res.data})
    // console.log(res.data)
    }
  )
  }

  render() {

    console.log(this.props.match)
    console.log(this.props.match.params.class)
    return (
      <div>
      <div className='subnav'>
        <Link to={`/classlist/${this.state.studentInfo.class}`} className='subnav_links'><h3>Back</h3></Link>
       
      </div>
      <div className="box">
        <h1>Student</h1>
        <h1>{`${this.state.studentInfo.first_name} ${this.state.studentInfo.last_name}`}</h1>
        <h3>Grade:{this.state.studentInfo.grade}</h3>
        <h4>Email: {this.state.studentInfo.email}</h4>

      </div>
      </div>
    )
  }
}