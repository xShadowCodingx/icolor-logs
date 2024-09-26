const themes = require('./bin/themes')
const colors = require('./bin/colors')

themes.defaultInverted.error("This is an error message")
themes.defaultInverted.success("This is a success message")
themes.defaultInverted.info("This is an info message")
themes.defaultInverted.warning("This is a warning message")
themes.defaultInverted.attention("This is an attention message")
themes.defaultInverted.log("This is a log message")