import {Input, Button} from "antd"
import React, {useState} from "react"
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"
import "./HomeScreen.css"
import img1 from "../img/1.jpeg"
import img2 from "../img/2.jpeg"
import img3 from "../img/3.jpeg"
import img4 from "../img/4.png"

const HomeScreen = () => {
 
 const [text, setText] = useState([
	 "It's a raining day",                             "Deborah is making shoe",                         "she's beautiful"
 ])

 const [name, setName] = useState("")

 const [image, setImage] = useState(img4)

 const [myImage, setMyImage] = useState([
	 img1, img2, img3
 ])

 const [page, setPage] = useState(0)

 const nextPage = () => {
	 setPage(page + 1)
 }

 const prevPage = () => {
	if(page < 0){
	   setPage(text.length)
	}else{
	   setPage(page - 1)
	}
 }

 const addData = () => {
	setText([...text, name])
	setMyImage([...myImage, image])
	setName("")
 }

 const imageUpload = (e) => {
  const file = e.target.files[0]
  const saveImage = URL.createObjectURL(file)
  setImage(saveImage)
 }

 return (
  <div className="container">

   <div className="container_profile">
    <img className="profile_img" src={image} alt="" />
    <div>
     <Input type="file" onChange={imageUpload} />
    </div>
   </div>

   <div className="input">
    <Input placeholder="Enter your text" value={name} onChange={(e) => {
	    setName(e.target.value)
    }} />
    <Button className="inputButton" type="primary" danger onClick={() => {
	addData()
    }}>Add
    </Button>
   </div>

   <div className="container_1">
     <div className="button">
	<BiLeftArrow onClick={prevPage} />
     </div>
     <div className="container_display">
	<div className="text">{text[page%text.length]}</div>
	<img className="img" src={myImage[page%myImage.length]} alt="" />
     </div>
     <div className="button">
	<BiRightArrow onClick={nextPage} />
     </div>
   </div>
	 
  </div>
 )
}

export default HomeScreen
