import { getText } from "./test.reducer";

const testSelector = {
  getText: state => getText(state)
};

export { testSelector };
