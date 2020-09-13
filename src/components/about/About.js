import React, { Component } from 'react';

import { imagePath } from '../../utils/assetUtils';
import styles from './about.module.scss';
import Button from '@material-ui/core/Button';

class About extends Component {
  buttonClick = () => {
    this.props.history.push({
      pathname: '/about',
      search: '?query=abc',
      state: { detail: 'some_value' }
    });
  };
  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.buttonClick}>
          Default
        </Button>
        <h1 className={styles.title}>About pagexxxx</h1>
        <img className={styles.reactLogo} src={imagePath('react.svg')} alt="" />
      </div>
    );
  }
}

export default About;
