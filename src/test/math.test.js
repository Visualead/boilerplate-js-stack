/* global it, describe, before, after, beforeEach, afterEach */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import './spec-helper';
import Calculator from '../app/math';

chai.use(dirtyChai);

describe('Calculator add', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('sum 1 + 2 + 3 + 4 + 5 + 6', () => {
    const result = calc.add(1, 2, 3, 4, 5, 6);

    expect(result).to.equal(21);
  });

  it('multiply 1 * 2 * 3', () => {
    const result = calc.multiply(1, 2, 3);

    expect(result).to.equal(6);
  });

  it('pow 2 ^ 32', () => {
    const result = calc.pow(2, 32);

    expect(result).to.equal(4294967296);
  });
});

