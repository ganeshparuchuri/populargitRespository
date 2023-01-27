import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilteritem from '../LanguageFilterItem'
import Repositoryitem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    Activetab: languageFiltersData[0].id,
    currentGithub: [],
    isLoading: false,
    failureView: false,
  }

  componentDidMount() {
    this.githubApiUrl()
  }

  actveTabClick = id => {
    this.setState({Activetab: id}, this.githubApiUrl)
    console.log(id)
  }

  languageFilterData = () => {
    const {Activetab} = this.state
    return (
      <ul className="ul-list">
        {languageFiltersData.map(eachData => (
          <LanguageFilteritem
            key={eachData.id}
            languageItem={eachData}
            activeTabClick={this.actveTabClick}
            isActve={eachData.id === Activetab}
          />
        ))}
      </ul>
    )
  }

  githubApiUrl = async () => {
    const {Activetab} = this.state
    this.setState({isLoading: true})

    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${Activetab}`,
    )
    if (response.ok === true) {
      this.setState({isLoading: false})
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachRepo => ({
        avatarUrl: eachRepo.avatar_url,
        forksCount: eachRepo.forks_count,
        issuesCount: eachRepo.issues_count,
        starsCount: eachRepo.stars_count,
        id: eachRepo.id,
        name: eachRepo.name,
      }))
      this.setState({currentGithub: updatedData})
    } else {
      this.setState({isLoading: false})
      this.setState({failureView: true})
    }
  }

  repositoryItem = () => {
    const {currentGithub} = this.state

    return (
      <ul className="ul-list">
        {currentGithub.map(eachRepo => (
          <Repositoryitem eachRepo={eachRepo} key={eachRepo.id} />
        ))}
      </ul>
    )
  }

  spinnerLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {currentGithub, isLoading, failureView} = this.state
    console.log(currentGithub)
    return (
      <div className="git-poular-container">
        <h1 className="popular-heading">Popular</h1>
        {this.languageFilterData()}

        {isLoading ? this.spinnerLoading() : this.repositoryItem()}
        {failureView && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
              alt="failure view"
            />
          </div>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
