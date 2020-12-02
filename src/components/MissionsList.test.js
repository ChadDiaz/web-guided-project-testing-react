import React from 'react';
import { render } from '@testing-library/react';
import MissionsList from './MissionsList';

const missionsFixture = [
  {
    mission_name: "mission one",
    mission_id: "mission_one"
  }
];

test("MissionsList render", () => {
  render(<MissionsList missions={[]} error="" />);
});

test("MissionsList shows data when rerendered with new submission data", () => {
  const { queryAllByTestId, rerender } = render(<MissionsList missions={[]} error="" />);

  expect(queryAllByTestId("mission")).toStrictEqual([]);
  expect(queryAllByTestId("mission")).toHaveLength(0);

  rerender(<MissionsList error="" missions={[???]} />);
});