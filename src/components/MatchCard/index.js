import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const convertDataIntoCamelCase = {
    result: cardDetails.result,
    competingTeam: cardDetails.competing_team,
    competingTeamLogo: cardDetails.competing_team_logo,
    matchStatus: cardDetails.match_status,
  }
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = convertDataIntoCamelCase
  console.log(competingTeamLogo)

  const statusClassName = matchStatus === 'Lost' ? 'lost' : 'won'

  return (
    <li className="recent-match-list-div">
      <div className="card-content">
        <img
          className="recent-team-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="recent-team-name">{competingTeam}</p>
        <p className="recent-result">{result}</p>
        <p className={statusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
