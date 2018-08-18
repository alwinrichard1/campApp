import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AutocompletePlacesService } from './autocompletePlaces.service';

@Component({
  selector: 'app-autocompletePlaces',
  templateUrl: './autocompletePlaces.component.html',
  styleUrls: ['./autocompletePlaces.component.css'],
  providers: [AutocompletePlacesService]
})
export class AutocompletePlacesComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredPlaces: any;
  @Input() places: any;
  @Output() selectedData = new EventEmitter<any>();
  selectedPlace: any;

  constructor(
  ) {
    this.filteredPlaces = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterPlaces(state) : this.places.slice())
      );
  }

  ngOnInit() {
  }

  private _filterPlaces(value: string) {
    const filterValue = value.toLowerCase();
    return this.places.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  giveSelectedData(e: any) {
    this.selectedData.emit(this.selectedPlace);
    alert(this.selectedPlace);
  }
}
