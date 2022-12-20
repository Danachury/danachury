import React from 'react'
import { Grid, Header, List, SemanticICONS, SemanticWIDTHS } from 'semantic-ui-react'
import techStack from './techStack.json'
import './TechStack.css'

export default function () {
  return (
    <Grid columns={techStack.length as SemanticWIDTHS} relaxed="very">
      {
        techStack.map(stack =>
          <Grid.Column>
            <Header as="h2" dividing inverted content={stack.name}/>
            <List inverted>
              {
                stack.values.map(stack =>
                  <List.Item className="TechStack-item">
                    <List.Icon name={stack.icon as SemanticICONS} size="large" verticalAlign="middle"/>
                    <List.Content>
                      <List.Header as="a" content={stack.name}/>
                      <List.Description content={'Time: ' + stack.experience}/>
                    </List.Content>
                  </List.Item>
                )
              }
            </List>
          </Grid.Column>
        )
      }
    </Grid>
  )
}
