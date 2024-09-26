<img src="https://i.ibb.co/Lp0T2fJ/i-Color-logs.png" alt="i-Color-logs">

# iColor-Logs
An easy-to-use console log formatter for JS

## About iColor-Logs
This library is a light-weight yet efficient way for you to customize your log colors. Each function returns the console log, so you can wrap it inside of conditionals or whereever else you might want to log information. It uses ANSI color codes that are usable by most consoles to display your text formatted in whichever way you choose.

## Colors
iColor-Logs comes equiped with the universal colors for your logs:

- Black
- Red
- Green
- Yellow
- Blue
- Magenta
- Cyan
- White
- Default
- Reset


## Usage
Depending on how you want to utilize the colors, there are a couple methods you can do to accomplish formatting your console logs. Regardless of which route you choose, you should start with importing / requiring iColor-Logs.

```
const icl = require('icolor-logs')
```


### Themes
The easiest way to implement logs is to use the built-in themes that comes with the library. The following themes are available:

- Default
- Default Inverted
- High Contrast
- Light

Each of these themes gives your logs different colors based on what kind of log you are showing. Please see **Log Types** to understand how it affects your formatting.

#### Default Theme
The default theme of iColor-Logs is a basic, yet elegant log formatting. As you can see below, the text (foreground) color is the only thing this theme manipulates.

<img src="https://i.ibb.co/9nYWj9j/Untitled.png" alt="iColor-Logs Default Theme">

##### Using the Default Theme
To use the default theme, just assign it to a variable and you can start using it throughout your JS file.

```
const colorTheme = icl.theme('default');
colorTheme.error('This is an error message');
```

You can name the variable whatever you want, of course. When we utilize ```const icl = require('icolor-logs')``` we get the full range of functions available from the library.

#### Default Inverted Theme
As the title states, its the inverted style of the Default Theme. You can expect the color to be on the background, and the text itself will be white.

<img src="https://i.ibb.co/3MhPpD9/default-Inverted.png" alt="iColor-Logs Default Inverted Theme">

##### Using the Default Inverted Theme
To use the default inverted theme, we will assign it like we did above for the default theme.

```
const colorTheme = icl.theme('defaultInverted');
colorTheme.error('This is an error message');
```

#### High Contrast Theme
This theme is outside of the norm with coloring, however it gives you a funky high-contrast log that is easy to see.

<img src="https://i.ibb.co/CBBWXvd/high-Contrast.png" alt="iColor-Logs High Contrast Theme">

##### Using the High Contrast Theme
To use the high contrast them, we will assign the theme like below:

```
const colorTheme = icl.theme('highContrast);
colorTheme.error('This is an error message');
```

#### Light Theme
The light theme sets the background to white, so if you are fond of lighter colors then this theme will give that to you.

<img src="https://i.ibb.co/KWjRdfJ/lighttheme.png" alt="iColor-Logs Light Theme">

#### Using the Light Theme
To use the light them, we will assign the theme as shown below:

```
const colorTheme = icl.theme('light');
colorTheme.error('This is an error message');
```

#### Setting Multiple Themes At Once
If you need to use different themes on the same document, it is as easy as assigning them to different variables and using them as you normally would with single themes.

#### Using Multiple Themes
Like I stated above, just assign the themes to different variables as shown below:

```
const defaultTheme = icl.theme('default');
const defaultInvertedTheme = icl.theme('defaultInverted');
const highContrastTheme = icl.theme('highContrast');
const lightTheme = icl.theme('light');
```


### A Note on Themes
Nothing is one-size-fits-all, these themes give some functionality out-of-the-box so you don't have to do too much to get started. However, if your needs are something particular you can also change the colors themselves. The next section of this document explains how that is accomplished.


### Using Single Colors (Foreground and Background)
If you don't want to use a theme, or just need something specific, you can set the text and background colors of your logs by themselves. These specific color functions return the necessary ANSI codes to ensure your formatting is correct, the only difference is we will be putting it inside of a ```console.log()``` on our end. You can mix and match foreground (text) and background colors to suit your needs.

For foreground colors:

```
const icl = require('icolor-logs')

console.log(icl.black("Black Text"))
console.log(icl.red("Red Text"))
console.log(icl.green("Green Text"))
console.log(icl.yellow("Yellow Text"))
console.log(icl.blue("Blue Text"))
console.log(icl.magenta("Magenta Text"))
console.log(icl.cyan("Cyan Text"))
console.log(icl.white("White Text"))
console.log(icl.default("Default Text"))
```

<img src="https://i.ibb.co/cwxhYYR/colors.png" alt="iColor-Logs Foreground Colors">

For background colors:

```
const icl = require('icolor-logs)

console.log(icl.blackBg("Black Background"))
console.log(icl.redBg("Red Background"))
console.log(icl.greenBg("Green Background"))
console.log(icl.yellowBg("Yellow Background"))
console.log(icl.blueBg("Blue Background"))
console.log(icl.magentaBg("Magenta Background"))
console.log(icl.cyanBg("Cyan Background"))
console.log(icl.whiteBg("White Background"))
console.log(icl.defaultBg("Default Background"))
```

<img src="https://i.ibb.co/TrpjMBG/backgroundcolors.png" alt="iColor-Logs Background Colors">

To mix foreground and background colors:

```
const icl = require('icolor-logs)

console.log(icl.blueBg(icl.white("White text, blue background")))
console.log(icl.whiteBg(icl.red("Red text, white background")))
console.log(icl.redBg(icl.green("Green text, red background")))
console.log(icl.greenBg(icl.yellow("Yellow text, green background")))
console.log(icl.yellowBg(icl.blue("Blue text, yellow background")))
console.log(icl.blueBg(icl.magenta("Magenta text, blue background")))
console.log(icl.magentaBg(icl.cyan("Cyan text, magenta background")))
console.log(icl.cyanBg(icl.white("White text, cyan background")))
```

<img src="https://i.ibb.co/KFw8GQs/mixingbgfg.png" alt="iColor-Logs Mixing Foreground and Background Colors">