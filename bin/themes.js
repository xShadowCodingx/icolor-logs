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
    },
    defaultInverted: {
        error(text){
            return console.log(colors.backgrounds.red + colors.foregrounds.white + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        success(text){
            return console.log(colors.backgrounds.green + colors.foregrounds.white + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        info(text){
            return console.log(colors.backgrounds.cyan + colors.foregrounds.white + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        warning(text){
            return console.log(colors.backgrounds.yellow + colors.foregrounds.white + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        log(text){
            return console.log(colors.backgrounds.blue + colors.foregrounds.white + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        attention(text){
            return console.log(colors.backgrounds.magenta + colors.foregrounds.white + text + colors.foregrounds.reset + colors.backgrounds.reset)
        }
    },
    highContrast: {
        error(text){
            return console.log(colors.backgrounds.red + colors.foregrounds.white + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        success(text){
            return console.log(colors.backgrounds.blue + colors.foregrounds.red + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        info(text){
            return console.log(colors.backgrounds.magenta + colors.foregrounds.cyan + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        warning(text){
            return console.log(colors.backgrounds.cyan + colors.foregrounds.yellow + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        log(text){
            return console.log(colors.backgrounds.yellow + colors.foregrounds.blue + text + colors.foregrounds.reset + colors.backgrounds.reset)
        },
        attention(text){
            return console.log(colors.backgrounds.white + colors.foregrounds.magenta + text + colors.foregrounds.reset + colors.backgrounds.reset)
        }
    },
    light: {
        error(text){
            return console.log(colors.backgrounds.white + colors.foregrounds.red + text + colors.foregrounds.reset)
        },
        success(text){
            return console.log(colors.backgrounds.white + colors.foregrounds.green + text + colors.foregrounds.reset)
        },
        info(text){
            return console.log(colors.backgrounds.white + colors.foregrounds.cyan + text + colors.foregrounds.reset)
        },
        warning(text){
            return console.log(colors.backgrounds.white + colors.foregrounds.yellow + text + colors.foregrounds.reset)
        },
        log(text){
            return console.log(colors.backgrounds.white + colors.foregrounds.blue + text + colors.foregrounds.reset)
        },
        attention(text){
            return console.log(colors.backgrounds.white + colors.foregrounds.magenta + text + colors.foregrounds.reset)
        }
    }
}

module.exports = themes