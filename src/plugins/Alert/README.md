# Glow Alert

Alert plugin to use with tailwindcss.

Borowed from [vt-notifications](https://github.com/sansil/vt-notifications).

## Register alert plugin
- Copy Alert folder to plugin folder
- Register Alert as a Vue plugin.

```js
// src/main.js

import Vue from "vue";
import Alert from './plugins/Alert';

Vue.use(Alert);
```

## Usage
Basic example
```html
<!-- App.vue -->
<template>
    <div id="app">
        <Alert />
    </div>
</template>
```
```js
// in any .vue file
this.$alert('Your alert was successfully created!');

// You can also pass html tag
this.$alert(`<p class="text-green-500">Your alert was successfully created!</p>`);
```
Advance exalmple
```html
<!-- App.vue -->
<template>
    <div id="app">
        <Alert position="top" group="settings" />
    </div>
</template>
```
```js
// in any .vue file
this.$alert({
    title: 'Success',
    text: 'Your alert was successfully created!',
    group: 'settings' // required if group exist at alert props
});
```

### Component props

```html
<alert position="bottom-right" group="login"></alert>
```
NOTE: All props are optional

Current avalilable props

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>position</td>
        <td>String</td>
        <td>'top-center'</td>
        <td>Where the alert will pop out</td>
    </tr>
    <tr>
        <td>group</td>
        <td>String</td>
        <td>null</td>
        <td>Name of the alert</td>
    </tr>
</table>

### API

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>title</td>
        <td>String</td>
        <td>null</td>
        <td>The title of alert (html support)</td>
    </tr>
    <tr>
        <td>text</td>
        <td>String</td>
        <td>null</td>
        <td>Content of the alert (html support)</td>
    </tr>
    <tr>
        <td>group</td>
        <td>String</td>
        <td>null</td>
        <td>Name of the alert (Required if group props available)</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>Number</td>
        <td>3000</td>
        <td>Time (in ms) to keep the alert on screen (negative number will keep alert stay on screen forever or until closeButton clicked if any)</td>
    </tr>
    <tr>
        <td>type</td>
        <td>String</td>
        <td>null</td>
        <td>Type of alert. Possible options: 'success', 'info', 'warning', 'error', null</td>
    </tr>
    <tr>
        <td>closeButton</td>
        <td>Boolean</td>
        <td>false</td>
        <td>Show/hide the close button</td>
    </tr>
</table>