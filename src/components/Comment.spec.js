import React from "react";
import { render, screen } from "@testing-library/react";
import Comment from "./Comment";

const Component = (props) => <Comment {...props} />;

const queryError = () => screen.queryByTestId("comment");
const commentProp = {
  name: 'this is a comment name',
  body: 'this is a comment body',
  email: 'tester@test.com'
}

describe("Comment", () => {
  it("should render", () => {
    render(Component({ comment: commentProp }));
    expect(queryError()).toBeTruthy();
  });

  it("should display the label", () => {
    render(Component({ comment: commentProp }));
    expect(screen.getByText(commentProp.name)).toBeTruthy();
    expect(screen.getByText(commentProp.body)).toBeTruthy();
    expect(screen.getByText(commentProp.email)).toBeTruthy();
  });
});
