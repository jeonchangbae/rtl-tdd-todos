import { render } from '@testing-library/react';
import React from 'react';
import TodoList from './TodoList';

describe('<TodoList />',() =>{
    const sampleTodos = [
        {
            id : 1,
            text : 'TDD 배우기',
            done : true
        },
        {
            id : 2,
            text : 'react-testing-library 사용하기',
            done : true
        }
    ];
    it('render todos properly', () => {
        const { getByText } = render(<TodoList todos={sampleTodos}/>);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    })
})
