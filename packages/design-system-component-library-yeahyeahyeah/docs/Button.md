![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Button
## Button properties and how to use
| Property|Description|
|-|-|
|fCallback|JS callback function.|
|icon|Choose your icon accordingly. It is also possible to render a button without an icon. In this case, choose *none*.|
|label|Label of the button.|
|size|Default *small* is the default height, *large* has more height.|
|type|Choose one of the HTML native types.|
|variant|Button color *slate*, *violet* and *pink*. See Color Guidelines below.|
|width|In default choose always *full* for all devices.|

## Include Button from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { Button } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### **Slate** Button example with *settings* icon
```js
<Button
  fCallBack={function noRefCheck(){}}
  icon="settings"
  label="Settings"
  size="small"
  type="button"
  variant="slate"
  width="default"
/>
```

### **Cancel** Button example with *cancel* icon
```js
<Button
  fCallBack={function noRefCheck(){}}
  icon="cancel"
  label="Cancel"
  size="small"
  type="button"
  variant="slate"
  width="default"
/>
```
<hr />
## Mumble Color Guidelines
**Consider the following color specifications when using a button:**
- Slate: Cancel events.
- Violet: Submit events.
- Pink: On Startscreens and predefined templates.

<div style="text-align: center; background-color: #475569; color: white; margin-bottom: 4px; padding: 10px;">Slate</div>
<div style="text-align: center; background-color: #7C3AED; color: white; margin-bottom: 4px; padding: 10px;">Violet</div>
<div style="background: rgb(255,0,221); background: linear-gradient(90deg, rgba(255,0,221,1) 0%, rgba(156,0,255,1) 100%); color: white; text-align: center; padding: 10px;">Pink</div>