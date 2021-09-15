
import ThemeButtons from "./ThemeButtons"

const Theme = ({darkThemeToggle}) => {
    return (
        
        <div>
          <p id='theme-statement'>You can choose your favourite theme!!!</p>
          <ThemeButtons darkThemeToggle={darkThemeToggle}/>
        </div>
    )
};

export default Theme;