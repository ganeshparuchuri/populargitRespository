// Write your code here
import './index.css'

const Repositoryitem = props => {
  const {eachRepo} = props
  const {avatarUrl, name, forksCount, issuesCount, starsCount} = eachRepo
  return (
    <li className="each-list">
      <img src={avatarUrl} className="avatar-url" alt={name} />
      <h1 className="name">{name}</h1>
      <div className="div1">
        <img
          className="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="p">{starsCount}</p>
      </div>
      <div className="div1">
        <img
          className="stars"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="p">{forksCount}</p>
      </div>
      <div className="div1">
        <img
          className="stars"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="p">{issuesCount}</p>
      </div>
    </li>
  )
}
export default Repositoryitem
