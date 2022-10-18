import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forms';
  // nome = new FormControl("oi")
  // sobrenome = new FormControl()
  // email = new FormControl()
  // senha = new FormControl()
  // idade= new FormControl()
  // tecnologias = new FormControl()
  // moraEmSC = new FormControl()
  
  compra = new FormGroup({
    quantidade: new FormControl(),
    produto: new FormControl(),
    address: new FormGroup({
      rua: new FormControl("rua albano fragoso"),
      NumeroCasa: new FormControl(),
      bairro: new FormControl(),
      cidade: new FormControl(),
    })
  })

  // constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    console.log(this.compra)
    }
    mostraValor(){
    } 
  }
