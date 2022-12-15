import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Detail from '.';
import Person from '../../service/model';

const person: Person = {
    id: 1,
    name: 'john',
    img: 'jj',
    title: 'jjj',
    biography: 'lll'
}

test('demo component test', () => {
    render(<Detail person={person}/>);
    const linkElement = screen.getByText(/john/i);
    expect(linkElement).toBeInTheDocument();
});