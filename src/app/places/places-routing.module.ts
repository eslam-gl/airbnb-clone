import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';
import { DiscoverPageModule } from './discover/discover.module';
import { PlaceDetailsPageModule } from './discover/place-details/place-details.module';
import { OffersPageModule } from './offers/offers.module';
import { NewOfferPageModule } from './offers/new-offer/new-offer.module';
import { EditOfferPageModule } from './offers/edit-offer/edit-offer.module';
import { OfferBookingsPageModule } from './offers/offer-bookings/offer-bookings.module';

const routes: Routes = [
	{
		path: 'tabs',
		component: PlacesPage,
		children: [
			{
				path: 'discover', children: [
				{
					path: '',
					loadChildren: './discover/discover.module#DiscoverPageModule'
				},
				{
					path: ':placeId',
					loadChildren: './discover/place-details/place-details.module#PlaceDetailsPageModule'
				}
			] },
			{
				path: 'offers',
				children: [
					{
						path: '',
						loadChildren: './offers/offers.module#OffersPageModule'
					},
					{
						path: 'new',
						loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'
					},
					{
						path: 'edit/:placeId',
						loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
					},
					{
						path: ':placeId',
						loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
					}
				]
			},
			{
				path: '',
				redirectTo: '/places/tabs/discover',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/places/tabs/discover',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PlacesRoutingModule {}
