import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {testRoutes} from './test.routes';
import {RouterModule} from '@angular/router';
import {TestComponent} from "./test.component";
import {UserComponent} from "../user/user.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(testRoutes)
  ],
  declarations: [
    TestComponent,
    UserComponent
  ]
})
export class TestModule { }
