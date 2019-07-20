import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'loyalists', text: 'most likely to vote the party line', value: 'most moyal' },
  { key: 'mavericks', text: 'least likely to vote the party line', value: 'most maverick' },
  { key: 'truants', text: 'most missed votes', value: 'most missed votes' },
  { key: 'voting', text: 'least missed votes', value: 'least missed votes' },
]

const Sort = () => (
  <Dropdown placeholder='Sort by ...' fluid multiple selection options={options} />
)

export default Sort
