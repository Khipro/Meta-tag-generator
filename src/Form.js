import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Description: '',
      Date_issued: '',
      Date_modified: '',
      Keyword: '',
      Keyword_uncontrolled: '',
      Url: ''
  };
}

  change = e => 
  {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState
    ({
      [e.target.name]: e.target.value
    });
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      Title: "",
      Description: "",
      Date_issued: "",
      Date_modified: "",
      Keyword: "",
      Keyword_uncontrolled: "",
      Url: ""
    });
    this.props.onChange({
      Title: "",
      Description: "",
      Date_issued: "",
      Date_modified: "",
      Keyword: "",
      Keyword_uncontrolled: "",
      Url: ""  
    });
    
  };

  render() {
    return (
      <form>
        <div>
         <h3>Title:*</h3>
        </div>
        <input
          name="Title"
          placeholder="Title"
          value={this.state.Title}
          //onChange={e => this.change(e)}
          onChange={this.myChangeHandler}
          
        />
        <br />
        
        <div>
         <h3>Description:*</h3>
        </div>
        <input
          name="Description"
          placeholder="Description"
          value={this.state.Description}
          //onChange={e => this.change(e)}
          onChange={this.myChangeHandler}
        />
        <br />
        <div>
         <h3>Date Issued:*</h3>
        </div>
        <input
          name="Date_issued"
          placeholder="Date Issued"
          type="date"
          value={this.state.Date_issued}
          //onChange={e => this.change(e)}
          onChange={this.myChangeHandler}
        />
        <br />
        <div>
         <h3>Date Modified:*</h3>
        </div>
        <input
          name="Date_modified"
          placeholder="Date Modified"
          type="date"
          value={this.state.Date_modified}
          //onChange={e => this.change(e)}
          onChange={this.myChangeHandler}
        />
        <br />
        <div>
         <h3>Keyword (Controlled)*</h3>
        </div>
        <input
          name="Keyword"
          placeholder="Keyword (Controlled)"
          value={this.state.Keyword}
          //onChange={e => this.change(e)}
          onChange={this.myChangeHandler}
        />
        <br />
        <div>
         <h3>Keyword (Uncontrolled):*</h3>
        </div>
        <input
          name="Keyword_uncontrolled"
          placeholder="Keyword (Uncontrolled)"
          value={this.state.Keyword_uncontrolled}
          //onChange={e => this.change(e)}
          onChange={this.myChangeHandler}
        />
        <br />
        <div>
         <h3>Url (Canonical):*</h3>
        </div>
        <input
          name="Url"
          placeholder="Url (Canonical)"
          value={this.state.Url}
          //onChange={e => this.change(e)}
          onChange={this.myChangeHandler}
        />
        <div>
         <h3>Generated Code</h3>
        </div>
        <p> 
          {this.state.Title} 
          <br /> {this.state.Description}
          <br /> {this.state.Date_issued}
          <br /> {this.state.Date_modified}
          <br /> {this.state.Keyword}
          <br /> {this.state.Keyword_uncontrolled}
          <br /> {this.state.Url}
        </p>
        <br />
        <br />
        <button onClick={e => this.myChangeHandler}>Clear</button>
      </form>
    );
  }
}
