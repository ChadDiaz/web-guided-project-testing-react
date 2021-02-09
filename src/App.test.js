import React from "react";
import { fireEvent, render, waitFor, wait } from "@testing-library/react";
import App from "./App";
import { fetchMissions as mockFetchMissions } from "./api/fetchMissions";
// mock the api so we don't make a call prep to be told what value to return
import { missionsFixture } from "./components/MissionsList.test";

jest.mock("./api/fetchMissions");
// console.log(mockFetchMissions);

test("App renders", () => {
  render(<App />);
});

test("App fetches and renders missions data", async () => {
  // tell the test system what we want the mission data to return
  mockFetchMissions.mockResolvedValueOnce({ data: missionsFixture });
  const { getByText, queryAllByTestId } = render(<App />);

  const button = getByText(/get data/i);

  fireEvent.click(button);
  getByText(/we are fetching data/i);

  await waitFor(() => expect(queryAllByTestId("mission")).toHaveLength(2));
});
