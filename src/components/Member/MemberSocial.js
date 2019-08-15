import React, { PureComponent } from 'react';
import { Icon } from 'semantic-ui-react'



class MemberSocial extends PureComponent {
  constructor(props) {
    super()
  }

  render(){

    let member = this.props.member

    let facebook
    if (member.facebook_account) {
      facebook = <a href={member.facebook_account} ><Icon className='large facebook social' /></a>
    }

    let twitter
    if (member.twitter_account) {
      twitter = <a href={member.twitter_account} ><Icon className='large twitter social' /></a>
    }

    let youTube
    if (member.youtube_account) {
      youTube = <a href={member.youtube_account} ><Icon className='large youtube social' /></a>
    }

    let website
    if (member.website) {
      website = <a href={member.website} ><Icon className='large home icon social' /></a>
    }

    let contact_form
    if (member.contact_form) {
      contact_form = <a href={member.contact_form} ><Icon className='large mail social' /></a>
    }

    let phone = <a href={member.phone_clickable}><Icon className="large phone icon social" /></a>



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
export default MemberSocial
