import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

//Grupo de formulário
  // pessoa = new FormGroup({
  //   nome: new FormControl(),
  //   sobrenome: new FormControl(),
  //   senha: new FormControl(),
  //   moraEmSC : new FormControl(),
  //   cep : new FormControl("", [ Validators.required, this.cepValidator ]),
  //   idade: new FormControl(17, [Validators.min(18), Validators.required ]),
  //   email: new FormControl("", [Validators.email, Validators.required ])
  // })
  constructor() { }

  pessoa = new FormGroup({
    nome: new FormControl(),
    sobrenome: new FormControl(),
    cep : new FormControl("", [ Validators.required, this.cepValidator ]),
  })


  ngOnInit(): void {
    // console.log(this.pessoa.controls.idade.valid) //false
    // this.pessoa.controls.idade.setValue(20);
    // console.log(this.pessoa.controls.idade.valid) //true
  }


  cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido : true, actual: cep };
    }
    return null;
  }

  // verificaTouched(){
  //   return !this.pessoa.controls.email.valid && this.pessoa.controls.email.touched;
  // }

  showResults(){
    console.log(this.pessoa)
  }
}
