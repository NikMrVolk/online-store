import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const navigate = useNavigate()

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? 'Autorization' : 'Registration'}</h2>
				<Form className="d-flex flex-column">
					<Form.Control placeholder="Enter email..." className="mt-3" type="text" />
					<Form.Control placeholder="Enter password..." className="mt-3" type="password" />
					<div className="d-flex justify-content-between align-items-center mt-3">
						{isLogin ? (
							<div>
								Don't have accaunt? <Link to={REGISTRATION_ROUTE}>Sign up</Link>
							</div>
						) : (
							<div>
								Do you have accaunt? <Link to={LOGIN_ROUTE}>Sign in</Link>
							</div>
						)}
						<Button
							variant={'outline-success'}
							onClick={() => {
								navigate(SHOP_ROUTE)
							}}
						>
							{isLogin ? 'Sign in' : 'Sign up'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth
