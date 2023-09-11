import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { Context } from './context/context'
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'
import './App.css'

function App() {
	return (
		<Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</Context.Provider>
	)
}

export default App
