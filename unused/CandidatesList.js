import React from 'react'
import { Card } from 'semantic-ui-react'
import CandidateCard from './CandidateCard'



const CandidatesList = () => {
  return (
    <>
      <h2 className='ui block header center'>{this.props.candidates.length} Congress members are running for President</h2><br/>

      <Card.Group itemsPerRow={4}>
        {this.props.candidates.map(candidate =>
          <CandidateCard key={candidate.id} candidate={candidate}/>)}
      </Card.Group>
    </>
  )
}

export default CandidatesList
