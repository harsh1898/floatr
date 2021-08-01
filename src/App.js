import React, { Component } from 'react';
import Credit from './Credit';
import './App.css';
class App extends Component {
  state={form:false,vbl:true}
  openform=()=>{
    this.setState({form:true,vbl:false});
  }
  render() {
    return (
      <>
      {this.state.vbl===true?
      <div className="main">
       <p>MANAGE CREDIT CARDS</p>
       <div className="main2">
         <input type="button" value="+ Add Credit Card" onClick={this.openform}/>
         <br/><br/><br/>
         <input type="button" value="Pay Dues>>>"/>
       </div>
       </div>:null}
      {this.state.form===true?<Credit/>:null}
      </>
    )
  }
}
export default App;
