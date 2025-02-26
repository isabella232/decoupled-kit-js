---
id: "lib_tailwindcssPlugin_utilities_Fonts.FontsUtilities"
title: "Class: FontsUtilities"
sidebar_label: "FontsUtilities"
custom_edit_url: null
---

[lib/tailwindcssPlugin/utilities/Fonts](../modules/lib_tailwindcssPlugin_utilities_Fonts.md).FontsUtilities

Class to generate all the fonts related utilities

**`Param`**

The theme object from tailwindcss plugin

**`Example`**

```
const fonts = new FontsUtilities(theme);

fonts.getFontSizeUtilities() // returns the font size utilities
```

## Constructors

### constructor

• **new FontsUtilities**(`theme`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`ThemeType`](../modules/types.md#themetype) |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts:19](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts#L19)

## Properties

### dropCapUtilities

• **dropCapUtilities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `.has-drop-cap` | { `&:first-letter`: { `float`: `string` = 'left'; `fontSize`: `string` = '3.25em'; `fontStyle`: `string` = 'normal'; `fontWeight`: `string` = 'bolder'; `lineHeight`: `string` = '0.68'; `margin`: `string` = '1rem 1rem 0 0'; `textTransform`: `string` = 'uppercase' }  } |
| `.has-drop-cap.&:first-letter` | { `float`: `string` = 'left'; `fontSize`: `string` = '3.25em'; `fontStyle`: `string` = 'normal'; `fontWeight`: `string` = 'bolder'; `lineHeight`: `string` = '0.68'; `margin`: `string` = '1rem 1rem 0 0'; `textTransform`: `string` = 'uppercase' } |
| `.has-drop-cap.&:first-letter.float` | `string` |
| `.has-drop-cap.&:first-letter.fontSize` | `string` |
| `.has-drop-cap.&:first-letter.fontStyle` | `string` |
| `.has-drop-cap.&:first-letter.fontWeight` | `string` |
| `.has-drop-cap.&:first-letter.lineHeight` | `string` |
| `.has-drop-cap.&:first-letter.margin` | `string` |
| `.has-drop-cap.&:first-letter.textTransform` | `string` |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts:61](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts#L61)

___

### textAlignUtilities

• **textAlignUtilities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `.has-text-align-center` | { `textAlign`: `string` = 'center' } |
| `.has-text-align-center.textAlign` | `string` |
| `.has-text-align-left` | { `textAlign`: `string` = 'left' } |
| `.has-text-align-left.textAlign` | `string` |
| `.has-text-align-right` | { `textAlign`: `string` = 'right' } |
| `.has-text-align-right.textAlign` | `string` |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts:49](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts#L49)

___

### theme

• `Private` **theme**: [`ThemeType`](../modules/types.md#themetype)

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts#L17)

## Methods

### getFontSizeUtilities

▸ **getFontSizeUtilities**(): `Object`

Generates the font size utilities based on the
font size list that includes tailwind's default font size values and sensible defaults.

**`Example`**

```
{
 '.has-large-font-size': '3rem',
 ...
}
```

#### Returns

`Object`

- A object with the font size utilities

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts:35](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Fonts.ts#L35)
