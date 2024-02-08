import { Component } from '@angular/core';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {
  public tenerHambre: boolean = false;
  public deshabilitarCheck: boolean = true;
  public textoHambre: string = '';
  public textoAprobar: string = '';
  public esteFinde: string = 'ver la tele';


  heHechoClick(): void {
    alert("PLIN");
  }

  verSiTengoHambre(evento: Event): void {
    alert(evento.target);
    if ((<HTMLInputElement>evento.target).checked) {
      this.textoHambre = "Pues tengo hambre, voy a comer algo";
    } else {
      this.textoHambre = "No tengo nada de hambre";
    }
  }

  verSiApruebo (x : Event): void {
    alert(x.target);
    if((<HTMLInputElement>x.target).value == "si") {
      this.textoAprobar = "Creo que si voy a aprobar";
    }else if((<HTMLInputElement>x.target).value == "no") {
      this.textoAprobar = "Mejor lo dejo para Junio";
    }else {
      this.textoAprobar = "Pues ni si ni no, todo lo contrario";
    }
  }

  planearesteFinde(ev : Event): void {
    this.esteFinde=(<HTMLInputElement>ev.target).value;
  }
}
