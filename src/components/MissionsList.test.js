import React from "react";
import { render } from "@testing-library/react";
import MissionsList from "./MissionsList";

const missionsFixture = [
  { mission_name: "mission one", mission_id: "mission_one" },
  { mission_name: "mission two", mission_id: "mission_two" },
];

test("MissionsList renders properly", () => {
  render(<MissionsList missions={[]} error="" />);
});

test("MissionsList shows data when re-rendered with new submission data", () => {
  const { queryAllByTestId, rerender } = render(
    <MissionsList missions={[]} error="" />
  );

  expect(queryAllByTestId("mission")).toStrictEqual([]);
  expect(queryAllByTestId("mission")).toHaveLength(0);

  rerender(<MissionsList error="" missions={missionsFixture} />);

    expect(queryAllByTestId("mission")).toHaveLength(2);
    // expect(queryAllByTestId("mission")).toStrictEqual(missionsFixture);
});
