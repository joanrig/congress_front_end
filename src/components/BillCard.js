import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Image } from 'semantic-ui-react'



class BillCard extends React.Component {
  constructor(props) {
    super()

    this.state = {
      search: '',
      bills: []
    }
  }

  // updateSearch= (event) => {
  //   this.setState({search: event.target.value.substr(0, 100)})
  // }

  render (){
    return (

      <Card >
        <Image src="https://vignette.wikia.nocookie.net/p__/images/f/f3/Bill_schoolhouse_rock.png/revision/latest?cb=20161029171330&path-prefix=protagonist" wrapped ui={false} />

        <Card.Content onClick={this.toggleCard}>
          <Card.Header>
            Bill title goes here
          </Card.Header>

          <Card.Description>
            bill info <br/>
            bill info <br/>
            bill info <br/>
            bill info <br/>
            bill info <br/>
          </Card.Description>
        </Card.Content>

        <Card.Content extra >
          <div>
            more bill info <br/>
            more bill info <br/>
            more bill info <br/>
          </div>
        </Card.Content>
      </Card>
    )
  }
}


const mapStateToProps = state => ({ bills: state.bills })

export default connect(mapStateToProps)(BillCard)
