import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Keyframes } from '@emotion/react';
import type { Size, OwnProps } from './HeartSwitch';

export const TOGGLE_ANIMATION_DURATION = 350;

function sizeToScale(size: Size): number {
  switch (size) {
    case 'sm':
      return 1;
    case 'md':
      return 1.5;
    case 'lg':
      return 2;
  }
}

const check = (size: Size): Keyframes => keyframes`
  0% {
    transform: rotate(30deg);
  }

  25% {
    transform: rotate(30deg) translateX(${
      4.5 * sizeToScale(size)
    }px) scaleX(1.1);
  }

  50% {
    transform: rotate(30deg) translateX(${9 * sizeToScale(size)}px);
  }

  100% {
    transform: rotate(-30deg) translateX(${
      13.5 * sizeToScale(size)
    }px) translateY(${8 * sizeToScale(size)}px);
  }
`;

const uncheck = (size: Size): Keyframes => keyframes`
  0% {
    transform: rotate(-30deg) translateX(${
      13.5 * sizeToScale(size)
    }px) translateY(${8 * sizeToScale(size)}px);
  }

  50% {
    transform: rotate(30deg) translateX(${9 * sizeToScale(size)}px);
  }

  75% {
    transform: rotate(30deg) translateX(${
      4.5 * sizeToScale(size)
    }px) scaleX(1.1);
  }

  100% {
    transform: rotate(30deg);
  }
`;

export const StyledHeartSwitch = styled.label<Required<OwnProps>>`
  position: relative;
  display: block;
  cursor: pointer;

  input {
    position: absolute;
    top: ${(props) => 1 * sizeToScale(props.size)}px;
    left: ${(props) => 1 * sizeToScale(props.size)}px;
    transition: border-width 50ms,
      background-color ${TOGGLE_ANIMATION_DURATION}ms;
    appearance: none;
    margin: 0;
    box-shadow: 0 0 ${(props) => 2 * sizeToScale(props.size)}px
      ${(props) => 1 * sizeToScale(props.size)}px
      ${(props) => props.thumbShadowColor};
    outline: none;
    border: 0 solid ${(props) => props.thumbFocusRingColor};
    border-radius: 50%;
    width: ${(props) => 18 * sizeToScale(props.size)}px;
    height: ${(props) => 18 * sizeToScale(props.size)}px;
    background-color: ${(props) => props.inactiveThumbColor};
    pointer-events: none;

    & + svg {
      display: block;
      transition: fill ${TOGGLE_ANIMATION_DURATION}ms,
        stroke ${TOGGLE_ANIMATION_DURATION}ms;
      width: ${(props) => 36 * sizeToScale(props.size)}px;
      height: ${(props) => 25 * sizeToScale(props.size)}px;
      fill: ${(props) => props.inactiveTrackFillColor};
      stroke: ${(props) => props.inactiveTrackStrokeColor};
      stroke-linejoin: round;
    }

    &:checked {
      animation-name: ${(props) => check(props.size)};
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      background-color: ${(props) => props.activeThumbColor};

      & + svg {
        fill: ${(props) => props.activeTrackFillColor};
        stroke: ${(props) => props.activeTrackStrokeColor};
      }
    }

    &:not(:checked) {
      animation-name: ${(props) => uncheck(props.size)};
      animation-timing-function: linear;
      animation-fill-mode: backwards;
    }

    &:focus {
      border-width: ${(props) => 1 * sizeToScale(props.size)}px;
    }

    &:focus:not(:focus-visible) {
      border-width: 0;
    }

    &:focus-visible {
      border-width: ${(props) => 1 * sizeToScale(props.size)}px;
    }

    &:invalid {
      background-color: ${(props) => props.invalidThumbColor};

      & + svg {
        fill: ${(props) => props.invalidTrackFillColor};
        stroke: ${(props) => props.invalidTrackStrokeColor};
      }
    }
  }

  &[data-disabled='true'] {
    cursor: default;

    input {
      background-color: ${(props) => props.disabledThumbColor};

      & + svg {
        fill: ${(props) => props.disabledTrackFillColor};
        stroke: ${(props) => props.disabledTrackStrokeColor};
      }
    }
  }
`;
