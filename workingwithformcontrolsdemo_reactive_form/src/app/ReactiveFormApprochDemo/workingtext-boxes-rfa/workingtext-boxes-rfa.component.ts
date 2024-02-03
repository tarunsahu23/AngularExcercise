import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-workingtext-boxes-rfa',
  templateUrl: './workingtext-boxes-rfa.component.html',
  styleUrls: ['./workingtext-boxes-rfa.component.css']
})
export class WorkingtextBoxesRfaComponent {

  reactiveForm !: FormGroup; 

  ngOninit():void{  
    
    this.reactiveForm = new FormGroup({

        productId : new FormControl('',[Validators.required,Validators.min(100)]),
        productName : new FormControl('',[Validators.required,Validators.minLength(5)]),
        cost : new FormControl('',[Validators.required,Validators.min(500)]),
        quantity: new FormControl('',[Validators.required,Validators.min(5),Validators.max(20)]),
        billAmt : new FormControl({value:'',disabled:true}),
        discount : new FormControl({value:'',disabled:true}),
        netBillAmt : new FormControl({value:'',disabled:true}),
    });
  }

  calculateVal(){
    let cost,quantity,billAmt,discount,netBillAmt :number = 0;

    cost = this.reactiveForm.get('cost')!.value;
    quantity = this.reactiveForm.get('quantity')!.value;

    billAmt = cost*quantity;

    if (billAmt > 10000) {
      discount = billAmt*10/1000;
    }else{
      discount=billAmt*5/1000;
    }

    netBillAmt = billAmt-discount;

    this.reactiveForm.get('billAmt')!.setValue('billAmt');
    this.reactiveForm.get('discount')!.setValue('billAmt');
    this.reactiveForm.get('netBillAmt')!.setValue('billAmt');
  }

}
