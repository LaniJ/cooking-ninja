import { useTheme } from '../../hooks/useTheme'
import modeIcon from '../../assets/mode-icon.svg'
// styles

import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'light' ? 'dark' : 'light')
  }
  console.log('mode', mode);
  return ( 
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{ filter: mode === 'light' ? 'invert(20%)' : 'invert(100%)' }}
        />
      </div>
      <div className="theme-button">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
   );
}
 
export default ThemeSelector;