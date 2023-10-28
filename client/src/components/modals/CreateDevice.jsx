import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Context } from '../../context/context'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import { createBrand, fetchBrand, fetchType } from '../../http/deviceAPI'

const CreateDevice = observer(({ show, onHide }) => {
	const { device } = useContext(Context)
	const [nameValue, setNameValue] = useState('')
	const [priceValue, setPriceValue] = useState(0)
	const [file, setFile] = useState(null)
	const [info, setInfo] = useState([])

	const selectFile = (el) => {
		setFile(el.target.files[0])
	}

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number) => {
		setInfo(info.filter((i) => i.number !== number))
	}

	const changeInfo = (key, value, number) => {
		return info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
	}

	// const addDevice = () => {
	// 	const formData = new FormData()
	// 	formData.append('name', nameValue)
	// 	formData.append('price', `${priceValue}`)
	// 	formData.append('img', file)
	// 	formData.append('brandId', device.selectedBrand.id)
	// 	formData.append('typeId', device.selectedType.id)
	// 	formData.append('info', JSON.stringify(info))
	// 	createBrand(formData).then(() => onHide())
	// }

	useEffect(() => {
		fetchType().then((data) => device.setTypes(data))
		fetchBrand().then((data) => device.setBrands(data))
	}, [])

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
						<Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map((type) => (
								<Dropdown.Item
									onClick={() => {
										device.setSelectedType(type)
									}}
									key={type.id}
								>
									{type.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2">
						<Dropdown.Toggle>{device.selectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map((brand) => (
								<Dropdown.Item
									onClick={() => {
										device.setSelectedBrand(brand)
									}}
									key={brand.id}
								>
									{brand.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						value={nameValue}
						onChange={(e) => setNameValue(e.target.value)}
						className="mt-3"
						placeholder="Введите название устройства"
					/>
					<Form.Control
						value={priceValue}
						onChange={(e) => setPriceValue(e.target.value)}
						type="number"
						className="mt-3"
						placeholder="Введите стоимость устройства"
					/>
					<Form.Control onChange={selectFile} type="file" className="mt-3" />
					<Button className="mt-3" variant={'outline-dark'} onClick={addInfo}>
						Добавить новое свойство
					</Button>
					{info.map((i) => (
						<Row key={i.number}>
							<Col className="mt-3" md={4}>
								<Form.Control
									value={i.title}
									onChange={(e) => {
										setInfo(changeInfo('title', e.target.value, i.number))
									}}
									placeholder="Введите название свойства"
								/>
							</Col>
							<Col className="mt-3" md={4}>
								<Form.Control
									value={i.description}
									onChange={(e) => {
										setInfo(changeInfo('description', e.target.value, i.number))
									}}
									placeholder="Введите описание свойства"
								/>
							</Col>
							<Col className="mt-3" md={4}>
								<Button
									variant={'outline-danger'}
									onClick={() => {
										removeInfo(i.number)
									}}
								>
									Удалить
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
})

export default CreateDevice
