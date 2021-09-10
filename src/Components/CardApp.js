import React, { useState } from "react"
import { MdCancel } from "react-icons/md"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import "./CardApp.css"
import moment from "moment"

import img  from "../img/1.jpeg"
import img1 from "../img/2.jpeg"
import img2 from "../img/3.jpeg"
import img3 from "../img/4.png"

const CardApp = () => {

 const [data, seData] = useState([
   {
     id:1,
     name:"King Solomon",
     quote:"...When I found him whom my soul loves. I held on to him and would not let him go...",
     time:Date.now(),
     avatar:img
   },
   {
     id:2,
     name:"Paul",
     quote:"For in Christ all the fullness of the Deity lives in bodily form, and in Christ you have been brought to fullness.",
     time:Date.now(),
     avatar:img1
   },
   {
     id:3,
     name:"Jesus",
     quote:"I am the way and the truth and the life. No one comes to the Father except through me.",
     time:Date.now(),                                  avatar:img2                                     },
   {
     id:4,
     name:"Mr. Peter",                                  quote:"Grace operates on relationship!",         time:Date.now(),                                  avatar:img3                                     }
 ])

	return (
	  <div className="container">

	   <div className="wrapper">
	    
            {data.map((props) => {
		return (
		 
		 <div className="card">
                                                               <div className="cardRow">                          <div className="cardRowCancel">                     <MdCancel  />                                   </div>                                            <img className="cardRowAvatar"                      src={props.avatar} alt="" />                    </div>

	  <div className="cardQuote">
	   <div><ImQuotesLeft /></div>
	   <div>{props.quote}</div>
	   <div><ImQuotesRight /></div>
	  </div>

	  <div className="cardName">
	   {props.name}
	  </div>

	 <div className="cardTime">
	  {""}
	  {moment(props.time).fromNow()}
	 </div>

            </div>
		)
	    })}
	    
	   </div>

	  </div>
	)
}

export default CardApp
