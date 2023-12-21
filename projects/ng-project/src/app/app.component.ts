import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UIXButtonComponent } from "@ngx-hub/uix/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UIXButtonComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-project';
}
