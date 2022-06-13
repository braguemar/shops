import { Component, Input} from '@angular/core';

@Component({
  selector: 'shops-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() public breads: string[] = [];
}
