import React from 'react';
import { render } from '@testing-library/react';
import MissionsList from './MissionsList';

test("MissionsList render", () => {
  render(<MissionsList missions={[]} error="" />);
});

test("MissionsList shows data when rerendered with new submission data", () => {
  const { queryAllByTestId } = render(<MissionsList missions={[]} error="" />);

  expect(queryAllByTestId("mission")).toStrictEqual([1]);
  expect(queryAllByTestId("mission")).toHaveLength(0);
});