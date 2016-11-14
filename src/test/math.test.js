/* global it, describe, before, after */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import './spec_helper';
import Calculator from '../app/math';

chai.use(dirtyChai);

describe('Calculator add', () => {
  it('sum 1 + 2 + 3 + 4 + 5 + 6', () => {
    const calc = new Calculator();
    const result = calc.add(1, 2, 3, 4, 5, 6);

    expect(result).to.equal(21);
  });

  it('multiply 1 * 2 * 3', () => {
    const calc = new Calculator();
    const result = calc.multiply(1, 2, 3);

    expect(result).to.equal(6);
  });
});

