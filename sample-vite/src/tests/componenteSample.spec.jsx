import { Todo } from "../Todo.jsx"; // 名前付きインポート
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

describe("Title Test", () => {
  it("タイトルがHello Jestであること", () => {
    // testId(title)を指定して取得
    render(<Todo />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("Hello Jest");
  });
});
