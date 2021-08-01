import './credit.css';
const Details=(props)=>{
    return(
        <div className="abc">
            <p style={{ textAlign: "center",paddingTop:"1rem",color:"white"}}>MY CREDIT CARDS</p><br/><br/>
            <div className="abc1">
                <div className="frow">
            <p>{props.bname}</p><br/><br/>
            <p>{props.cname}</p>
            <p>{props.cnum}</p>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="lrow1">
           <p>Credit Limit</p><br/>
           
            <p>Expiry Date</p>
            </div>
            <div className="lrow2">
            <p>{props.clim}</p>
            <p>{props.cexp}</p>
            </div>
            </div>
        </div> 
    )
}
export default Details;