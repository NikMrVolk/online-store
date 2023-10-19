import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'
import { DEVICE_ROUTE, REACT_APP_API_URL } from '../utils/consts'

const DeviceItem = ({ device }) => {
	const navigate = useNavigate()

	return (
		<Col md={3} className="mt-3">
			<Card
				style={{ cursor: 'pointer', width: 150 }}
				border={'light'}
				onClick={() => {
					navigate(`${DEVICE_ROUTE}/${device.id}`)
				}}
			>
				<Image width={150} height={150} src={REACT_APP_API_URL + device.img} />
				<div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
					<div>Samsung...</div>
					<div className="d-flex align-items-center">
						<div>{device.rating}</div>
						<Image width={18} height={18} src={star} />
					</div>
				</div>
				{device.name}
			</Card>
		</Col>
	)
}

export default DeviceItem
