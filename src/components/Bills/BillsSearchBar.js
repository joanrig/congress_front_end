import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Image } from 'semantic-ui-react'
import { fetchBillsBySubject } from './BillsActions'
// import BillsFilter from './BillsFilter'
import BillCard from './BillCard'


class BillsSearchBar extends Component {

  constructor(props) {
    super()
    this.state = {
      search: '',
      video:
      <div className="video center"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}>
        <iframe
          title="congressSession"
          style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
          src="https://www.youtube.com/embed/FFroMQlKiag?start=16"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>,
      bills: [],
      width: window.innerWidth
    }
  }

  componentWillMount() {
     window.addEventListener('resize', this.handleWindowSizeChange);
   }

  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange);
   }

  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth });
   }


  updateSearch= (event) => {
    this.setState({
      search: event.target.value.substr(0, 50),
    })
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.fetchBillsBySubject(this.state.search)
    this.setState({ video: ''})
  }

  render (){
    let bills = this.props.bills
    let content = ""
    if (bills){
      content = this.props.bills.map(bill =><BillCard key={bill.id} {...bill} />)

   } else {
     content =
     <div className="center">

       <h4>If you remain here for more than 10 seconds, your search term returned no results! Please try again.</h4>
       <Image src="http://www.aawaajnews.com/wp-content/uploads/2019/01/5c2e7f892ab31e362e493620-2732-1366.jpg"/>
      </div>

   }

   let searchInstructions = "Hint: use broad search terms, i.e. 'immigration', 'China', 'Medicare', etc."

   let isMobile
   const width = this.state.width
   width <= 500 ? isMobile = true : isMobile = false


   //mobile formatting
   let billCardsPerRow
   isMobile ? billCardsPerRow = 2 : billCardsPerRow = 5

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
        <Card.Group itemsPerRow={billCardsPerRow}>
          {content}
        </Card.Group>
      </>
    )
  }
}

const mapStateToProps = state => ({bills: state.bills.bills })

export default connect(mapStateToProps, {fetchBillsBySubject})(BillsSearchBar)
