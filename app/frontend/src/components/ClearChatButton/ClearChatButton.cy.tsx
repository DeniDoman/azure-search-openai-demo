import React from 'react'
import { ClearChatButton } from './ClearChatButton'

describe('<ClearChatButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ClearChatButton />)
  })
})