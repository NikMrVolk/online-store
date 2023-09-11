import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const MainLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	)
}

export default MainLayout
