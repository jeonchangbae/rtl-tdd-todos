import React from 'react';
import { render } from '@testing-library/react'; //react-testing-library
import TodoForm from './todoForm';

describe('<TodoForm />', ()=>{
    it('has input and a button', () =>{
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText('할 일을 입력하세요'); //input 있는지 없는지
        getByText('등록'); //button이 있는지 없는지
        
    })
})
