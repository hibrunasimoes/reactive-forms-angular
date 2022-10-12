import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forms';
  formulario!: FormGroup ;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)

    // })

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }
}
