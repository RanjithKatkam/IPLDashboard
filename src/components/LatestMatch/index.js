import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsList} = props
  const convertDataIntoCamelCase = {
    umpires: latestMatchDetailsList.umpires,
    result: latestMatchDetailsList.result,
    manOfTheMatch: latestMatchDetailsList.man_of_the_match,
    date: latestMatchDetailsList.date,
    venue: latestMatchDetailsList.venue,
    competingTeam: latestMatchDetailsList.competing_team,
    competingTeamLogo: latestMatchDetailsList.competing_team_logo,
    firstInnings: latestMatchDetailsList.first_innings,
    secondInnings: latestMatchDetailsList.second_innings,
    matchStatus: latestMatchDetailsList.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = convertDataIntoCamelCase

  return (
    <div className="latest-details-container">
      <div>
        <p className="teamName">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue1">{venue}</p>
        <p className="venue1">{result}</p>
      </div>
      <div className="abc">
        <img
          className="won-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div>
        <h1 className="venue">First Innings</h1>
        <p className="answer">{firstInnings}</p>
        <h1 className="venue">Second Innings</h1>
        <p className="answer">{secondInnings}</p>
        <h1 className="venue">Man Of The Match</h1>
        <p className="answer">{manOfTheMatch}</p>
        <h1 className="venue">Umpires</h1>
        <p className="answer">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
