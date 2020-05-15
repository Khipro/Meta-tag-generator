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

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Meta tag generator</h1>
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
