import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Phones' },
			{ id: 2, name: 'Tablets' },
		]
		this._brands = [
			{ id: 1, name: 'Apple' },
			{ id: 2, name: 'Samsung' },
		]
		this._devices = [
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://i.ebayimg.com/images/g/cUMAAOSwmkNh86c9/s-l400.jpg',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://i.ebayimg.com/images/g/cUMAAOSwmkNh86c9/s-l400.jpg',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://i.ebayimg.com/images/g/cUMAAOSwmkNh86c9/s-l400.jpg',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://i.ebayimg.com/images/g/cUMAAOSwmkNh86c9/s-l400.jpg',
			},
		]
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}

	setBrands(brands) {
		this._brands = brands
	}

	setDevices(devices) {
		this._devices = devices
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}
}
