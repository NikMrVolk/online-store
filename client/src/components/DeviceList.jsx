import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../context/context'
import Container from 'react-bootstrap/esm/Container'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
	const { device } = useContext(Context)

	return (
		<Container className="d-flex flex-wrap">
			{device.devices.map((device) => (
				<DeviceItem key={device.id} device={device} />
			))}
		</Container>
	)
})

export default DeviceList
