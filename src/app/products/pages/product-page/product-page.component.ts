import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  //Otra manera de realizar la inyección de dependencias
  private fb = inject(FormBuilder);

  public color: string = 'green';

  //Manera tradicional de realizar la inyección de dependencias
  //constructor(provate fb: FormBuilder) { }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
