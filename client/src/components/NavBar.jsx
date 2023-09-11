import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../context/context'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	const { user } = useContext(Context)

	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>
					BuyDevice
				</NavLink>
				<Nav className="ml-auto">
					{user.isAuth ? (
						<>
							<Button variant={'outline-light'}>Admin panel</Button>
							<Button
								variant={'outline-light'}
								className="ms-2"
								onClick={() => {
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
