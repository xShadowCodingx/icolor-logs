const colors = require('./colors.js')

const themes = {
    default: {
        error(text){
            return console.log(colors.foregrounds.red + text + colors.foregrounds.reset)
        },
        success(text){
            return console.log(colors.foregrounds.green + text + colors.foregrounds.reset)
        },
        info(text){
            return console.log(colors.foregrounds.cyan + text + colors.foregrounds.reset)
        },
        warning(text){
            return console.log(colors.foregrounds.yellow + text + colors.foregrounds.reset)
        },
        log(text){
            return console.log(colors.foregrounds.blue + text + colors.foregrounds.reset)
        },
        attention(text){
            return console.log(colors.foregrounds.magenta + text + colors.foregrounds.reset)
        }
    }
}

module.exports = themes