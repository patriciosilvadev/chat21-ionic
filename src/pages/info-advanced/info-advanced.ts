import { Component, NgZone, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { environment } from '../../environments/environment';
import { AppConfigProvider } from '../../providers/app-config/app-config';
/**
 * Generated class for the InfoAdvancedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-advanced',
  templateUrl: 'info-advanced.html',
})
export class InfoAdvancedPage {
  // ========= begin:: Input/Output values ============//
  @Output() eventClose = new EventEmitter();
  @Input() attributes: any = {};
  // ========= end:: Input/Output values ============//

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appConfig: AppConfigProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoAdvancedPage', this.attributes);
  }

  onCloseInfoPage() {
    this.eventClose.emit();
  }


  openProjectHome() {
    var url = this.appConfig.getConfig().DASHBOARD_URL + "#/project/" + this.attributes.projectId + "/home/";
    //var url = environment.URL_PROJECT_ID + this.attributes.projectId + "/home/";
    console.log('openProjectHome:', url);
    window.open(url, '_blank');
  }
}