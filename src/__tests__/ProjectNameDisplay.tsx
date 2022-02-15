import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectNameDisplay } from '../ProjectNameDisplay';

describe('ProjectNameDisplay', () => {
  test("renders current project's name", () => {
    render(<ProjectNameDisplay />);
    expect(screen.getByTestId('project-name')).toHaveTextContent(
      'heart-switch'
    );
  });
});
