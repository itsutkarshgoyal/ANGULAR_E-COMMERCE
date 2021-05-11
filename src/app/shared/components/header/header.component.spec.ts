import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateService, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { Router} from "@angular/router";
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent],
      imports: [HttpClientModule,BrowserAnimationsModule, ToastrModule.forRoot(),TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
      })],
      providers: [
        { provide: Router, useValue: mockRouter}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login page on login click', () => {
    component.onLoginClick();
    expect(mockRouter.navigate).toHaveBeenCalledWith (["login"]);
  });

  it('should navigate to login page on logout click', () => {
    component.onLogoutClick();
    expect(mockRouter.navigate).toHaveBeenCalledWith (["login"]);
  });

  it('should  have navbar defined ', () => {
    const navbar = fixture.debugElement.query(By.css('.navbar-nav'));
    expect(navbar.nativeElement).toBeDefined();
  });

  it('should  have rendered language selection dropdown with length 2', () => {
    const languageDropdown = fixture.debugElement.query(By.css('#prefered-language'));
    expect(languageDropdown.nativeElement.length).toBe(2);
  });
});
