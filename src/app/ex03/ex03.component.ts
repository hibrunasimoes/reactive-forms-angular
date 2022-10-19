import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.scss']
})
export class Ex03Component implements OnInit {
  compra = new FormGroup({
    nome: new FormControl("", Validators.required),
    idade: new FormControl("", [Validators.required, Validators.min(18)]),
    cartaoCredito : new FormControl("", [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    cpf: new FormControl("", [Validators.required, this.testaCPF]),
    cvv: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  testaCPF(strCPF: FormControl) {
    var Soma;
    var Resto;
    Soma = 0;
    let stringCPF = strCPF.value;

    if (stringCPF == "00000000000") return { cpfInvalido: true, atual: stringCPF };

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(stringCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(stringCPF.substring(9, 10)) ) return { cpfInvalido: true, atual: stringCPF };

    Soma = 0;
      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(stringCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(stringCPF.substring(10, 11) ) ) return { cpfInvalido: true, atual: stringCPF };
      return null;
  }

  showResults(){
    if(this.compra.valid){
      console.log(this.compra)
    }
  }

}
