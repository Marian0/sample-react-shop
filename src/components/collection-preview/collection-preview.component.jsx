import React from 'react';
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => (
  <div>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {
        items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  </div>  
);

export default CollectionPreview;