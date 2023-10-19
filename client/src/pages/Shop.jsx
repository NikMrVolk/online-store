import { useContext, useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import { observer } from 'mobx-react-lite'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { Context } from '../context/context'
import { fetchBrand, fetchDevices, fetchType } from '../http/deviceAPI'

const Shop = observer(() => {
	const { device } = useContext(Context)

	useEffect(() => {
		fetchType().then((data) => device.setTypes(data))
		fetchBrand().then((data) => device.setBrands(data))
		fetchDevices().then((data) => device.setDevices(data.rows))
	}, [])

	return (
		<Container>
			<Row>
				<Col md={3} className="mt-2">
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DeviceList />
				</Col>
			</Row>
		</Container>
	)
})

export default Shop
