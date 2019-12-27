import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

  constructor() {
    super();

    this.state = {
      sections: [
        { 
          title: "Cellphones", 
          subtitle: "Latest models",
          imageUrl: "http://lorempixel.com/400/200/",
          size: "small",
        },
        {
          title: "Laptops",
          subtitle: "Latest models",
          imageUrl: "http://lorempixel.com/400/200/",
          size: "small",
        },
        {
          title: "Games",
          subtitle: "Latest models",
          imageUrl: "http://lorempixel.com/400/200/",
          size: "small",
        },
        {
          title: "Accesories",
          subtitle: "Latest models",
          imageUrl: "http://lorempixel.com/400/200/",
          size: "small",
        },
        {
          title: "Simulators",
          subtitle: "Latest models",
          imageUrl: "http://lorempixel.com/400/200/",
          size: "small",
        },
      ]
    }
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