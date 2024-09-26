const themes = require('./bin/themes')
const colors = require('./bin/colors')

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
    }
};

const col = icl.theme('light')
col.error("This is an error message")
col.success("This is a success message")
col.info("This is an info message")
col.warning("This is a warning message")
col.log("This is a log message")
col.attention("This is an attention message")