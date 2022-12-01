import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor(private service:ProductService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.fetchById(this.ac.snapshot.params["id"]).subscribe(
      (d)=>{console.log(d);
      }
    )
  }

}
