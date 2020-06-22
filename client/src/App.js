import React, { fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import './App.css'

const App = () => (
	<Router>
		<fragment>
			<Navbar />
			<Route exact path='/' component={Landing} />
		</fragment>
	</Router>
)

export default App
