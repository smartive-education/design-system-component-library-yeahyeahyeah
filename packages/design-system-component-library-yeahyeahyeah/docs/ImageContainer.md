![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# ImageContainer
## ImageContainer properties and how to use
| Property|Description|
|-|-|
|src|Image source link.|
|alt|Alternative tag for image.|
|loading|Loading state. True creates an loading spinner in image center.|
|type|*Container*Image can be used everywhere in the app. A mouse hover induces an *fullscreen* icon, *banner* type an *edit* icon. On both icon is an JS-CallBack handler.|
|fCallBack|JS-Callback function.|

## Include Image from the component library

```js
// index.tsx, index.js, index.jsx

import { ImageContainer } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### Image with *container* type

```js
<ImageContainer
  alt="This is a profile picture"
  fCallBack={() => {}}
  src="https://shorturl.at/nEO01"
  type="container"
/>
```

### Image with *banner* type

```js
<ImageContainer
  alt="This is a profile picture"
  fCallBack={() => {}}
  src="https://shorturl.at/nEO01"
  type="banner"
/>
```