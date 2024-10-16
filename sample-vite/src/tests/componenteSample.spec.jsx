import { Todo } from "../Todo.jsx";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

describe("Title Test", () => {
  it("タイトルがHello Jestであること", async () => { // テスト関数をasyncに
    render(<Todo />);
    // `findByTestId`は要素が見つかるまで待機します
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("Hello Jest");
  });
});
