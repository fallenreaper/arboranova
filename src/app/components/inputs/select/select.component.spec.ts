import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { MockLoader } from 'src/app/testing-classes/mock-loader';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let injector
  let translate: TranslateService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        // loader: { provide: TranslateLoader, useClass: MockLoader }
      })],
      declarations: [SelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    injector = getTestBed();
    translate = injector.get(TranslateService);
    translate.use('en');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
