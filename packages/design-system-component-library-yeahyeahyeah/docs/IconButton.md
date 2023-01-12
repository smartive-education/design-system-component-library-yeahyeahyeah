![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)

## Icon-Link properties and how to use
| Property|Description|
|-|-|
|label|Label of the button. Not visible, but required in conjunction with accessibility.|
|Icon| Choose your Icon accordingly.|
|Variant|Choose *edit* if you need a edit mode button. Only in *edit* mode avaliable. See [Avatar](./?path=/docs/user--avatar-story "Avatar") |
|fCallBack|JS Callback Function|


## Include *IconButton* from the component library

```js
// index.tsx, index.js, index.jsx

import { IconButton } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```
## IconButton Types
### Default
```js
<IconButton
  fCallBack={function noRefCheck(){}}
  icon="logo"
  label="Label"
  variant="default"
/>
```

### Edit
```js
<IconButton
  fCallBack={function noRefCheck(){}}
  icon="logo"
  label="Label"
  variant="edit"
/>
```