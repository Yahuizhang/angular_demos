import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
// import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    // 使用时必须引用
    AppComponent,
    // UserComponent,
    IndexComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
