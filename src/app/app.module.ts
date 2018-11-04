import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElizaComponent } from './eliza/eliza.component';
import { ElizabotdataComponent } from './elizabotdata/elizabotdata.component';
import { ElizabotComponent } from './elizabot/elizabot.component';

@NgModule({
  declarations: [
    AppComponent,
    ElizaComponent,
    ElizabotdataComponent,
    ElizabotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
