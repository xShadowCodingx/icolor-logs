const themes = require('./bin/themes')
const colors = require('./bin/colors')

themes.default.error("This is an error message")
themes.default.success("This is a success message")
themes.default.info("This is an info message")
themes.default.warning("This is a warning message")
themes.default.attention("This is an attention message")
themes.default.log("This is a log message")