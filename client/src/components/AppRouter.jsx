import { Route, Routes, Navigate } from 'react-router-dom'
import { mainRoute, authRoutes, publicRoutes } from '../routes/routes'
import { Context } from '../context/context'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
	const { user } = useContext(Context)

	return (
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
	)
})

export default AppRouter
