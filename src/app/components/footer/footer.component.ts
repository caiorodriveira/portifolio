import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor(private _snackBar: MatSnackBar){}

  copy() {
    navigator.clipboard?.writeText('caiorodrigo2775@gmail.com');
    this._snackBar.open("Email copiado para a área de transfência", "OK", {
      duration: 3000,
    });

  }
}
