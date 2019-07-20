import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'loyalists', text: 'most likely to vote the party line', value: 'loyalists' },
  { key: 'mavericks', text: 'least likely to vote the party line', value: 'mavericks' },
  { key: 'truants', text: 'most missed votes', value: 'truants' },
  { key: 'voting', text: 'least missed votes', value: 'voting' },
]

const Sort = () => (
  <Dropdown
   placeholder='sort by ...'
   fluid
   selection
   options={options}
 />
)

export default Sort
