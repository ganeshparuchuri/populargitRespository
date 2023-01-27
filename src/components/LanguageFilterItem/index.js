// Write your code here
import './index.css'

const LanguageFilteritem = props => {
  const {languageItem, activeTabClick, isActve} = props
  const {language, id} = languageItem

  const tabClick = () => {
    activeTabClick(id)
  }

  const isActive = isActve && 'tab-class'

  return (
    <li className="list-item">
      <button
        onClick={tabClick}
        className={`each-tab ${isActive}`}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilteritem
