import React from 'react'
import ReactDOM from 'react-dom/client'
import { Context } from './context/context'
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
		<App />
	</Context.Provider>
)
