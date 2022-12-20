import React from 'react'
import { Header, List } from 'semantic-ui-react'

export default function () {
  return (
    <div>
      <Header as="h2" dividing inverted content="Jobs History"/>
      <List inverted>
        <List.Item className="TechStack-item">
          <List.Icon name="building" size="large"/>
          <List.Content>
            <List.Header as="a">
              <a href="https://appgate.com" target="_blank" rel="noreferrer">AppGate</a>
            </List.Header>
            <List.Description>
              <h5>Since January 2017</h5>
              <code>Development, deployment and maintenance of internal software applications.</code>
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
  )
}
