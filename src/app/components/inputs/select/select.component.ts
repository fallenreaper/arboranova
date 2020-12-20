import { Component, Input, HostBinding, Self, Optional, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject, Subscription } from 'rxjs';
import { NgControl, FormBuilder, FormControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: SelectComponent },
    FormBuilder
  ]
})
export class SelectComponent implements MatFormFieldControl<any> {
  /// This needs to set the value.  I need to add that to the Mat select.
  @Input() set value(val: any[] | any) {
    let data: any[] | any = val;
    if (data === undefined || data === null) {
      data = [];
    }
    if (!Array.isArray(data)) {
      data = [data];
    }
    this._value = data;
    this.valueChange.emit(data);
    if (this.fc.value !== data){
      this.fc.setValue(data);
    }
    this.stateChanges.next();
  }
  get value() { return this._value; }

  get valueString(): string {
    return this.value && this.value.length > 0 && this.value[0] ?
      (this.useProperty === null ?
        this.value[0] :
        this.value[0][this.useProperty]) :
      '';
  }

  // Placeholder text for the Filter Text.
  @Input()
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  get placeholder() {
    return this._placeholder;
  }

  get empty() {
    return !this.value;
  }
  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  // Whether or not the select is required.
  @Input()
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.matSelect.required = this._required;
    this.stateChanges.next();
  }
  get required() {
    return this._required;
  }

  // Whether or not the Select is to be disabled.
  @Input()
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.matSelect.disabled = this._disabled;
    this.stateChanges.next();
  }
  get disabled(): boolean {
    return this._disabled;
  }

  // A list of objects to be added to the select.
  @Input()
  set datasource(val: any[]) {
    this.filteredDataArray = this._datasource = val;
    this.stateChanges.next();
  }
  get datasource() { return this._datasource; }
  get showSpinner() { return this.datasource.length === 0; }

  constructor(fb: FormBuilder,
              private fm: FocusMonitor,
              private elRef: ElementRef<HTMLElement>,
              @Optional() @Self() public ngControl: NgControl) {

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }
  static nextId = 0;
  fc = new FormControl();
  private _fcSubscriber: Subscription;

  @Input() showChips = true;

  @Input() useTranslateService = false;
  // Value output will fire whenever value is changed.
  @Output() valueChange = new EventEmitter<any[]>();
  @ViewChild(MatSelect, { static: true }) matSelect: MatSelect;
  private _value;
  stateChanges = new Subject<void>();
  @HostBinding() id = `app-select-${SelectComponent.nextId++}`;
  private _placeholder = 'Search';
  focused: boolean;
  private _required = false;
  private _disabled = false;
  errorState = false;
  controlType = 'app-select';
  autofilled?: boolean;
  @HostBinding('attr.aria-describedby') describedBy = '';

  selectedItem: any = null;
  private _datasource: any[] = [];
  filteredDataArray: any[] = [];
  // A property to use if the list item is an object, else will render object itself.
  @Input() useProperty: string | null = null;
  // Whether or not the Select is a Multi Select.
  @Input() multiple = false;
  // Allow the datasouce to be filtered by the user.
  @Input() allowSearch = true;

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'mat-select') {
      (this.elRef.nativeElement.querySelector('mat-select') as HTMLElement).focus();
    }
  }

  onNgDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
    this._fcSubscriber.unsubscribe();
  }

  ngOnInit() {
    this._fcSubscriber = this.fc.valueChanges.subscribe(val => {
      this.value = val instanceof Array ? val : [val];
    });
  }

  onSearchData(filterValue: string) {
    this.filteredDataArray = this.datasource.filter(item => {
      const itemToFilterAgainst: string = (this.useProperty !== null ? item[this.useProperty] : item).toLowerCase();
      return itemToFilterAgainst.indexOf(filterValue) >= 0;
    });
  }

  deselectItem(item) {
    this.value = this.value.filter(i => i !== item);
  }
}
