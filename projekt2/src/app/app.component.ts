import { Component } from '@angular/core';
import { Osoba } from "./interfejs";
@Component({
  selector: 'app-root',
  template:`
  <p [style.background-color]="kolor" [style.text-align]="jak"> Firma {{ nazwa }}</p>
  <label> <input type="checkbox" [(ngModel)]=pokazZdjecie> Pokaz Zdjecie</label>
  <div id='ramka'>
    <img src={{osoba.zdjecie}} [class.zdjecie]="aktywna" [style.zdjecie]="nazwa" *ngIf="pokazZdjecie else brakZdjecia"> 
  </div>
  <div id='kontakt' class='tekst'>
    <p>Kontakt:</p>
      <ul>
        <li *ngFor="let value of osoba.adres">{{value}}</li>
      </ul>
  </div>
  <button  (click)="zmienKolor()"  [style.background-color]="kolor" type="button" [class.przycisk]="aktywna">Zmień kolor tła</button>
  <ng-template #brakZdjecia>
    <img src='{{osoba.bezZdjecia}}' class='zdjecie'>
    <p class='tekst_srodek'>Brak zdjecia</p>
  </ng-template>`,
  
  styleUrls:['app.component.css'],
styles: [`
.zdjecie {border: 3px solid #000; display: block; margin: auto; }
  .przycisk {border: none; color: blue;  background-color: red; padding: 20px; font-size: 10px; dissplay:block; margin: 10px auto;}
  .przycisk:hover {background: #eee;}`]
})
 


export class AppComponent {
osoba: Osoba={
  imie: "Mateusz",
  nazwisko: "Jakis",
  zdjecie: "assets/images/obraz_1.jpg",
  bezZdjecia: "assets/images/nofoto.jpg",
  adres: ["Chopina 26","41-807","Zabrze"]
  
}
nazwa:string="FedEx"
  kolor: string = "red";
  jak: string = "center";
  aktywna: boolean = true;
  pokazZdjecie: boolean = false;
  zmienKolor() {
    this.kolor = this.kolor === "red" ? "blue" : "red";
  }
}
