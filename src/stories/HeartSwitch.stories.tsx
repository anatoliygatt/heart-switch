import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HeartSwitch } from '../HeartSwitch';

export default {
  title: 'HeartSwitch',
  component: HeartSwitch,
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true },
    a11y: { disable: true },
  },
} as ComponentMeta<typeof HeartSwitch>;

const Template: ComponentStory<typeof HeartSwitch> = (args) => (
  <HeartSwitch {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  size: 'lg',
  inactiveTrackFillColor: '#ffffff',
  inactiveTrackStrokeColor: '#d1d1d1',
  activeTrackFillColor: '#ff708f',
  activeTrackStrokeColor: '#ff4e74',
  disabledTrackFillColor: '#f2f2f2',
  disabledTrackStrokeColor: '#d1d1d1',
  invalidTrackFillColor: '#ffffff',
  invalidTrackStrokeColor: '#d1d1d1',
  inactiveThumbColor: '#ffffff',
  activeThumbColor: '#ffffff',
  disabledThumbColor: '#ffffff',
  invalidThumbColor: '#ffffff',
  thumbShadowColor: 'rgb(23 23 23 / 0.25)',
  thumbFocusRingColor: 'rgb(59 130 246 / 0.5)',
  autoFocus: false,
  defaultChecked: false,
  disabled: false,
  form: 'complianceForm',
  name: 'acceptTermsAndConditions',
  required: false,
  value: 'true',
  id: 'heart-switch',
  title: 'Accept Terms and Conditions',
  tabIndex: 0,
  'aria-disabled': 'false',
  'aria-label': 'Accept Terms and Conditions',
  onBlur: action('onBlur'),
  onChange: action('onChange'),
  onFocus: action('onFocus'),
  onInvalid: action('onInvalid'),
};
Playground.parameters = {
  controls: { disabled: false },
  actions: { disabled: false },
  a11y: { disable: false },
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'md',
  disabled: true,
};

export const Customized = Template.bind({});
Customized.args = {
  size: 'lg',
  inactiveTrackFillColor: '#cffafe',
  inactiveTrackStrokeColor: '#22d3ee',
  activeTrackFillColor: '#06b6d4',
  activeTrackStrokeColor: '#0891b2',
  inactiveThumbColor: '#ecfeff',
  activeThumbColor: '#ecfeff',
};
