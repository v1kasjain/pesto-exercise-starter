import { flipArgs } from './flipArgs';
import { sqrt, power, round } from '../math-fns/mathFns';
describe('Flip the function result ', () => {
  it('should flips and calculate squreRoot given arguments', () => {
    const squreRoot = arg => arg.map((singleArgument) => sqrt(singleArgument));
    let flipped = flipArgs(squreRoot);
    expect(flipped(9, 4)).toEqual([2, 3]);
    expect(flipped(81, 4)).toEqual([2, 9]);

  });
});