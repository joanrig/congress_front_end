import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import HouseCard from './HouseCard'


class HouseSearchBar extends React.Component {
  debugger
  constructor(props) {
    super()
    /*senate search bar works and looks like this:
    this.state = {
      search: ''
    }
  */
    this.state = {
      search: ''
    }
  }

  componentDidMount(){
    //does not hit - component never mounts
    console.log("hello from house search bar componentDidMount")
  }


  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }


  render (){
    debugger
    //this.props is undefined - this error crashes app
    let filteredReps = this.props.reps.filter(
      (rep) => {
        let searchTerm = rep.last_name + rep.first_name + rep.state_full_name + rep.gender_search_term + rep.party_full_name + rep.next_election

        if (rep.running_for_president === true){
          searchTerm += "president"
        }

        if (rep.seniority.to_i <= 1){
          searchTerm += "freshman"
        }

        let input = this.state.search.toLowerCase()
          if (input === "male"){
            input = "womenfalse"
          } else if (input === "female"){
            input = "womentrue"
          }
        //!== -1 means not found?
        return searchTerm.toLowerCase().indexOf(input) !== -1
      }
    )

    return (
      <>
        <h3 className="ui block header center">... or search for representatives by name, state, party or gender
        (<em>note: type the whole word "male" or "female" to search by gender</em>)
          <div className="ui input focus center">
            <input type="text"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          </div>
        </h3>

        <h2 className='ui block header center'>{filteredReps.length} representatives meet your search requirements</h2><br/>

        <Card.Group itemsPerRow={5}>
          {filteredReps.map(rep =>
            <HouseCard key={rep.id} rep={rep}/>)}
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({reps: state.reps})

export default connect(mapStateToProps)(HouseSearchBar)
