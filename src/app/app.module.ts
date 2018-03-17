import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FanExperiencePage } from '../pages/fan-experience/fan-experience';
import { PreGamePage } from '../pages/pre-game/pre-game';
import { PostGamePage } from '../pages/post-game/post-game';
import { AtTheParkPage } from '../pages/at-the-park/at-the-park';

import { ContentfulService } from './service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FanExperiencePage,
    PreGamePage,
    PostGamePage,
    AtTheParkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FanExperiencePage,
    PreGamePage,
    PostGamePage,
    AtTheParkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContentfulService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}