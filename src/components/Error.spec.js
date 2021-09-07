import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Error from "./Error";

const Component = (props) => <Error {...props} />;

const queryError = () => screen.queryByTestId("error");
const getErrorButton = () => screen.getByTestId("error-callback");
const tryAgainFn = jest.fn();

describe("Error", () => {
  it("should render", () => {
    render(Component({ tryAgain: tryAgainFn }));
    expect(queryError()).toBeTruthy();
  });

  it("should display the label", () => {
    render(Component({ tryAgain: tryAgainFn }));
    expect(screen.getByText("An error occurred!:")).toBeTruthy();
  });

  it("should trigger the tryAgain callback", () => {
    render(Component({ tryAgain: tryAgainFn }));
    userEvent.click(getErrorButton());
    expect(tryAgainFn).toHaveBeenCalledTimes(1);
  });
});
