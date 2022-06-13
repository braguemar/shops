import { Component, HostListener, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ProductEntity } from "@shops/api-interfaces";

@Component({
  selector: 'shops-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public product?: ProductEntity;

  constructor(private readonly router: Router) { }

  @HostListener('click')
  public onDetail() {
      this.router.navigateByUrl(`/items/${this.product?.item.id}`);
  }
}
