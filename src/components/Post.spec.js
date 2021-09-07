import React from "react";
import configureStore from 'redux-mock-store'
import { render, screen } from "@testing-library/react";
import Post from "./Post";
import { Provider } from "react-redux";

const initialState = {
  comments: {
    posts: {}
  }
}
const mockStore = configureStore()
const store = mockStore(initialState)
const Component = (props) => <Provider store={store}><Post {...props} /></Provider>;

const queryPost = () => screen.queryByTestId("post");
const postProp = {
  id: 1,
  title: 'this is a post title',
  body: 'this is a post body'
}

describe("Error", () => {
  it("should render", () => {
    render(Component({ post: postProp }));
    expect(queryPost()).toBeTruthy();
  });
});
