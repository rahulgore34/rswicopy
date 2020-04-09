import { Component, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isShow = false;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
