import { useState as useStateMock } from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme, withMarkup } from 'utils/tests/helpers';

import Pagination from '.';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<Pagination />', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
  });

  it('should render the Pagination result', () => {
    renderWithTheme(
      <Pagination
        currentPage={1}
        elementsPerPage={4}
        lastPage={1}
        onPageChange={setState}
        totalCountOfElements={4}
      />,
    );
    const getByTextWithMarkup = withMarkup(screen.getByText);
    getByTextWithMarkup('1 - 4 de 4');
  });

  it('should render the Pagination List with "1 2 3 ... 5" when 1 is the current value', () => {
    renderWithTheme(
      <Pagination
        currentPage={1}
        elementsPerPage={4}
        lastPage={5}
        onPageChange={setState}
        totalCountOfElements={4}
      />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(4);
    expect(buttons[0].textContent).toMatchInlineSnapshot(`"1"`);
    expect(buttons[1].textContent).toMatchInlineSnapshot(`"2"`);
    expect(buttons[2].textContent).toMatchInlineSnapshot(`"3"`);
    expect(screen.getAllByText('...')).toHaveLength(1);
    expect(buttons[3].textContent).toMatchInlineSnapshot(`"5"`);
  });

  it('should render the Pagination List with "1 2 3 4 5" when 3 is the current value', () => {
    renderWithTheme(
      <Pagination
        currentPage={3}
        elementsPerPage={4}
        lastPage={5}
        onPageChange={setState}
        totalCountOfElements={4}
      />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(5);
    expect(buttons[0].textContent).toMatchInlineSnapshot(`"1"`);
    expect(buttons[1].textContent).toMatchInlineSnapshot(`"2"`);
    expect(buttons[2].textContent).toMatchInlineSnapshot(`"3"`);
    expect(buttons[3].textContent).toMatchInlineSnapshot(`"4"`);
    expect(buttons[4].textContent).toMatchInlineSnapshot(`"5"`);
  });

  it('should render the Pagination List with "1 ... 3 4 5" when 5 is the current value', () => {
    renderWithTheme(
      <Pagination
        currentPage={5}
        elementsPerPage={4}
        lastPage={5}
        onPageChange={setState}
        totalCountOfElements={4}
      />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(4);
    expect(buttons[0].textContent).toMatchInlineSnapshot(`"1"`);
    expect(screen.getAllByText('...')).toHaveLength(1);
    expect(buttons[1].textContent).toMatchInlineSnapshot(`"3"`);
    expect(buttons[2].textContent).toMatchInlineSnapshot(`"4"`);
    expect(buttons[3].textContent).toMatchInlineSnapshot(`"5"`);
  });
  it('should render the Pagination List with "1 ... 3 4 5 6 7 ... 10" when 5 is the current value', () => {
    renderWithTheme(
      <Pagination
        currentPage={5}
        elementsPerPage={4}
        lastPage={10}
        onPageChange={setState}
        totalCountOfElements={4}
      />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(7);
    expect(screen.getAllByText('...')).toHaveLength(2);
    expect(buttons[0].textContent).toMatchInlineSnapshot(`"1"`);
    expect(buttons[1].textContent).toMatchInlineSnapshot(`"3"`);
    expect(buttons[2].textContent).toMatchInlineSnapshot(`"4"`);
    expect(buttons[3].textContent).toMatchInlineSnapshot(`"5"`);
    expect(buttons[4].textContent).toMatchInlineSnapshot(`"6"`);
    expect(buttons[5].textContent).toMatchInlineSnapshot(`"7"`);
    expect(buttons[6].textContent).toMatchInlineSnapshot(`"10"`);
  });
});
