import React, { Component } from 'react'
import { Menu as SemanticMenu } from 'semantic-ui-react'
import './Menu.css'
import { Link, Route } from 'wouter'
import Welcome from 'app/welcome/Welcome'
import Bio from 'app/bio/Bio'
import Experience from 'app/experience/Experience'
import TechStack from 'app/tech-stack/TechStack'
import Contact from 'app/contact/Contact'
import { toTitleCase } from 'app/util/string-utils'
import { Tuple } from 'app/util/types'
import { Path } from 'wouter/types/use-location'

export default class extends Component {

  menus: Tuple<Path, () => JSX.Element>[] = [
    Tuple.create('/', Welcome),
    Tuple.create('/about-me', Bio),
    Tuple.create('/experience', Experience),
    Tuple.create('/technology-stack', TechStack),
    Tuple.create('/contact', Contact)
  ]

  state = { activeItem: this.menus[0].first }

  menuClass = (path: string) => {
    const activeClass = (path === this.state.activeItem ? 'active' : '')
    return `item ${activeClass}`.trim()
  }

  render() {
    const menuName = (path: string) =>
      path.replace('/', '')

    return <>
      {
        this.menus.map(tuple =>
          <Route path={tuple.first} component={tuple.second}/>
        )
      }

      <SemanticMenu secondary inverted fixed="top">
        {
          this.menus.slice(1).map(tuple =>
            <Link
              href={tuple.first}
              className={this.menuClass(menuName(tuple.first))}
              onClick={() => this.setState({ activeItem: menuName(tuple.first) })}
            >
              {toTitleCase(menuName(tuple.first), '-')}
            </Link>
          )
        }
      </SemanticMenu>
    </>
  }
}
