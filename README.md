<br>

<div align="center">
  <img src="https://i.imgur.com/p5oXNx0.gif" alt="heart-switch Demo">
</div>

<br>

<h1 align="center">heart-switch</h1>
<h3 align="center">A heart-shaped toggle switch component for <a href="https://reactjs.org">React</a>. Inspired by Tore Bernhoft's <a href="https://dribbble.com/shots/8306407-I-heart-toggle">I heart toggle</a> Dribbble shot and Aaron Iker's <a href="https://codepen.io/aaroniker/full/PowbEKp">Codepen</a>.</h3>

<br>

<p align="center">
  <a href="https://github.com/anatoliygatt/heart-switch/actions?query=workflow%3ACI">
    <img src="https://img.shields.io/github/actions/workflow/status/anatoliygatt/heart-switch/ci.yml?branch=master&style=for-the-badge&logo=github&label=CI&labelColor=000000" alt="Github CI Workflow Status">
  </a>
  <a href="https://www.npmjs.com/package/@anatoliygatt/heart-switch">
    <img src="https://img.shields.io/npm/v/@anatoliygatt/heart-switch.svg?style=for-the-badge&logo=npm&labelColor=000000" alt="NPM Version">
  </a>
  <a href="https://github.com/anatoliygatt/heart-switch/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/anatoliygatt/heart-switch.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=ffffff&labelColor=000000" alt="License">
  </a>
</p>

<br>

## 📖 Table of Contents

- [🚀 Getting Started](#-getting-started)
  - [⚡️ Quick Start](#%EF%B8%8F-quick-start)
  - [💻 Live Demo](#-live-demo)
- [⚙️ Configuration](#%EF%B8%8F-configuration)
- [♿️ Accessibility](#%EF%B8%8F-accessibility)
- [👨🏼‍⚖️ License](#%EF%B8%8F-license)

## 🚀 Getting Started

### ⚡️ Quick Start

```shell
npm install @anatoliygatt/heart-switch @emotion/react @emotion/styled
```

```jsx
import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';

function Example() {
  const [checked, setChecked] = useState(false);
  return (
    <HeartSwitch
      size="lg"
      inactiveTrackFillColor="#cffafe"
      inactiveTrackStrokeColor="#22d3ee"
      activeTrackFillColor="#06b6d4"
      activeTrackStrokeColor="#0891b2"
      inactiveThumbColor="#ecfeff"
      activeThumbColor="#ecfeff"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );
}
```

### 💻 Live Demo

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-anatoliygatt-heart-switch-cds5p)

## ⚙️ Configuration

`HeartSwitch` supports the following props:

| Prop                     | Type   | Default value           | Description                                                                                                                                 |
| ------------------------ | ------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| size                     | string | `sm`                    | The size of the toggle switch. There are 3 available sizes:<ul><li>`sm` — 36x25px</li><li>`md` — 54x37.5px</li><li>`lg` — 72x50px</li></ul> |
| inactiveTrackFillColor   | string | `#ffffff`               | The fill color of the track when the toggle switch is in an inactive/off state.                                                             |
| inactiveTrackStrokeColor | string | `#d1d1d1`               | The stroke color of the track when the toggle switch is in an inactive/off state.                                                           |
| activeTrackFillColor     | string | `#ff708f`               | The fill color of the track when the toggle switch is in an active/on state.                                                                |
| activeTrackStrokeColor   | string | `#ff4e74`               | The stroke color of the track when the toggle switch is in an active/on state.                                                              |
| disabledTrackFillColor   | string | `#f2f2f2`               | The fill color of the track when the toggle switch is in a disabled state.                                                                  |
| disabledTrackStrokeColor | string | `#d1d1d1`               | The stroke color of the track when the toggle switch is in a disabled state.                                                                |
| invalidTrackFillColor    | string | `#ffffff`               | The fill color of the track when the toggle switch is in an invalid state.                                                                  |
| invalidTrackStrokeColor  | string | `#d1d1d1`               | The stroke color of the track when the toggle switch is in an invalid state.                                                                |
| inactiveThumbColor       | string | `#ffffff`               | The color of the thumb when the toggle switch is in an inactive/off state.                                                                  |
| activeThumbColor         | string | `#ffffff`               | The color of the thumb when the toggle switch is in an active/on state.                                                                     |
| disabledThumbColor       | string | `#ffffff`               | The color of the thumb when the toggle switch is in a disabled state.                                                                       |
| invalidThumbColor        | string | `#ffffff`               | The color of the thumb when the toggle switch is in an invalid state.                                                                       |
| thumbShadowColor         | string | `rgb(23 23 23 / 0.25)`  | The color of the thumb's shadow.                                                                                                            |
| thumbFocusRingColor      | string | `rgb(59 130 246 / 0.5)` | The color of the thumb's focus ring.                                                                                                        |

The majority of the native `<input type="checkbox" />` attributes are also supported; namely, `autoFocus`, `checked`, `defaultChecked`, `disabled`, `form`, `name`, `required`, `value`, `id`, `title`, `tabIndex`, `aria-disabled`, `aria-label`, `aria-describedby`, `aria-labelledby`, `onBlur`, `onChange`, `onFocus` and `onInvalid`.

`HeartSwitch` also supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). If `ref` is passed, it will be forwarded to the underlying `<input type="checkbox" />` element. It can be especially useful when we want to use `HeartSwitch` as an [uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html).

## ♿️ Accessibility

In order to comply with the web accessibility standards, we must make use of an `aria-label` or `aria-labelledby` attribute, like so:

```jsx
function AccessibleExample() {
  return <HeartSwitch aria-label="Accept Terms and Conditions" />;
}
```

Also, it is recommended to use an `aria-disabled` instead of a `disabled` attribute to make `HeartSwitch` immutable but focusable, like so:

```jsx
function AccessibleAndDisabledExample() {
  return (
    <HeartSwitch
      aria-label="Accept Terms and Conditions"
      aria-disabled="true"
    />
  );
}
```

## 👨🏼‍⚖️ License

[MIT](https://github.com/anatoliygatt/heart-switch/blob/master/LICENSE)
