import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Context } from '../../context/context'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'

const CreateDevice = ({ show, onHide }) => {
	const { device } = useContext(Context)
	const [info, setInfo] = useState([])

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number) => {
		setInfo(info.filter((i) => i.number !== number))
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Создать устройство</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className="mt-2">
						<Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map((type) => (
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2">
						<Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map((brand) => (
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control className="mt-3" placeholder="Введите название устройства" />
					<Form.Control
						type="number"
						className="mt-3"
						placeholder="Введите стоимость устройства"
					/>
					<Form.Control type="file" className="mt-3" />
					<Button className="mt-3" variant={'outline-dark'} onClick={addInfo}>
						Добавить новое свойство
					</Button>
					{info.map((i) => (
						<Row key={i.number}>
							<Col className="mt-3" md={4}>
								<Form.Control placeholder="Введите название свойства" />
							</Col>
							<Col className="mt-3" md={4}>
								<Form.Control placeholder="Введите описание свойства" />
							</Col>
							<Col className="mt-3" md={4}>
								<Button
									variant={'outline-danger'}
									onClick={() => {
										removeInfo(i.number)
									}}
								>
									Удалить свойство
								</Button>
							</Col>
						</Row>
					))}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>
					Закрыть
				</Button>
				<Button variant="outline-success" onClick={onHide}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateDevice
