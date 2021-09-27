import React from "react"
import HomeInput from "./HomeInput/HomeInput"
import HeaderNav from "./HeaderNav/HeaderNav"
import "antd/dist/antd.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CardApp from "./Components/CardApp"
import Counter from "./Counter/Counter"
import GitHubApp from "./GitHub/GitHubApp"
import HomePage from "./HomePage/HomePage"

const App = () => {

	return (
		<Router>
			<HeaderNav />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/github" exact component={GitHubApp} />
				<Route path="/card" exact component={CardApp}/>
				<Route path="/screen" exact component={HomeInput} />
				<Route path="/counter" exact component={Counter} />
			</Switch>
		</Router>
	)
}

export default App
