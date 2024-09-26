const themes = require('./util/themes')
const colors = require('./util/colors')

const icl = {
    theme: (theme) => {
        switch (theme) {
            case 'default':
                return {
                    error: themes.default.error,
                    success: themes.default.success,
                    info: themes.default.info,
                    warning: themes.default.warning,
                    attention: themes.default.attention,
                    log: themes.default.log
                };
            case 'defaultInverted':
                return {
                    error: themes.defaultInverted.error,
                    success: themes.defaultInverted.success,
                    info: themes.defaultInverted.info,
                    warning: themes.defaultInverted.warning,
                    attention: themes.defaultInverted.attention,
                    log: themes.defaultInverted.log
                };
            case 'highContrast':
                return {
                    error: themes.highContrast.error,
                    success: themes.highContrast.success,
                    info: themes.highContrast.info,
                    warning: themes.highContrast.warning,
                    attention: themes.highContrast.attention,
                    log: themes.highContrast.log
                };
            case 'light':
                return {
                    error: themes.light.error,
                    success: themes.light.success,
                    info: themes.light.info,
                    warning: themes.light.warning,
                    attention: themes.light.attention,
                    log: themes.light.log
                };
        };
    },
    black: (text) => {
        return colors.foregrounds.black + text + colors.foregrounds.reset
    },
    red: (text) => {
        return colors.foregrounds.red + text + colors.foregrounds.reset
    },
    green: (text) => {
        return colors.foregrounds.green + text + colors.foregrounds.reset
    },
    yellow: (text) => {
        return colors.foregrounds.yellow + text + colors.foregrounds.reset
    },
    blue: (text) => {
        return colors.foregrounds.blue + text + colors.foregrounds.reset
    },
    magenta: (text) => {
        return colors.foregrounds.magenta + text + colors.foregrounds.reset
    },
    cyan: (text) => {
        return colors.foregrounds.cyan + text + colors.foregrounds.reset
    },
    white: (text) => {
        return colors.foregrounds.white + text + colors.foregrounds.reset
    },
    default: (text) => {
        return colors.foregrounds.default + text + colors.foregrounds.reset
    },
    blackBg: (text) => {
        return colors.backgrounds.black + text + colors.backgrounds.reset
    },
    redBg: (text) => {
        return colors.backgrounds.red + text + colors.backgrounds.reset
    },
    greenBg: (text) => {
        return colors.backgrounds.green + text + colors.backgrounds.reset
    },
    yellowBg: (text) => {
        return colors.backgrounds.yellow + text + colors.backgrounds.reset
    },
    blueBg: (text) => {
        return colors.backgrounds.blue + text + colors.backgrounds.reset
    },
    magentaBg: (text) => {
        return colors.backgrounds.magenta + text + colors.backgrounds.reset
    },
    cyanBg: (text) => {
        return colors.backgrounds.cyan + text + colors.backgrounds.reset
    },
    whiteBg: (text) => {
        return colors.backgrounds.white + text + colors.backgrounds.reset
    },
    defaultBg: (text) => {
        return colors.backgrounds.default + text + colors.backgrounds.reset
    }
};

module.exports = icl