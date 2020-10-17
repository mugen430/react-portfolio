import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={require('./img1.jpg')}
                        alt="authorimage"
                        className="avatar-img"
                        />
                        <div className="banner-text"> 
                        <h1>Full Stack Developer</h1>
                        
                        <hr />
                        <p>HTML/CSS | Bootstrap | JavaScript | SQL | MongoDB | Express | React | NodeJS </p>
                        <hr />
                        <div className ="social"></div>
                            {/* GitHub */}
                            <a href="https://github.com/mugen430" target="blank"> 
                            <i className="fa fa-github"></i>
                            </a>
                            {/* linkedIN */}
                            <a href="https://www.linkedin.com/in/maverick-acampado-765a171a8/" target="blank"> 
                            <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;