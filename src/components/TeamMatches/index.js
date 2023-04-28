import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetailsList: '',
    bannerUrl: '',
    recentMatchDetailsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getFullDetails()
  }

  getFullDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data.latest_match_details.id)
    const convertDataToCamelCase = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    // console.log(convertDataToCamelCase.bannerUrl, '12')
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = convertDataToCamelCase

    this.setState({
      bannerUrl: teamBannerUrl,
      recentMatchDetailsList: recentMatches,
      latestMatchDetailsList: latestMatchDetails,
      isLoading: false,
    })
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {
      latestMatchDetailsList,
      recentMatchDetailsList,
      bannerUrl,
      isLoading,
    } = this.state
    // console.log(bannerUrl)
    return (
      <div className={`TeamMatches-main-container ${this.getClassName()}`}>
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="content-div">
            <img className="bannerImg" src={bannerUrl} alt="team banner" />
            <h1 className="latest-matches">Latest Matches</h1>
            <LatestMatch
              latestMatchDetailsList={latestMatchDetailsList}
              key={latestMatchDetailsList.id}
            />
            <ul className="matchCard-div">
              {recentMatchDetailsList.map(eachItem => (
                <MatchCard cardDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
