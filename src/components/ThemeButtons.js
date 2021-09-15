
const ThemeButtons = ({darkThemeToggle}) => {
    return (
        <div className='theme-selector'>
            <input  type='checkbox' id='light-checkbox'/><p>Light</p>
            <input type='checkbox'id='dark-checkbox' onClick={darkThemeToggle} /> <p>Dark</p> 
        </div>
        
    )
};

export default ThemeButtons;