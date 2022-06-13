import { ProductEntity } from './../../../../../../libs/api-interfaces/src/lib/entities/product.entity';
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductRepository } from "../../data/repositories/product.repository";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shops-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  public products?: Observable<ProductEntity[]>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productRepository: ProductRepository
  ) { }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(({query}) => {
      if (query) {
        this.products = this.productRepository.search(query);
      }
    });
  }
}
