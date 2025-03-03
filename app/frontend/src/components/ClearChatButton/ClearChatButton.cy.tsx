import React from 'react'
import { ClearChatButton } from './ClearChatButton'

describe('<ClearChatButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
        <ClearChatButton
            onClick={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
  })
})