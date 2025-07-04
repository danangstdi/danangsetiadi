// __tests__/index.test.js
import Header from '@/components/layouts/Header';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
     render(<Header />);
     const heading = screen.getByRole('heading', 
                      { name: /welcome to next\.js!/i });
     expect(heading).toBeInTheDocument();
  });
});
