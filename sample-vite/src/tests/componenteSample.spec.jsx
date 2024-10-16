/**
 * @jest-environment jsdom
 */

import { Todo } from "../Todo.jsx";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

describe("Title Test", () => {
  it("タイトルがHello Jestであること", async () => {
    render(<Todo />);
    // 変更後のdata-testidを使用
    const title = await screen.findByTestId("page-title");
    expect(title).toHaveTextContent("Hello Jest");
  });
});
