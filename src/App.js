import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";


class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  constructor(props) {
    super(props);
    this.state =
    {
      language: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange() {
    this.setState({ language: "english" })
    localStorage.setItem("app_language", this.state.language);
    //return (<App app_language={this.state.language} />)
  }
  handleChange2() {
    this.setState({ language: "french" })
    localStorage.setItem("app_language", this.state.language);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Meta tag generator</h1>
        <hr></hr>
        <div>
         <h3>Language</h3>
        </div>
        <div className="langButton">
              <button class="langButtonStyle" onClick={this.handleChange} >English </button>
              &nbsp;
              <button class="langButtonStyle" onClick={this.handleChange2}>Français</button>
            </div>
        <Form onChange={fields => this.onChange(fields)} />
        
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
        </header>
      </div>
    );
  }
}

export default App;
