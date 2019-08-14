import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'



class SenateSocial extends Component {
  constructor(props) {
    super()
  }

  render(){

    let senator = this.props.senator

    let facebook
    if (senator.facebook_account) {
      facebook = <a href={senator.facebook_account} ><Icon className='large facebook' /></a>
    }

    let twitter
    if (senator.twitter_account) {
      twitter = <a href={senator.twitter_account} ><Icon className='large twitter' /></a>
    }

    let youTube
    if (senator.youtube_account) {
      youTube = <a href={senator.youtube_account} ><Icon className='large youtube' /></a>
    }

    let website
    if (senator.website) {
      website = <a href={senator.website} ><Icon className='large home icon' /></a>
    }

    let contact_form
    if (senator.contact_form) {
      contact_form = <a href={senator.contact_form} ><Icon className='large mail' /></a>
    }

    let phone = <a href={senator.phone_clickable}><Icon className="large phone icon" /></a>



    return (
      <div>
        {facebook}
        {twitter}
        {youTube}
        {website}
        {contact_form}
        {phone}
      </div>
    )

  }


}
export default SenateSocial;
