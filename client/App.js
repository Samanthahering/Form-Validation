import React from 'react'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          course1: '',
          course2: '',
          course3: ''
    };
  
      this.handleChange = this.handleChange.bind(this);
    }

  
    handleChange(event) {
        console.log(this.state)
      const name = event.target.name
      const value = event.target.value
      this.setState({
          [name]: value
        });
    }
  
    render() {
      return (
          <form action='/api/form' method='POST'>
          <label>
            Course 1:
            <input type="text" name='course1' value={this.state.course1} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Course 2:
            <input type="text" name='course2' value={this.state.course2} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Course 3:
            <input type="text" name='course3' value={this.state.course3} onChange={this.handleChange} />
          </label>
          <br></br>
          {this.state.course1.toLowerCase() === 'calculus' || this.state.course2.toLowerCase() === 'calculus' || this.state.course3 === 'calculus' ? <input type="submit" value="Submit"/> : <input type="submit" value="Submit" disabled={true}/>}
        </form>
      );
    }
  }

  export default Form