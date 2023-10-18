import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import BigStar from '../assets/BigStar.png'
import Button from 'react-bootstrap/esm/Button'

const DevicePage = () => {
	const device = {
		id: 1,
		name: 'Iphone 12 pro',
		price: 25000,
		rating: 5,
		img: 'https://i.ebayimg.com/images/g/cUMAAOSwmkNh86c9/s-l400.jpg',
	}
	const description = [
		{ id: 1, title: 'Оперативная память', description: '5 гб' },
		{ id: 2, title: 'Камера', description: '12 мп' },
		{ id: 3, title: 'Процессор', description: 'Пентиум 3' },
		{ id: 4, title: 'Количество яде', description: '2' },
		{ id: 5, title: 'Аккумулятор', description: '4000 мЧ' },
	]

	return (
		<Container>
			<Row className="d-flex mt-3">
				<Col md={4}>
					<Image height={300} width={300} src={device.img} />
				</Col>
				<Col md={4}>
					<Row>
						<h2>{device.name}</h2>
						<div
							className="d-flex justify-content-center align-items-center"
							style={{
								background: `url(${BigStar}) no-repeat center center`,
								width: 280,
								height: 280,
								backgroundSize: 'cover',
								fontSize: 48,
							}}
						>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className="d-flex flex-column justify-content-around align-items-center"
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
					>
						<h3>От {device.price} руб.</h3>
						<Button variant={'outline-dark'}>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<h2>Характеристики:</h2>
			<Row className="mt-3">
				{description.map(({ id, title, description }) => (
					<Row
						className="p-1"
						key={id}
						style={{ background: id % 2 ? 'transparent' : 'lightgray' }}
					>
						{title} : {description}
					</Row>
				))}
			</Row>
		</Container>
	)
}

export default DevicePage
