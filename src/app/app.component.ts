import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PostGamePage } from '../pages/post-game/post-game';
import { PreGamePage } from '../pages/pre-game/pre-game';
import { AtTheParkPage } from '../pages/at-the-park/at-the-park';


import { FanExperiencePage } from '../pages/fan-experience/fan-experience';
import { ContentfulService } from './service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = FanExperiencePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, service: ContentfulService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // let temp = service.getProducts();
      // console.log(temp);
    });
  }
  goToPostGame(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PostGamePage);
  }goToFanExperience(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FanExperiencePage);
  }goToPreGame(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PreGamePage);
  }goToAtThePark(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AtTheParkPage);
  }
}
