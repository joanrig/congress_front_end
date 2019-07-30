import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Image } from 'semantic-ui-react'
import { fetchBillsBySubject } from '../actions/bills'
// import BillsFilter from './BillsFilter'
import BillCard from './BillCard'


class BillsSearchBar extends Component {

  constructor(props) {
    super()
    this.state = {
      search: '',
      video:
      <div className="center">
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/FFroMQlKiag?start=16" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>,
      bills: []
    }
  }

  // componentDidMount = () => {
  //   debugger
  //   this.setState({
  //     bills: this.props.location.state.bills
  //   })
  // }


  updateSearch= (event) => {
    this.setState({
      search: event.target.value.substr(0, 50),
    })

  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.fetchBillsBySubject(this.state.search)
    this.setState({ video: ''})
    //this.props does not have 20 bills, but global state does
  }

  render (){
    let bills = this.props.bills
    let content
    if (this.props.bills){
      content = this.props.bills.map(bill =><BillCard key={bill.id} {...bill} />)

   } else {
     content =
     <div className="center">
       <h2>searching for bills about {this.state.search} ... </h2>
       <h4>If you remain here for more than 10 seconds, your search term returned no results! Please try again.</h4>
       <Image src="http://www.aawaajnews.com/wp-content/uploads/2019/01/5c2e7f892ab31e362e493620-2732-1366.jpg"/>
      </div>

   }

   let searchInstructions = "Hint: use broad search terms, i.e. 'immigration', 'China', 'Medicare', etc."


    return (
      <>
        <br/>
          <h1 className="center">Search for active bills by subject</h1>
          <h4 className="center">
            'Active' bills have seen action beyond introduction and committee referral.<br/>
            To learn more about the life of a bill, check out the School House Rock video below!
          </h4>
          <br/>
          <Form onSubmit={this.handleSubmit}>
            <div className="ui fluid action input">
              <input
                type="search"
                value={this.state.search}
                placeholder={searchInstructions}
                onChange={this.updateSearch} />
              <input type="submit" value="search" />
            </div>
          </Form>
          <h2 className="center">Subject: {this.state.search}</h2>
        <br/>
        <br/>
        <>
          {this.state.video}
        </>
        <Card.Group itemsPerRow={5}>
          {content}
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({bills: state.bills.bills })

export default connect(mapStateToProps, {fetchBillsBySubject})(BillsSearchBar)
