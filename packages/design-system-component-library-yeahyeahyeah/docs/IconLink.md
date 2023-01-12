# Icon Link

## **Icon-Link** properties and how to use

| Property  | Description                                                 |
| --------- | ----------------------------------------------------------- |
| label     | Label of the button.                                        |
| variant   | Button color _slate_, _violet_. See Color Guidelines below. |
| href      | HTML Link-Element.                                          |
| type      | Choose type accordingly.                                    |
| fCallback | JS callback function.                                       |
| Link      | NextJs Link-Element.                                        |

## Include IconLink from the component library

```js
// index.tsx, index.js, index.jsx

import { IconLink } from '@smartive-education/design-system-component-library-yeahyeahyeah';
```

## IconLink Variants

### Username

```js

<IconLink fCallBack={() => {}} href="#" label="Username" type="username" color="violet" />

```

### Timestamp

```js

<IconLink fCallBack={() => {}} href="#" label="Timestamp" type="timestamp" color="slate" />

```

### Location

```js

<IconLink fCallBack={() => {}} href="#" label="Location" type="location" color="slate" />

```

### Joined

```js

<IconLink fCallBack={() => {}} href="#" label="Joined" type="joined" color="slate" />

```

## Mumble **Color** Guidelines

**Consider the following color specifications when using a button:**

- Username: set color _violet_.
- Timestamp: set color to _slate_.
- Location: set color to _slate_.
- Joined: set color to _slate_.

<div style="text-align: center; background-color: #475569; color: white; margin-bottom: 4px; padding: 10px;">Slate</div>
<div style="text-align: center; background-color: #7C3AED; color: white; margin-bottom: 4px; padding: 10px;">Violet</div>
