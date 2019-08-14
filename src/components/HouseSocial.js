import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'



class HouseCardSocial extends Component {
  constructor(props) {
    super()
  }

  render(){

    let rep = this.props.rep

    let facebook
    if (rep.facebook_account) {
      facebook = <a href={rep.facebook_account} ><Icon className='large facebook' /></a>
    }

    let twitter
    if (rep.twitter_account) {
      twitter = <a href={rep.twitter_account} ><Icon className='large twitter' /></a>
    }

    let youTube
    if (rep.youtube_account) {
      youTube = <a href={rep.youtube_account} ><Icon className='large youtube' /></a>
    }

    let website
    if (rep.website) {
      website = <a href={rep.website} ><Icon className='large home icon' /></a>
    }

    let contact_form
    if (rep.contact_form) {
      contact_form = <a href={rep.contact_form} ><Icon className='large mail' /></a>
    }

    let phone = <a href={rep.phone_clickable}><Icon className="large phone icon" /></a>



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
export default HouseCardSocial;
