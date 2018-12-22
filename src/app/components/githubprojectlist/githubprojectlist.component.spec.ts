import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprojectlistComponent } from './githubprojectlist.component';

describe('GithubprojectlistComponent', () => {
  let component: GithubprojectlistComponent;
  let fixture: ComponentFixture<GithubprojectlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubprojectlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubprojectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
