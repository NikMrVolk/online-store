import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../context/context'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'

const BrandBar = observer(() => {
	const { device } = useContext(Context)

	return (
		<Container className="d-flex flex-wrap gap-2 mt-2">
			{device.brands.map((brand) => (
				<Card
            style={{cursor: 'pointer'}}
					border={brand.id === device._selectedBrand.id ? 'danger' : ''}
					onClick={() => {
						device.setSelectedBrand(brand)
					}}
					key={brand.id}
					className="p-3"
				>
					{brand.name}
				</Card>
			))}
		</Container>
	)
})

export default BrandBar
