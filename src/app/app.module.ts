import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//database modules
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseModule } from "./app.firebase.config";

//database services 
import { AuthService } from "../services/AuthService/auth.service";
import { GeoService } from "../services/GeofireService/geofire.service";

//main app Component
import { DtPickup } from './app.component';

// Application Pages
import { LoginUserPage } from "../setup-pages/login-user/login-user";
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

//Ionic Native Modules
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupUserModule } from "../setup-pages/signup-user/signup-user.module";
import { ProfilePage } from '../pages/profile/profile';





@NgModule({
  declarations: [
    DtPickup,
    HomePage,
    ListPage,
    LoginUserPage,
    ProfilePage
  
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    SignupUserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(DtPickup),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DtPickup,
    HomePage,
    ListPage,
    ProfilePage,
    LoginUserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    GeoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
