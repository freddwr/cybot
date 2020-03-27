import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-sugerencia',
  templateUrl: './sugerencias.component.html',
  // styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SugerenciaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router:Router,
    ) {
    this.form = new FormGroup({
      'nombres': new FormControl('', Validators.required),
      'apellidos': new FormControl('', Validators.required),
      'cedula': new FormControl(''),
      'telefonoCli': new FormControl('', Validators.required),
      'correoCli': new FormControl(''),
      'cursos': new FormControl('', Validators.required),
    })
   }

  get registerform():any { return this.form.controls };
  get nombres() { return this.form.get('nombres') };
  get apellidos() { return this.form.get('apellidos') };
  get telefonoCli() { return this.form.get('telefonoCli') };
  get cursos() { return this.form.get('cursos') };

  ngOnInit(){}

  enviarMessage(){
    let {
      nombres,
      apellidos,
      cedula,
      telefonoCli,
      correoCli,
      cursos
    } = this.form.value;

    let message: string = `https://api.whatsapp.com/send?phone=59170118203&text=
    *_RESERVA PARA EL CURSO_*%0A
    *${cursos}*%0A%0A
    *MI NOMBRE COMPLETO ES:*%0A
    ${nombres} ${apellidos}%0A
    *NRO. CELULAR:*%0A
    ${telefonoCli}%0A
    *CEDULA DE IDENTIDAD:*%0A
    ${cedula}%0A
    *CORREO ELECTRONICO:*%0A
    ${correoCli}%0A
    `
    window.open(message)
  }

}
