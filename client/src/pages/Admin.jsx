import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
	const [visible, setVisible] = useState({ type: false, brand: false, device: false })

	return (
		<Container className="d-flex flex-column">
			<Button
				variant={'outline-dark'}
				className="mt-4"
				onClick={() => setVisible({ ...visible, type: true })}
			>
				Добавить тип
			</Button>
			<Button
				variant={'outline-dark'}
				className="mt-4"
				onClick={() => setVisible({ ...visible, brand: true })}
			>
				Добавить брэнд
			</Button>
			<Button
				variant={'outline-dark'}
				className="mt-4"
				onClick={() => setVisible({ ...visible, device: true })}
			>
				Добавить устройство
			</Button>
			<CreateType
				show={visible.type}
				onHide={() => {
					setVisible({ ...visible, type: false })
				}}
			/>
			<CreateBrand
				show={visible.brand}
				onHide={() => {
					setVisible({ ...visible, brand: false })
				}}
			/>
			<CreateDevice
				show={visible.device}
				onHide={() => {
					setVisible({ ...visible, device: false })
				}}
			/>
		</Container>
	)
}

export default Admin
