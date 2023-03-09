import { Customer } from './../../models/customer.model';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit  {

 
  addCustomerRequest: Customer = {
    id: '',
    name: '',
    email: '',
    phone: 0,
  }

  ngOnInit(): void {
      
  }

  constructor(private customerService: CustomerService, private router: Router){
   
  }

  addCustomer(){
    this.customerService.addCustomer(this.addCustomerRequest)
    .subscribe({
      next: (customer) => {
        console.log(customer);
        this.router.navigate([''])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
