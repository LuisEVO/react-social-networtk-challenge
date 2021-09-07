import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

const Component = () => <Loading />;

const queryLoading = () => screen.queryByTestId("loading");

describe("Loading", () => {
  it("should render", () => {
    render(Component());
    expect(queryLoading()).toBeTruthy();
  });
});
