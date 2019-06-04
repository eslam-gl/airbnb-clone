import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
	providedIn: 'root'
})
export class PlacesService {
	private _places: Place[] = [
		new Place('p1', 'Mountain View Villa', 'In the heart of Egypt', 'https://source.unsplash.com/800x600', 2999),
		new Place('p2', '5th Settlement Villa', 'Perfect for small families', 'https://source.unsplash.com/800x600', 1699),
		new Place('p3', 'Mivida Villa', 'A medium-sized villa for business', 'https://source.unsplash.com/800x600', 2499),
	];

	get places() {
		return [...this._places];
	}

	getPlace(id: string) {
		return {...this._places.find(p => p.id == id)};
	}

	constructor() { }
}
