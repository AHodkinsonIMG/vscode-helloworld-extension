import { expect } from 'chai';
import {printToConsole} from '../src/output'; 

describe("Output test", () => {
  it("should provide a print to console function", () => {
    expect(printToConsole).to.be.instanceOf(Function);
  });
});