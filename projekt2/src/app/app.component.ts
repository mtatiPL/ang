import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <p [style.background-color]="kolor" [style.text-align]="jak"> Firma {{ nazwa }}</p>

  <img  src="assets/images/obraz_1.jpg" [class.zdjecie]="aktywna">

  <button  (click)="zmienKolor()"  [style.background-color]="kolor" type="button" [class.przycisk]="aktywna">Zmień kolor tła</button>`,
  

  
styles: [`
.zdjecie {border: 3px solid #000; display: block; margin: auto; }
  .przycisk {border: none; color: blue;  background-color: red; padding: 20px; font-size: 10px; dissplay:block; margin: 10px auto;}
  .przycisk:hover {background: #eee;}`]
  
})
 


export class AppComponent {

nazwa:string="FedEx"
  kolor: string = "red";
  jak: string = "center";
  aktywna: boolean = true;

  zmienKolor() {
    this.kolor = this.kolor === "red" ? "blue" : "red";
  }
}
