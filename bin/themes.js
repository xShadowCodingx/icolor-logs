const colors = require('./colors.js')

const themes = {
    default: {
        error(text){
            return console.log(colors.foregrounds.red, text, colors.reset)
        },
        success(text){
            return console.log(colors.foregrounds.green, text, colors.reset)
        },
        info(text){
            return console.log(colors.foregrounds.cyan, text, colors.reset)
        },
        warning(text){
            return console.log(colors.foregrounds.yellow, text, colors.reset)
        },
        log(text){
            return console.log(colors.foregrounds.blue, text, colors.reset)
        },
        attention(text){
            return console.log(colors.foregrounds.magenta, text, colors.reset)
        }
    }
}

module.exports = themes