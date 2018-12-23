import { GithubProjectsPipe } from './github-projects.pipe';

describe('GithubProjectsPipe', () => {
  it('create an instance', () => {
    const pipe = new GithubProjectsPipe();
    expect(pipe).toBeTruthy();
  });
});
