import React from "react";
import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe ('<TodoItem />', () => {
    const sampleTodo = {
        id : 1,
        text : 'TDD 배우기',
        done : false
    };
    const setup = (props = {}) =>{
        const intialProps = {todo: sampleTodo};
        const utils = render(<TodoItem {...intialProps} {...props} />);
        const { getByText } = utils;
        const todo = props.todo || intialProps.todo;
        const button = getByText('삭제');
        const span = getByText(todo.text);
        return {...utils, span, button};
    }
    it('has span and button', ()=>{
        const {span, button} = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });
})