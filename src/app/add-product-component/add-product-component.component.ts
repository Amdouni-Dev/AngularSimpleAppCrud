import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }

  addP(f:any){
    this.service.addProduct(f).subscribe(
      ()=>{console.log("ADDED !");
      }
    )
  }

}
