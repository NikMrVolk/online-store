import { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Spinner from 'react-bootstrap/Spinner'
import AppRouter from './components/AppRouter'
import './App.css'
import { check } from './http/userAPI'
import { Context } from './context/context'

const App = observer(() => {
	const { user } = useContext(Context)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			check()
				.then((res) => {
					user.setUser(true)
					user.setIsAuth(true)
				})
				.catch((e) => {
					console.log(e.message)
				})
				.finally(() => {
					setLoading(false)
				})
		}, 1000)
	}, [])

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		)
	}

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
})

export default App
