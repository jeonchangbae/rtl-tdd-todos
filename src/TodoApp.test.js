import React from 'react';
import {fireEvent, getByText, render} from '@testing-library/react'
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {
    it('renders TodoForm and TodoList', () => {
      const { getByText, getByTestId } = render(<TodoApp />);
      getByText('등록'); // TodoForm 존재유무 확인
      getByTestId('TodoList'); // TodoList 존재유무 확인
    });
  
    it('renders two defaults todos', () => {
      const { getByText } = render(<TodoApp />);
      getByText('TDD 배우기');
      getByText('react-testing-library 배우기');
    });
  
    it('creates new todo', () => {
      const { getByPlaceholderText, getByText } = render(<TodoApp />);
      // 이벤트를 발생시켜서 새 항목을 추가하면
      fireEvent.change(getByPlaceholderText('할 일을 입력하세요'), {
        target: {
          value: '새 항목 추가하기'
        }
      });
      fireEvent.click(getByText('등록'));
      // 해당 항목이 보여져야합니다.
      getByText('새 항목 추가하기');
    });
    
    it('toggles todo', () => {
        const { getByText } = render(<TodoApp />);
        const todoText = getByText('TDD 배우기');
        expect(todoText).toHaveStyle('text-decoration: line-through;');
        fireEvent.click(todoText);
        expect(todoText).not.toHaveStyle('text-decoration: line-through;');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through;');
    })

    it('remove todo', () => {
        const { getByText } = render(<TodoApp />);
        const todoText = getByText('TDD 배우기');
        const removeButton = todoText.nextSibling;
        fireEvent.click(removeButton);
        expect(todoText).not.toBeInTheDocument();
    })
  });