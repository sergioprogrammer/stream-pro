import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-filter-popover",
  templateUrl: "./filter-popover.component.html",
  styleUrls: ["./filter-popover.component.scss"],
})
export class FilterPopoverComponent implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async close() {
    await this.popoverController.dismiss();
  }
}
