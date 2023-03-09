import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Customer } from '../models/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseApiUrl: string = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  addCustomer(addCustomerRequest:Customer){
    addCustomerRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Customer>(this.baseApiUrl +'/api/customer', addCustomerRequest)
  }
}
