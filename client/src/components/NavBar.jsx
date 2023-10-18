import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../context/context'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()

	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>
					BuyDevice
				</NavLink>
				<Nav className="ml-auto">
					{user.isAuth ? (
						<>
							<Button
								variant={'outline-light'}
								onClick={() => {
									navigate(ADMIN_ROUTE)
								}}
							>
								Admin panel
							</Button>
							<Button
								variant={'outline-light'}
								className="ms-2"
								onClick={() => {
									navigate(LOGIN_ROUTE)
									user.setIsAuth(false)
								}}
							>
								Log out
							</Button>
						</>
					) : (
						<>
							<Button
								variant={'outline-light'}
								onClick={() => {
									user.setIsAuth(true)
								}}
							>
								Autorization
							</Button>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	)
})

export default NavBar
