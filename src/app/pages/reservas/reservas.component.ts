import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ngx-reservas',
  templateUrl: './reservas.component.html',
  styles: [`
        .activo{
          background: #0095ff !important;
          border:4px !important;
          color: black !important;
        }

        .fondo {
            background-color: #d9d9d9 !important;
            color: #000 !important;
        }

        table{
            border-spacing: 0;
            display: flex;/*Se ajuste dinamicamente al tamano del dispositivo**/
            max-height: 50vh; /*El alto que necesitemos**/
            overflow-y: auto; /**El scroll verticalmente cuando sea necesario*/
            overflow-x: hidden;/*Sin scroll horizontal*/
            table-layout: fixed;/**Forzamos a que las filas tenga el mismo ancho**/
            width: 98vw; /*El ancho que necesitemos*/
            border:1px solid gray;
        }

        thead{
            background-color: #f1eee9;
            position: fixed !important;/*el thead va ser siempre estatico**/
        }

        th{
            border-bottom: 1px solid #c4c0c9;
            border-right: 1px solid #c4c0c9;
        }

        th,td{
            font-weight: normal;
            margin: 0;
            word-wrap: break-word;/*Si el contenido supera el tamano, adiciona a una nueve linea**/
            font-size: 11px;
            height: 4.5vh !important;/*El mismo alto para todas las celdas**/
            padding: 4px;
            border-right: 1px solid #c4c0c9;
        }
        tr:nth-child(2n) {
            background: none repeat scroll 0 0 #edebeb;
        }

        @media screen and (max-width: 900px) {
            .logo {
                display: none;
            }
        }
    `
    ]
})
export class ReservasComponent implements OnInit, OnDestroy {

  // insistem = localStorage.getItem('padlock') ? true : false;

  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
