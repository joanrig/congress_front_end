import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'democrats', text: 'Democrats', value: 'democrats' },
  { key: 'female democrats', text: 'Women Democrats', value: 'female democrats' },
  { key: 'republicans', text: 'Republicans', value: 'republicans' },
  { key: 'female republicans', text: 'Women Republicans', value: 'female republicans' },
  { key: 'female', text: 'Women', value: 'female' },
  { key: 'seniority', text: 'Longest Serving', value: 'seniority' },
  { key: 'loyalists', text: 'Most Loyal', value: 'loyalists' },
  { key: 'mavericks', text: 'Least Loyal', value: 'mavericks' },
  { key: 'truants', text: 'Most Missed Votes', value: 'truants' }
]

const Filter = () => (
  <Filter placeholder='Sort' fluid multiple selection options={options} />
)

export default Filter
