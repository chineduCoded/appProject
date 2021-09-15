import React, { useState, useEffect } from "react"
import { MdCancel } from "react-icons/md"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import "./CardApp.css"
import moment from "moment"

//import img  from "../img/1.jpeg"
//import img1 from "../img/2.jpeg"
import img2 from "../img/3.jpeg"
//import img3 from "../img/4.png"

const CardApp = () => {

const ALL_DATA = localStorage.getItem("data")
? JSON.parse(localStorage.getItem("data"))
: []

 const [data, setData] = useState(ALL_DATA)

 const [image, setImage] = useState(img2)
 
 const [name, setName] = useState("")

 const [myMind, setMyMind] = useState("")

 const uploadImage = (e) => {
    const file = e.target.files[0]
    const saveFile = URL.createObjectURL(file)
    setImage(saveFile)
 }

 const pushData = () => {
    const file = {
	id: data.length + 1,
	name,
	quote: myMind,
	avatar: image,
	time: Date.now()
    }
	setData([...data, file])
	setName("")
	setMyMind("")
	setImage(img2)
 }

 const deleteItem = (id) => {
  const removeItem = data.filter((el) => el.id !== id)
  setData(removeItem)
 }

 useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
}, [data])




	return (
	  <div className="container">

	  <div className="input">
	   <img className="inputImage" 
		src={image} alt="" />

	   <div className="inputsFile">
	    <input type="file" 
		className="inputSingle" 
		accept=".png, .jpg, .jpeg"
		onChange={uploadImage} />
	   <input placeholder="Name" 
		className="inputSingle"
		value={name}
		onChange={(e) => {
		  setName(e.target.value)
		}} />

	    <input
	     placeholder="What's on your mind"
	     className="inputSingle"
	     value={myMind}
	     onChange={(e) => {
		setMyMind(e.target.value)
	     }} />

	    <button className="button"
		onClick={pushData}>submit</button>
	   </div>

	  </div>

	   <div className="wrapper">
	    
            {data.map((props) => {
		return (
		 
        <div className="card">
          <div className="cardRow">
            <div className="cardRowCancel">                    
             <MdCancel onClick={() => {
		console.log(props.id)
		deleteItem(props.id)
	     }} />                                   
            </div>                                            
            <img className="cardRowAvatar"                      
            src={props.avatar} alt="" />                    
          </div>

	  <div className="cardQuote">
	   <div><ImQuotesLeft /></div>
	   <div>{props.quote}</div>
	   <div><ImQuotesRight /></div>
	  </div>

	  <div className="cardName">
	   <strong>{props.name}</strong>
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
