// Modules
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@fttx/barcode-scanner';
import { AppVersion } from '@ionic-native/app-version';
import { Device } from '@ionic-native/device';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2';
import { Market } from '@ionic-native/market';
import { NativeAudio } from '@ionic-native/native-audio';
import { Network } from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Zeroconf } from '@ionic-native/zeroconf';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CircleTextComponent } from '../components/circle-text';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { EditScanSessionPage } from '../pages/scan-session/edit-scan-session/edit-scan-session';
import { ScanSessionPage } from '../pages/scan-session/scan-session';
import { SelectScanningModePage } from '../pages/scan-session/select-scanning-mode/select-scanning-mode';
import { ScanSessionsPage } from '../pages/scan-sessions/scan-sessions';
import { SelectServerPage } from '../pages/select-server/select-server';
import { SettingsPage } from '../pages/settings/settings';
import { WelcomePage } from '../pages/welcome/welcome';
import { CameraScannerProvider } from '../providers/camera-scanner';
import { ScanSessionsStorage } from '../providers/scan-sessions-storage';
import { ServerProvider } from '../providers/server';
import { Settings } from '../providers/settings';
import { Utils } from '../providers/utils';
import { MyApp } from './app.component';

// Ionic-native
// Pages
// import { BuyProPage } from '../pages/buy-pro/buy-pro';

// Providers
// Compontents
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ScanSessionsPage,
    EditScanSessionPage,
    SelectScanningModePage,
    WelcomePage,
    ScanSessionPage,
    SelectServerPage,
    CircleTextComponent,
    SettingsPage,
    HelpPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ScanSessionsPage,
    SelectServerPage,
    EditScanSessionPage,
    SelectScanningModePage,
    SettingsPage,
    HelpPage,
    WelcomePage,
    ScanSessionPage,
  ],
  providers: [
    ServerProvider,
    CameraScannerProvider,
    Utils,
    Settings,
    ScanSessionsStorage,
    GoogleAnalytics,
    StatusBar,
    SplashScreen,
    Market,
    Device,
    SocialSharing,
    AppVersion,
    BarcodeScanner,
    Zeroconf,
    Network,
    NativeAudio,
    InAppPurchase2,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
