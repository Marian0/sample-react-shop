import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectoryItems } from 'redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({directory}) => (
  <div className="directory">
    {directory.map((section, index) => <MenuItem key={index} {...section} />)}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directory: selectDirectoryItems
});

export default connect(mapStateToProps)(Directory);