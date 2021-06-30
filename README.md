# ez-timer

[![npm](https://img.shields.io/npm/v/ez-timer?style=flat-square)](https://npm.im/ez-timer)
![dependencies](https://img.shields.io/librariesio/release/npm/ez-timer?style=flat-square)
![downloads](https://img.shields.io/npm/dt/ez-timer?style=flat-square)
[![license](https://img.shields.io/:license-MIT-blue?style=flat-square)](https://mvr.mit-license.org)

Get better accuracy on every tick compared to setInterval() method.

## Installation

npm:

```shell
npm i ez-timer --save
```

## Example Usage

```jsx
import { Timer } from 'ez-timer';

const timer1 = new Timer(() => console.log('tick'), 1000);
const timer2 = new Timer();

timer1.start(); // start timer
timer1.stop(); // stop timer
timer2.start(10000, () => console.log('complete')); // run for 10 seconds
```

## Usage

### `timer = new Timer(callback, interval, errorCallback)`

- Optionally set the callback function that will be trigged on every interval.
- Optionally set the refresh interval in ms.
- Optionally set the error callback function that will be trigged on error happened.

### `timer.start(duration, callback)`

- Starts timer running for a duration specified in ms.
- Optionally set callback function that will be trigged on the timer end.

### `timer.stop()`

- Stops timer.
