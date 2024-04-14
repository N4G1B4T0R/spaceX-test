import { render, screen } from '@testing-library/react';
import { AppHeader } from '../app-header.tsx';

describe('AppFallback component', () => {
  it('Should render fallback', () => {
    render(<AppHeader />);
    expect(screen.getByText('SpaceX Launches')).toBeInTheDocument();
  });
});
