const React=require("react")
const {ThemeProvider}=require("theme-ui")
const {light}=require("@theme-ui/presets")
const { Provider } = require("./identity-context")

const newTheme={
    ...light,
    sizes:{container:1024}
}

module.exports=({element}) => {
    return (
        <Provider>
                <ThemeProvider theme={newTheme}> {element} </ThemeProvider>
        </Provider>
    
    )
}