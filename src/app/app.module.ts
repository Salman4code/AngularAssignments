import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
