import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Todo } from '../Todo';
import { supabase } from '../supabase';

// Supabaseのモック
jest.mock('../supabase', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
  }
}));

describe('Todo Component Tests', () => {
  beforeEach(() => {
    // データ取得のモック
    supabase.from().select().order.mockResolvedValue({
      data: [
        { id: 1, textInputDetail: '既存の記録', textInputTime: 2 }
      ],
      error: null
    });
  });

  it('フォームに入力して登録すると記録が1つ増える', async () => {
    await act(async () => {
      render(<Todo />);
    });

    await waitFor(() => {
      expect(screen.queryByText('loading...')).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByText(/【記録\d+】/)).toHaveLength(1);
    });

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('内容'), { target: { value: '新しい学習' } });
      fireEvent.change(screen.getByPlaceholderText('時間'), { target: { value: '3' } });
    });

    // データ挿入のモック
    supabase.from().insert.mockResolvedValue({ error: null });

    // 更新後のデータ取得のモック
    supabase.from().select().order.mockResolvedValue({
      data: [
        { id: 1, textInputDetail: '既存の記録', textInputTime: 2 },
        { id: 2, textInputDetail: '新しい学習', textInputTime: 3 }
      ],
      error: null
    });

    await act(async () => {
      fireEvent.click(screen.getByText('登録'));
    });

    await waitFor(() => {
      expect(screen.getAllByText(/【記録\d+】/)).toHaveLength(2);
    });
  });

  it('削除ボタンを押すと学習記録が削除される', async () => {
    await act(async () => {
      render(<Todo />);
    });

    await waitFor(() => {
      expect(screen.queryByText('loading...')).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByText(/【記録\d+】/)).toHaveLength(1);
    });

    // 削除のモック
    supabase.from().delete().eq.mockResolvedValue({ error: null });

    // 更新後のデータ取得のモック（空の配列を返す）
    supabase.from().select().order.mockResolvedValue({
      data: [],
      error: null
    });

    await act(async () => {
      fireEvent.click(screen.getByText('削除'));
    });

    await waitFor(() => {
      expect(screen.queryAllByText(/【記録\d+】/)).toHaveLength(0);
    });
  });

  it('入力をしないで登録を押すとエラーが表示される', async () => {
    await act(async () => {
      render(<Todo />);
    });

    await waitFor(() => {
      expect(screen.queryByText('loading...')).not.toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.click(screen.getByText('登録'));
    });

    await waitFor(() => {
      expect(screen.getByText('入力されていない項目があります')).toBeInTheDocument();
    });
  });
});
