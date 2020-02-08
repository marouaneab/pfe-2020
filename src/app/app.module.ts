import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatExpansionModule} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import { DashboardComponent } from './main-page/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SuperSecretComponent } from './super-secret/super-secret.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SuperSecretComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        LayoutModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        FormsModule,
        MatBadgeModule,
        AngularFireModule.initializeApp(environment.firebase),
        MatTreeModule,
        MatExpansionModule,
        HttpClientModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule
        ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
