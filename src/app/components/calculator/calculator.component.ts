import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styles: [],
})
export class CalculatorComponent implements OnInit {
  currentResult: number | string = 0;

  myForm: FormGroup = this.fb.group({
    value1: [0, Validators.required],
    value2: [0, Validators.required],
    operation: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public calculatorService: CalculatorService
  ) {}

  ngOnInit(): void {
    this.myForm.get('operation')?.valueChanges.subscribe((operator) => {
      const value1 = this.myForm.get('value1')?.value;
      const value2 = this.myForm.get('value2')?.value;

      this.currentResult = this.calculatorService.calculate(
        value1,
        value2,
        operator
      );
    });
  }

  /*   addToHistory(oeprator: string) {
    this.results.unshift(
      `${this.value1} ${oeprator} ${this.value2} = ${this.currentResult}`
    );
  } */
}
