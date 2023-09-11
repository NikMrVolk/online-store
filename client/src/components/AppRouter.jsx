import { Route, Routes, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes/routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../context/context'
import { useContext } from 'react'

const AppRouter = () => {
	const { user } = useContext(Context)

	return (
		<div>
			<Routes>
				{user.isAuth &&
					authRoutes.map(({ path, Component }) => (
						<Route key={path} path={path} element={Component} />
					))}
				{publicRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={Component} />
				))}
				<Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
			</Routes>
		</div>
	)
}

export default AppRouter
