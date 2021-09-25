import React from "react"
import HomeInput from "./HomeInput/HomeInput"
import HeaderNav from "./HeaderNav/HeaderNav"
import "antd/dist/antd.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CardApp from "./Components/CardApp"

const App = () => {

	return (
		<Router>
			<HeaderNav />
			<Switch>
				
				<Route path="/upload" exact component={HomeInput} />
				<Route path="/card" exact component={CardApp}/>
			</Switch>
		</Router>
	)
}

export default App
