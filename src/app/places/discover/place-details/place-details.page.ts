import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  constructor(
  	private router: Router,
  	private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBooking() {
  	// this.router.navigateByUrl('/places/tabs/discover');
  	this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
