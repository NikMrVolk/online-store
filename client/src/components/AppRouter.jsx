import { Route, Routes, Navigate } from 'react-router-dom'
import { mainRoute, authRoutes, publicRoutes } from '../routes/routes'
import { Context } from '../context/context'
import { useContext } from 'react'

const AppRouter = () => {
	const { user } = useContext(Context)

	return (
		<div>
			<Routes>
				<Route path={mainRoute.path} element={mainRoute.Component}>
					{user.isAuth &&
						authRoutes.map(({ path, Component }) => (
							<Route key={path} path={path} element={Component} />
						))}
					{publicRoutes.map(({ path, Component }) => (
						<Route key={path} path={path} element={Component} />
					))}
					<Route path="*" element={<Navigate to={mainRoute.path} />} />
				</Route>
			</Routes>
		</div>
	)
}

export default AppRouter
