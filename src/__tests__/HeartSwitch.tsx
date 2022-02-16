import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { HeartSwitch } from '../HeartSwitch';

jest.mock('../hooks/useAnimationDuration', () => {
  return {
    useAnimationDuration: jest.fn(() => 350),
  };
});

describe('HeartSwitch', () => {
  test('renders without crashing', () => {
    expect(() => {
      render(<HeartSwitch />);
    }).not.toThrowError();
  });

  test('renders into the document', () => {
    render(<HeartSwitch />);
    expect(screen.getByTestId('heart-switch')).toBeInTheDocument();
  });

  test('renders with the default size and colors', () => {
    render(<HeartSwitch />);
    expect(screen.getByTestId('heart-switch')).toMatchSnapshot();
  });

  test('renders with the size="md" and default colors', () => {
    render(<HeartSwitch size="md" />);
    expect(screen.getByTestId('heart-switch')).toMatchSnapshot();
  });

  test('renders with the size="lg" and custom colors', () => {
    render(
      <HeartSwitch
        size="lg"
        inactiveTrackFillColor="#cffafe"
        inactiveTrackStrokeColor="#22d3ee"
        activeTrackFillColor="#06b6d4"
        activeTrackStrokeColor="#0891b2"
        inactiveThumbColor="#ecfeff"
        activeThumbColor="#ecfeff"
      />
    );
    expect(screen.getByTestId('heart-switch')).toMatchSnapshot();
  });

  test('renders in a focused state when autoFocus=true', () => {
    const onFocus = jest.fn();
    // eslint-disable-next-line jsx-a11y/no-autofocus
    render(<HeartSwitch autoFocus={true} onFocus={onFocus} />);
    expect(screen.getByRole('switch')).toHaveFocus();
    expect(onFocus).toHaveBeenCalled();
  });

  test('checks/unchecks on click when uncontrolled', () => {
    render(<HeartSwitch />);
    expect(screen.getByRole('switch')).not.toBeChecked();
    userEvent.click(screen.getByTestId('heart-switch'));
    expect(screen.getByRole('switch')).toBeChecked();
    userEvent.click(screen.getByTestId('heart-switch'));
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  test('checks/unchecks on click when controlled', () => {
    function ControlledHeartSwitch() {
      const [checked, setChecked] = React.useState<boolean>(false);
      return (
        <HeartSwitch
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
          }}
        />
      );
    }

    render(<ControlledHeartSwitch />);
    expect(screen.getByRole('switch')).not.toBeChecked();
    userEvent.click(screen.getByTestId('heart-switch'));
    expect(screen.getByRole('switch')).toBeChecked();
    userEvent.click(screen.getByTestId('heart-switch'));
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  test('renders in a checked state when defaultChecked=true', () => {
    render(<HeartSwitch defaultChecked />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  test('renders in a disabled state when disabled=true', () => {
    render(<HeartSwitch disabled />);
    expect(screen.getByTestId('heart-switch')).toHaveAttribute(
      'data-disabled',
      'true'
    );
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  test('renders with a form attribute when form="complianceForm"', () => {
    render(<HeartSwitch form="complianceForm" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'form',
      'complianceForm'
    );
  });

  test('renders with a name attribute when name="acceptTermsAndConditions"', () => {
    render(<HeartSwitch name="acceptTermsAndConditions" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'name',
      'acceptTermsAndConditions'
    );
  });

  test('responds to a change in validity state when required=true', () => {
    const onInvalid = jest.fn();

    render(<HeartSwitch required onInvalid={onInvalid} />);

    expect(screen.getByRole('switch')).toBeRequired();
    expect(screen.getByRole('switch')).toBeInvalid();
    expect(onInvalid).toHaveBeenCalled();

    userEvent.click(screen.getByTestId('heart-switch'));

    expect(screen.getByRole('switch')).toBeValid();
  });

  test('renders with a value attribute when value="true"', () => {
    render(<HeartSwitch value="true" />);
    expect(screen.getByRole<HTMLInputElement>('switch').value).toBe('true');
  });

  test('renders with an id attribute when id="heart-switch"', () => {
    render(<HeartSwitch id="heart-switch" />);
    expect(screen.getByRole('switch')).toHaveAttribute('id', 'heart-switch');
  });

  test('renders with a title attribute when title="Accept Terms and Conditions"', () => {
    render(<HeartSwitch title="Accept Terms and Conditions" />);
    expect(screen.getByTestId('heart-switch')).toHaveAttribute(
      'title',
      'Accept Terms and Conditions'
    );
  });

  test('renders in an unfocusable state when tabIndex=-1', () => {
    const onFocus = jest.fn();

    render(<HeartSwitch tabIndex={-1} onFocus={onFocus} />);

    expect(screen.getByRole('switch')).toHaveAttribute('tabIndex', '-1');
    expect(screen.getByRole('switch')).not.toHaveFocus();
    expect(onFocus).not.toHaveBeenCalled();

    userEvent.tab();

    expect(screen.getByRole('switch')).not.toHaveFocus();
    expect(onFocus).not.toHaveBeenCalled();
  });

  test('renders in a disabled but focusable state when aria-disabled="true"', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();

    render(
      <HeartSwitch aria-disabled="true" onBlur={onBlur} onFocus={onFocus} />
    );

    expect(screen.getByTestId('heart-switch')).toHaveAttribute(
      'data-disabled',
      'true'
    );
    expect(screen.getByRole('switch')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByRole('switch')).not.toBeChecked();
    expect(screen.getByRole('switch')).not.toHaveFocus();
    expect(onBlur).not.toHaveBeenCalled();
    expect(onFocus).not.toHaveBeenCalled();

    userEvent.tab();

    expect(screen.getByRole('switch')).toHaveFocus();
    expect(onBlur).not.toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalled();

    userEvent.keyboard('{space/}');

    expect(screen.getByRole('switch')).not.toBeChecked();

    userEvent.tab();

    expect(screen.getByRole('switch')).not.toHaveFocus();
    expect(onBlur).toHaveBeenCalled();

    userEvent.click(screen.getByTestId('heart-switch'));

    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  test('renders with an aria-label attribute when aria-label="Accept Terms and Conditions"', () => {
    render(<HeartSwitch aria-label="Accept Terms and Conditions" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-label',
      'Accept Terms and Conditions'
    );
  });

  test('renders with an aria-describedby attribute when aria-describedby="termsAndConditionsDescription"', () => {
    render(<HeartSwitch aria-describedby="termsAndConditionsDescription" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-describedby',
      'termsAndConditionsDescription'
    );
  });

  test('renders with an aria-labelledby attribute when aria-labelledby="termsAndConditions"', () => {
    render(<HeartSwitch aria-labelledby="termsAndConditions" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-labelledby',
      'termsAndConditions'
    );
  });

  test('responds to a change in focused state when tabbing with the keyboard', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();

    render(<HeartSwitch onBlur={onBlur} onFocus={onFocus} />);

    expect(screen.getByRole('switch')).not.toHaveFocus();
    expect(onBlur).not.toHaveBeenCalled();
    expect(onFocus).not.toHaveBeenCalled();

    userEvent.tab();

    expect(screen.getByRole('switch')).toHaveFocus();
    expect(onBlur).not.toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalled();

    userEvent.tab();

    expect(screen.getByRole('switch')).not.toHaveFocus();
    expect(onBlur).toHaveBeenCalled();
  });

  test('integrates with a form', () => {
    render(
      <form data-testid="complianceForm">
        <input type="text" name="fullName" defaultValue="Anatoliy Gatt" />
        <HeartSwitch name="acceptTermsAndConditions" />
      </form>
    );

    expect(screen.getByTestId('complianceForm')).toHaveFormValues({
      fullName: 'Anatoliy Gatt',
      acceptTermsAndConditions: false,
    });

    userEvent.click(screen.getByTestId('heart-switch'));

    expect(screen.getByTestId('complianceForm')).toHaveFormValues({
      fullName: 'Anatoliy Gatt',
      acceptTermsAndConditions: true,
    });
  });

  test('complies with the web accessibility standards', async () => {
    const { container } = render(
      <HeartSwitch aria-label="Accept Terms and Conditions" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
