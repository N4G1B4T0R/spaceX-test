import { render, fireEvent } from '@testing-library/react';
import { AppSelect } from '../app-select.tsx';
import { StatusList } from '../../../constants.ts';

describe('AppSelect component', () => {
  it('renders with correct options', () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText } = render(
      <AppSelect value={StatusList[0]} onChange={mockOnChange} />
    );
    const select = getByRole('combobox');

    expect(select).toBeInTheDocument();

    expect(getByText(StatusList[0])).toBeInTheDocument();
  });

  it('calls onChange callback with selected value', () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText } = render(
      <AppSelect value={StatusList[0]} onChange={mockOnChange} />
    );
    const select = getByRole('combobox');
    const selectedOption = StatusList[1];
    fireEvent.mouseDown(select);

    const option = getByText(selectedOption);
    fireEvent.click(option);

    expect(mockOnChange).toHaveBeenCalled();
  });
});
