import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductEntity } from "@shops/api-interfaces";
import { ProductRepository } from "../../data/repositories/product.repository";

@Component({
  selector: 'shops-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  public product?: ProductEntity;
  public picturesLength = 0;
  public indexSelected = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productRepository: ProductRepository
  ) { }

  public ngOnInit(): void {
     this.getProductDetail();
  }

  private getProductDetail(): void {
    const { id } = this.route.snapshot.params;

    this.productRepository.getItem(id).subscribe(response => {
      this.product = response;
      this.picturesLength = this.product?.item?.pictures.length;
    });
  }
}
