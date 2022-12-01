import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  Products:any=[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.fetchProducts().subscribe((data)=>{
      this.Products=data;
    });
  }

  addPToC(f:any){
    this.service.fetchById(f.id).subscribe(
      (d)=>{alert("Product already exists !")},
      (err)=>{
    this.service.addProductToCart(f).subscribe(
      ()=>{console.log("ADDED !");
      }
    )}
    )
  }
}
