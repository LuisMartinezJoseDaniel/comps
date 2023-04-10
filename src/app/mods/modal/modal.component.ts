import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  modalClasses = '';
  onShowModal(e: Event) {
    this.modalClasses = 'visible active page transition';
  }
}
