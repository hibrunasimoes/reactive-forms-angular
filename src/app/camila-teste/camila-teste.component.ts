import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-camila-teste',
  templateUrl: './camila-teste.component.html',
  styleUrls: ['./camila-teste.component.scss']
})
export class CamilaTesteComponent implements OnInit {

  form = new FormGroup({

    email: new FormControl()

  })



  constructor() { }

  ngOnInit(): void {
  }

}
