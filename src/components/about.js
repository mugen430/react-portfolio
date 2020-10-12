import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Maverick Acampado</h2>
            <img
              src="https://avatars0.githubusercontent.com/u/66350496?s=460&u=101e390d8b0982b965e51177f51a85d0e1a8c098&v=4"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>As an aspiring and eager to learn and work Full Stack Developer, I aspire to be the best version of myself everyday,
             A father to a beautiful little girl, and a husband to an amazing woman, it has always been my dream to become a Software Engineer and build anything with my own two hands,
             I took the leap and went above and beyond to learn how to code so I can pave my path to succeeding and accomplishing my dreams, to be able to provide a better life for my growing family, and do what I love</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    <a href="https://www.linkedin.com/in/maverick-acampado-765a171a8/" target="blank">linkedin</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github" aria-hidden="true" />
                    <a href="https://github.com/mugen430" target="blank">github</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    acampado.maverick@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;