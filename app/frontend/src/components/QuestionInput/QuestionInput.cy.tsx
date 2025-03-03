import React from 'react'
import { QuestionInput } from './QuestionInput'

describe('<QuestionInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<QuestionInput />)
  })
})