import React, { Component } from 'react'
import Details from './Details';
import './credit.css'; 
class Credit extends Component {
    state={vbl:true,detail:[],cnum:"",cname:"",bname:"",clim:"",cexp:"",err1:"",err2:"",err3:"",err4:"",err5:""};
    handleChange=(evt)=>{
const name=evt.target.name;
 const val=evt.target.value;
 
 this.setState({[name]:val});

    }
    valid=()=>{
        const v1=this.state.cnum;
        const v2=this.state.cname;
        const v3=this.state.bname;
        const v4=this.state.clim;
        const v5=this.state.cexp;
if(v1===""&&v2===""&&v3===""&&v4===""&&v5==="")
{
   this.setState({err1:"fill this",err2:"fill this",err3:"fill this",err4:"fill this",err5:"fill this"}) ;
}
else if((v1.length!=16)&&(v4<20000||v4>500000))
{
this.setState({err1:"only 16 digit allowed"});
this.setState({err4:"between 20000 to 500000 only"});
}
 else if(v4<20000||v4>500000)
{
    this.setState({err4:"between 20000 to 500000 only"});
}
else if(v1.length!=16)
{
    this.setState({err1:"only 16 digit allowed"});   
}
else{
    return true;
}

    }
    submit=()=>{
       if(this.valid()){
        const obj={cnum:this.state.cnum,cname:this.state.cname,bname:this.state.bname,clim:this.state.clim,cexp:this.state.cexp};
        const rcds=this.state.detail;
        rcds.push(obj);
        this.setState({vbl:false,detail:rcds,cnum:"",cname:"",bname:"",clim:"",cexp:""});
       }
    }
    render() {
       console.log(this.state.detail);
        return (
           <>
                
    {this.state.vbl===true? <div className="main3"><form className="fom">
    <p style={{fontSize:"1.5rem"}}>Add Credit Card</p><br/><br/>
                   <label>Credit card number</label><br/><br/>
                   <input type="text" name="cnum" placeholder="16 digit card number" onChange={this.handleChange}/><p style={{color:"red",fontSize:"1rem"}}>{this.state.err1}</p>
                   <label>Name on card</label><br/><br/>
                   <input type="text" name="cname" placeholder="Name" onChange={this.handleChange}/><p style={{color:"red",fontSize:"1rem"}}>{this.state.err2}</p>
                   <label>Bank Name</label><br/><br/>
                   <input type="text" name="bname" placeholder="Bank Name" onChange={this.handleChange}/><p style={{color:"red",fontSize:"1rem"}}>{this.state.err3}</p>
                   <label>Credit Limit(in Rupees)</label><br/><br/>
                   <input type="text" name="clim" placeholder="Enter Amount" onChange={this.handleChange}/><p style={{color:"red",fontSize:"1rem"}}>{this.state.err4}</p>
                   <label>Card Expiry</label><br/><br/>
                   <input type="text" name="cexp" placeholder="MM/YY" onChange={this.handleChange}/><p style={{color:"red",fontSize:"1rem"}}>{this.state.err5}</p><br/>
                   <input type="button" value="save" onClick={this.submit}/>
                </form></div>:null} 
                   {this.state.detail.map((detail,i)=>{
                    return(
                        <Details 
                        key={i}
                        cnum={detail.cnum}
                        cname={detail.cname}
                        bname={detail.bname}
                        clim={detail.clim}
                        cexp={detail.cexp} />
                    )
                })}
            </>
        )
    }
}
export default Credit;
