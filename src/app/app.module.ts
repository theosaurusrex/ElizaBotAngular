import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { ChatButtonsComponent } from './chat-buttons/chat-buttons.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { ElizabotComponent } from './elizabot/elizabot.component';

@NgModule({
  declarations: [
    AppComponent,
    ElizabotComponent,
    ChatButtonsComponent,
    ChatInterfaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
