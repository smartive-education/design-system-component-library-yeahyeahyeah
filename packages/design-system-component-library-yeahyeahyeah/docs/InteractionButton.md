![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# InteractionButton
## InteractionButton properties and how to use
| Property|Description|
|-|-|
|fCallBack|JS-Callback for each button.|
|quantity|Total *likes* or total *comments*|
|favourite|Only for *Like-Button*. Set to true change the icon fill-color. Not considered for *comment button*|


## Include InteractionButton from the component library

```js
// index.tsx, index.js, index.jsx

import { InteractionButton } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### Like Button
```js
<InteractionButton
  fCallBack={() => {}}
  quantity={0}
  type="like"
/>
```

### Comment Button
```js
<InteractionButton
  fCallBack={() => {}}
  quantity={0}
  type="comment"
/>
```
<hr />