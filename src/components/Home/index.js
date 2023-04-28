import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const listData = await response.json()
    // console.log(listData)

    const updatedTeamList = listData.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsList: updatedTeamList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    // console.log(teamsList)

    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <div className="logo-div">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="logo-name">IPL DASHBOARD</h1>
            </div>
            <ul className="list-div">
              {teamsList.map(eachItem => (
                <TeamCard teamDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
