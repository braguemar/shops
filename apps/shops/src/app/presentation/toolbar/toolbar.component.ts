import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'shops-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public searchControl: FormControl = new FormControl(null);

  constructor(private readonly router: Router) { }

  public onSearch() {
    if (this.searchControl.value) {
      this.router.navigate(['/items'], { queryParams: { query: encodeURIComponent(this.searchControl.value) } });
    }
  }

  public goHome() {
    this.router.navigateByUrl('/');
  }
}
