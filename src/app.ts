import { Component, NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "my-app",
  template: `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input
          [disabled]="true"
          matInput
          placeholder="Premier Input"
          value="Test"
        />
      </mat-form-field>
    </form>
  `
})
export class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
