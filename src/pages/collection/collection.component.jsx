import React from 'react';
import { selectCollection } from 'redux/shop/shop.selector';
import { connect } from 'react-redux';
import CollectionItem from 'components/collection-item/collection-item.component';
import './collection.styles.scss';

const ColectionPage = ({ collection: { title, items } }) => (
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
);

const mapStateToprops = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToprops)(ColectionPage);