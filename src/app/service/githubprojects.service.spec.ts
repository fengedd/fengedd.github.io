import { TestBed } from '@angular/core/testing';

import { GithubprojectsService } from './githubprojects.service';

describe('GithubprojectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubprojectsService = TestBed.get(GithubprojectsService);
    expect(service).toBeTruthy();
  });
});
