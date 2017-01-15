import * as assert from 'assert'

import {Animal} from "./sample";

describe("Sample", () => {
  it("should exist", () => {
    const fish = new Animal("Nemo")
    assert.equal('Nemo', fish.getName())
  })
})
