import React, { PureComponent } from 'react';
import { Icon } from 'semantic-ui-react'



class MemberSocial extends PureComponent {
  constructor(props) {
    super()
    this.state = {
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

  render(){

    let member = this.props.member

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false


    //card.image

    let facebook
    let fba = member.facebook_account
    if (fba && isMobile) {
      facebook = <a href={fba} ><Icon className='facebook social' /></a>
    } else if (fba) {
      facebook = <a href={fba} ><Icon className='large facebook social' /></a>
    }

    let twitter
    let ta = member.twitter_account
    if (ta && isMobile) {
      twitter = <a href={ta} ><Icon className='twitter social' /></a>
    } else if (ta) {
      twitter = <a href={ta} ><Icon className='large twitter social' /></a>
    }

    let youtube
    let yta = member.youtube_account
    if (yta && isMobile) {
      youtube = <a href={yta} ><Icon className='youtube social' /></a>
    } else if (yta) {
      youtube = <a href={yta} ><Icon className='large youtube social' /></a>
    }


    let website
    let web = member.website
    if (web && isMobile) {
      website = <a href={web} ><Icon className='home icon social' /></a>
    } else if (web) {
      website = <a href={web} ><Icon className='large home icon social' /></a>
    }

    let contact_form
    let cform = member.contact_form
    if (cform && isMobile) {
      contact_form = <a href={cform} ><Icon className='mail social' /></a>
    } else if (cform) {
      contact_form = <a href={cform} ><Icon className='large mail social' /></a>
    }


    let phone = member.phone_clickable
    if (phone && isMobile) {
      phone = <a href={phone}><Icon className='phone icon social' /></a>
    } else if (phone) {
      phone = <a href={phone}><Icon className='large phone icon social' /></a>
    }


    return (
      <div>
        {facebook}
        {twitter}
        {youtube}
        {website}
        {contact_form}
        {phone}
      </div>
    )

  }


}
export default MemberSocial
