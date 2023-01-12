![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# User
## User properties and how to use
| Property|Description|
|-|-|
|variant|Change *type* and *style* of user element.|
|avatar|See further details on [Avatar](./?path=/docs/user--avatar-story)
|btn|See [Button](./?path=/docs/interactions--button-story).|
|joined|See see settings of [Interaction Icon Link](./?path=/docs/interactions--icon-link-variants)|
|label|Label text.|
|timestamp|See see settings of [Interaction Icon Link](./?path=/docs/interactions--icon-link-variants)|
|username|See see settings of [Interaction Icon Link](./?path=/docs/interactions--icon-link-variants)|


## Include User from the component library

```js
// index.tsx, index.js, index.jsx

import { User } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### User *recommended* example

```js

<User
  avatar={{
    alt: 'Alter Tag',
    buttonCallBack: () => {},
    imageCallBack: function noRefCheck() {},
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif'
  }}
  btn={{
    fCallBack: function noRefCheck() {},
    label: 'Follow'
  }}
  joined={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Joined'
  }}
  label="Display Name"
  location={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Location'
  }}
  timestamp={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Timestamp'
  }}
  username={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Username'
  }}
  variant="recommended"
/>

```

### User *small* example

```js

<User
  avatar={{
    alt: 'Alter Tag',
    buttonCallBack: () => {},
    imageCallBack: function noRefCheck() {},
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif'
  }}
  btn={{
    fCallBack: function noRefCheck() {},
    label: 'Follow'
  }}
  joined={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Joined'
  }}
  label="Display Name"
  location={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Location'
  }}
  timestamp={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Timestamp'
  }}
  username={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Username'
  }}
  variant="small"
/>

```