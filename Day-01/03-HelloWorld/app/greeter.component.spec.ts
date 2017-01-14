import { GreeterComponent } from './greeter/greeter.component';
import { GreeterMessageComponent } from './greeter/greeterMessage.component';
import { FormsModule } from '@angular/forms';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('GreeterComponent', function () {
  let de: DebugElement;
  let comp: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ GreeterComponent, GreeterMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h3 = de.nativeElement;
    expect(h3.innerText).toMatch(/Greeter/i,
      'Greeter not found');
  });

  it('should greet the user', () => {
    fixture.detectChanges();
    var tb = fixture.debugElement.query(By.css('input[type="text"]'));
    tb.nativeElement.value = 'Magesh';

    var btn = fixture.debugElement.query(By.css('input[type="button"]'));
    btn.nativeElement.click();

  });
});
