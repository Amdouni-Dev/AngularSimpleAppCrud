import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, router: Router) { }


  addProduct(d:any){
   return this.http.post("http://localhost:3000/products", d)
  }
  fetchProducts(){
    return this.http.get("http://localhost:3000/products")
   }
   addProductToCart(d:any){
    return this.http.post("http://localhost:3000/carts", d)
   }
   fetchCarts(){
    return this.http.get("http://localhost:3000/carts")
   }
   fetchById(id:any){    
    return this.http.get("http://localhost:3000/carts/"+id)
   }
}
