![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Paragraph
## Paragraph properties
| Property|Description|
|-|-|
|alignment|Horizontal *alignment*. Default *left*. Same functionality is in [Heading](./?path=/docs/typography--heading-story "Heading") implemented.| 
|color|Different *slate* **tone** variants. Caution! Always consider background contrast ratio.|
|mbSpacing|Margin bottom negative spacing. Creates a gap - negative spacing - to the next HTML element below. See futher explanations on *spacing*.|
|size|Always use *large* for message starter elements. Futher details on [Mumble](./?path=/docs/mumble-mumble--mumble-story) component.|
|text|Message text.|

## Include Paragraph from the component library

```js
// index.tsx, index.js, index.jsx

import { Paragraph } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### Paragraph *default* example

```js

<Paragraph
  alignment="left"
  color="default"
  mbSpacing="0"
  size="default"
  text="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
/>
```

### Paragraph *parent component* example

```js
<Paragraph
  alignment="left"
  color="dark"
  mbSpacing="16"
  size="large"
  text="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
/>
```