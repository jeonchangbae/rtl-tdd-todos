import React from 'react';
import { fireEvent, render } from '@testing-library/react'; //react-testing-library
import TodoForm from './todoForm';

describe('<TodoForm />', ()=>{
    it('has input and a button', () =>{
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText("할 일을 입력하세요"); //input 있는지 없는지
        getByText('등록'); //button이 있는지 없는지
    })
    it('change input', ()=>{
        const {getByPlaceholderText} = render(<TodoForm />);
        const input = getByPlaceholderText("할 일을 입력하세요");
        fireEvent.change(input, {target : {value : 'TDD 배우기'}});
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    })
    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn();
        const { getByText, getByPlaceholderText } = render(<TodoForm onInsert={onInsert}/>);
        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');
        fireEvent.change(input,{target:{value: 'TDD 배우기'}});
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value','');
    })
})
