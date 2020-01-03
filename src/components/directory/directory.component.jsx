import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import SHOP_DATA from '../../database'

class Directory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.sections.map((section, index) => <MenuItem key={index} {...section} />)}
      </div>
    );
  }
}

export default Directory;