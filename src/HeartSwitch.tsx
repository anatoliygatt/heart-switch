import * as React from 'react';
import { useAnimationDuration } from './hooks/useAnimationDuration';
import { TOGGLE_ANIMATION_DURATION, StyledHeartSwitch } from './style';

export type Size = 'sm' | 'md' | 'lg';

export interface OwnProps {
  size?: Size;
  inactiveTrackFillColor?: string;
  inactiveTrackStrokeColor?: string;
  activeTrackFillColor?: string;
  activeTrackStrokeColor?: string;
  disabledTrackFillColor?: string;
  disabledTrackStrokeColor?: string;
  invalidTrackFillColor?: string;
  invalidTrackStrokeColor?: string;
  inactiveThumbColor?: string;
  activeThumbColor?: string;
  disabledThumbColor?: string;
  invalidThumbColor?: string;
  thumbShadowColor?: string;
  thumbFocusRingColor?: string;
}

export type InputProps = Pick<
  JSX.IntrinsicElements['input'],
  | 'autoFocus'
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'form'
  | 'name'
  | 'required'
  | 'value'
  | 'id'
  | 'title'
  | 'tabIndex'
  | 'aria-disabled'
  | 'aria-label'
  | 'aria-describedby'
  | 'aria-labelledby'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'onInvalid'
>;

export type Props = OwnProps & InputProps;

export const HeartSwitch = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      size = 'sm',
      inactiveTrackFillColor = '#ffffff',
      inactiveTrackStrokeColor = '#d1d1d1',
      activeTrackFillColor = '#ff708f',
      activeTrackStrokeColor = '#ff4e74',
      disabledTrackFillColor = '#f2f2f2',
      disabledTrackStrokeColor = '#d1d1d1',
      invalidTrackFillColor = '#ffffff',
      invalidTrackStrokeColor = '#d1d1d1',
      inactiveThumbColor = '#ffffff',
      activeThumbColor = '#ffffff',
      disabledThumbColor = '#ffffff',
      invalidThumbColor = '#ffffff',
      thumbShadowColor = 'rgb(23 23 23 / 0.25)',
      thumbFocusRingColor = 'rgb(59 130 246 / 0.5)',
      title,
      ...inputProps
    },
    ref
  ) => {
    const animationDuration = useAnimationDuration(
      size,
      TOGGLE_ANIMATION_DURATION
    );

    const labelProps: Pick<
      JSX.IntrinsicElements['label'],
      'title' | 'onClick'
    > & {
      'data-disabled': boolean;
    } = {
      title,
      'data-disabled':
        inputProps.disabled || inputProps['aria-disabled'] === 'true',
    };

    if (!inputProps.disabled && inputProps['aria-disabled'] === 'true') {
      labelProps.onClick = (event) => {
        event.preventDefault();
      };
    }

    return (
      <StyledHeartSwitch
        size={size}
        inactiveTrackFillColor={inactiveTrackFillColor}
        inactiveTrackStrokeColor={inactiveTrackStrokeColor}
        activeTrackFillColor={activeTrackFillColor}
        activeTrackStrokeColor={activeTrackStrokeColor}
        disabledTrackFillColor={disabledTrackFillColor}
        disabledTrackStrokeColor={disabledTrackStrokeColor}
        invalidTrackFillColor={invalidTrackFillColor}
        invalidTrackStrokeColor={invalidTrackStrokeColor}
        inactiveThumbColor={inactiveThumbColor}
        activeThumbColor={activeThumbColor}
        disabledThumbColor={disabledThumbColor}
        invalidThumbColor={invalidThumbColor}
        thumbShadowColor={thumbShadowColor}
        thumbFocusRingColor={thumbFocusRingColor}
        data-testid="heart-switch"
        {...labelProps}
      >
        <input
          type="checkbox"
          role="switch"
          style={{ animationDuration: `${animationDuration}ms` }}
          {...inputProps}
          ref={ref}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33 23"
          aria-hidden="true"
        >
          <path d="M23.5,0.5 C28.4705627,0.5 32.5,4.52943725 32.5,9.5 C32.5,16.9484448 21.46672,22.5 16.5,22.5 C11.53328,22.5 0.5,16.9484448 0.5,9.5 C0.5,4.52952206 4.52943725,0.5 9.5,0.5 C12.3277083,0.5 14.8508336,1.80407476 16.5007741,3.84362242 C18.1491664,1.80407476 20.6722917,0.5 23.5,0.5 Z" />
        </svg>
      </StyledHeartSwitch>
    );
  }
);

HeartSwitch.displayName = 'HeartSwitch';
