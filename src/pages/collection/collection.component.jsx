import React from 'react';
import { selectCollection } from 'redux/shop/shop.selector';
import { connect } from 'react-redux';
import CollectionItem from 'components/collection-item/collection-item.component';
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </CollectionItemsContainer>
  </CollectionPageContainer>
);

const mapStateToprops = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToprops)(CollectionPage);