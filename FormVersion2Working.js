import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Form extends React.Component {
  state = {
    Title: "",
    TitleError:"",
    Description: "",
    DescriptionError:"",
    Date_issued: "",
    Date_issuedError: "",
    Date_modified: "",
    Date_modifiedError: "",
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

  validate = () => {
    let TitleError="";
    let DescriptionError="";
    let Date_issuedError="";
    let Date_modifiedError="";
  
    if (!this.state.Title){
      TitleError = "Title cannot be blank";
    }
    
    if (!this.state.Description){
      DescriptionError = "Description cannot be blank";
    }

    if (!this.state.Date_issuedError){
      Date_issuedError = "Description cannot be blank";
    }

    if (!this.state.Date_modifiedError){
      Date_modifiedError = "Description cannot be blank";
    }

    if (TitleError || DescriptionError || Date_issuedError || Date_modifiedError){
      this.setState({TitleError, DescriptionError, Date_issuedError,Date_modifiedError});
      return false;
    }
    return true;
  };

  onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        //Check For Error
        const err = this.validate();
        if (err){
            //clear form
            this.setState({
                Title: "",
                TitleError:"",
                Description: "",
                DescriptionError:"",
                Date_issued: "",
                Date_issuedError: "",
                Date_modified: "",
                Date_modifiedError: "",
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
    }    
  };

  render() {
    return (
      <form>
        <h1>Meta tag generator</h1>
        <hr></hr>
        <div>
         <h3>Title:*</h3>
        </div>
        <input
          name="Title"
          placeholder="Title"
          value={this.state.Title}
          onChange={e => this.change(e)}
        />
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.TitleError}
        </div>
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
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.DescriptionError}
        </div>
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
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.Date_issuedError}
        </div>
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
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.Date_modifiedError}
        </div>
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
        <Button variant="contained" color="primary" component="span" onClick={e => this.onSubmit(e)}>Clear</Button>

        
        <div>
         <h3>Generated Code</h3>
        </div>
         <br />&lt;head>
         <br />&lt;meta charset="utf-8">
         <br />&lt;!-- Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
              wet-boew.github.io/wet-boew/License-en.htm / wet-boew.github.io/wet-boew/Licence-fr.htm -->
          <br />&lt;link rel="schema.dc" href="http://purl.org/dc/elements/1.1/" />
          <br />&lt;link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <br />
          <br />&lt;title&gt;{this.state.Title}&lt;&#47;title&gt;
          <br /> &lt;meta name=&quot;description&quot; content=&quot;{this.state.Description}&quot;&#47;&gt;
          <br /> &lt;meta name=&quot;keywords&quot; content=&quot;{this.state.Keyword_uncontrolled}&quot;&#47;&gt;
          <br /> &lt;meta name="dcterms.creator" content="Gouvernement du Canada, Statistique Canada" />
          <br /> &lt;meta name="dcterms.title" content="{this.state.Title}" />
          <br /> &lt;meta name="dcterms.issued" title="W3CDTF" content="{this.state.Date_issued}" />
          <br /> &lt;meta name="dcterms.issued" title="W3CDTF" content="{this.state.Date_modified}" />
          <br /> &lt;meta name="dcterms.subject" title="gcstc" content="{this.state.Keyword}" />
          <br /> &lt;meta name="dcterms.language" title="ISO639-2" content="eng" />
          <br /> &lt;meta content="width=device-width,initial-scale=1" name="viewport" />
          <br /> &lt;link rel="canonical" href=" {this.state.Url}" />
          <br /> 
          <br /> &lt;meta property="dcterms:service" content="StatCan"/>
          <br /> &lt;meta property="dcterms:accessRights" content="2"/>
          <br /> 
          <br /> &lt;!--[if gte IE 9 | !IE ]>&lt;!-->
          <br /> &lt;link href="/wet-boew4b/assets/favicon.ico" rel="icon" type="image/x-icon">
          <br /> &lt;link rel="stylesheet" href="/wet-boew4b/css/wet-boew.min.css">
          <br /> &lt;script src="/wet-boew4b/js/jquery.min.js"><br /> &gt;script>
          <br /> &lt;!--&lt;![endif]-->
          <br />
          <br /> &lt;link rel="stylesheet" href="/wet-boew4b/css/theme.min.css">
          <br />
          <br /> &lt;!--[if lt IE 9]>
          <br /> &lt;link href="/wet-boew4b/assets/favicon.ico" rel="shortcut icon" />
          <br /> &lt;link rel="stylesheet" href="/wet-boew4b/css/ie8-wet-boew.min.css" />
          <br /> &lt;script src="/wet-boew4b/js/ie8-wet-boew.min.js">&lt;&#47;script>
          <br /> &lt;![endif]-->
          <br />
          <br /> &lt;noscript><link rel="stylesheet" href="/wet-boew4b/css/noscript.min.css" />&lt;&#47;noscript>
          <br /> &lt; script src="//assets.adobedtm.com/caacec67651710193d2331efef325107c23a0145/satelliteLib-c2082deaf69c358c641c5eb20f94b615dd606662.js">&lt;&#47;script>
          <br />
          <br /> &lt;script>dataLayer1 = [];&lt;&#47;script>
          <br />
          <br /> &lt;!-- CustomScriptsCSSEnd -->
          <br /> &lt;&#47;head>
      
      
      </form>


    );
  }
}