import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // output and EventEmitter need to be import to avoid errors
  // @Output() selectedFeatureEvent = new EventEmitter <string>();

  // onSelected(selectedEvent: string){
  //   this.selectedFeatureEvent.emit(selectedEvent);
  // }
  @Output() featureSelected = new EventEmitter<string>();

  onSelected(selectedEvent: string) {
    this.featureSelected.emit(selectedEvent);
  }
}
