import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-show-shopping-component',
  templateUrl: './show-shopping-component.component.html',
  styleUrls: ['./show-shopping-component.component.css']
})
export class ShowShoppingComponentComponent implements OnInit {

  Carts:any=[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.fetchCarts().subscribe((data)=>{
      this.Carts=data;
    });
  }

}
