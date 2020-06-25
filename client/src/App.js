import React, { fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'

import Navbar from './components/layout/Navbar'
import './App.css'
import Register from './components/auth/Register'

const App = () => (
	<Router>
		<fragment>
			<Navbar />
			<Route exact path='/' component={Landing} />
			<section className='container'>
				<Switch>
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</section>
		</fragment>
	</Router>
)

export default App
