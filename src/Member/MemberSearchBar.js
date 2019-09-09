import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Input, Loader } from 'semantic-ui-react'
import MemberCard from './MemberCard'


class MemberSearchBar extends Component {
  constructor(props) {
    super()

    this.state = {
      search: '',
      showNames: false,
      width: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  render (){

    let searchInstructions =
      "search by name, state, party, next election year or gender (type the full word 'female' or 'male'); 'president' for candidates; 'leaving'; or 'freshmen'"

    let members
    this.props.renderedBy === "senate" ? members = this.props.senate : members = this.props.house

    let input = this.state.search.toLowerCase()
      if (input === "male"){
        input = "womynfalse"
      } else if (input === "female"){
        input = "womyntrue"
      }

    //https://www.geeksforgeeks.org/javascript-string-prototype-indexof-function/
    let filteredMembers = members.filter(
      (member) => {
        return member.searchable_string.toLowerCase().indexOf(input) !== -1
      }
    )

    //define members as senator vs. rep, pluralize search results notice
    let member
    this.props.renderedBy === "senate" ? member = "senator" : member = "representative"

    let count = filteredMembers.length
    let resultsCount
    let memberPluralized
    count === 1 ? memberPluralized = member : memberPluralized = member + 's'

    let loader =  <> loading <Loader active inline /></>

    let inputToDisplay
      if (input === "womyntrue"){
        inputToDisplay = "female"
      } else if (input === "womynfalse"){
        inputToDisplay = "male"
      } else {
        inputToDisplay = input
      }


    if (input) {
      resultsCount = <>{count} {memberPluralized} found in your search for {inputToDisplay}</>
    } else if (!input && count > 0){
      resultsCount = <>{count} {memberPluralized} </>
    } else if (!input && count === 0){
      resultsCount = <>{loader}</>
    }

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false


    let itemsPerRow
    isMobile? itemsPerRow = 2 : itemsPerRow = 5

    return (
      <>
        <br/>
          <Input
            size="big"
            type="text"
            placeholder={searchInstructions}
            value={this.state.search}
            onChange={this.updateSearch}
            className="ui fluid focus input"
            icon = "search"
          />
        <h2 className='ui block header center'>{resultsCount}</h2>

        <Card.Group itemsPerRow={itemsPerRow}>
          {filteredMembers.map(member =>
            <MemberCard
              showNames={this.state.showNames}
              bills={[]}
              donors={[]}
              key={member.id} {...member}/>
            )}
        </Card.Group>
      </>
    )
  }
}

const mapStateToProps = state => ({ senate: state.senate, house: state.house })

export default connect(mapStateToProps)(MemberSearchBar)
