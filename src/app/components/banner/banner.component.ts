import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommingSoonComponent } from "../../comming-soon/comming-soon.component";
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, CommingSoonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  isModalOpen = false; // Modal visibility state

  // Form data binding
  formData = {
    name: '',
    mobile: '',
    notes: '',
  };

  // Open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Submit the booking form
  submitBooking() {
    console.log('Booking Data:', this.formData);

    // Clear form and close modal after submission
    this.formData = { name: '', mobile: '', notes: '' };
    this.closeModal();
  }
}
