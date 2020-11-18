import { HeroesFilterPipe } from './heroes-filter.pipe';

describe('HeroesFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroesFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
