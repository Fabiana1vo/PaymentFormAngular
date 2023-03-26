import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public form!: FormGroup;
  flipped = false;



  showSvg:any = true;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.form = this.formBuilder.group({
      CardNumber : ['', [Validators.required]],
      CardHolder : ['',  [Validators.pattern('[a-zA-Z ]*')]],
      ExpirationM : ['', [Validators.required]],
      ExpirationY : ['', [Validators.required]],
      cvv : ['', [Validators.required]],

      // cardHolder: new FormControl('')

    })
    
  }

  // Função para mostrar o valor do campo em tempo real e refletir para o cartão.
  updateValues() {}

 

  submit()
  {
    alert(`Funcionou hehehehe`)
  }


}
