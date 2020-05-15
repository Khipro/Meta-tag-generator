import React from "react";

export default class Form extends React.Component {
  state = {
    Title: "",
    Description: "",
    Date_issued: "",
    Date_modified: "",
    Keyword: "",
    Keyword_uncontrolled: "",
    Url: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
          onChange={e => this.change(e)}
          
        />
        <br />
        
        <div>
         <h3>Description:*</h3>
        </div>
        <input
          name="Description"
          placeholder="Description"
          value={this.state.Description}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Date Issued:*</h3>
        </div>
        <input
          name="Date_issued"
          placeholder="Date Issued"
          value={this.state.Date_issued}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Date Modified:*</h3>
        </div>
        <input
          name="Date_modified"
          placeholder="Date Modified"
          value={this.state.Date_modified}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Keyword (Controlled)*</h3>
        </div>
        <input
          name="Keyword"
          placeholder="Keyword (Controlled)"
          value={this.state.Keyword}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Keyword (Uncontrolled):*</h3>
        </div>
        <input
          name="Keyword_uncontrolled"
          placeholder="Keyword (Uncontrolled)"
          value={this.state.Keyword_uncontrolled}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Url (Canonical):*</h3>
        </div>
        <input
          name="Url"
          placeholder="Url (Canonical)"
          value={this.state.Url}
          onChange={e => this.change(e)}
        />
        
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Clear</button>
      </form>
    );
  }
}
