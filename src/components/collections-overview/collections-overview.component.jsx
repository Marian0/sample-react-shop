import React from 'react';
import './collections-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from 'components/collection-preview/collection-preview.component';
import { selectCollections } from 'redux/shop/shop.selector';
import { connect } from 'react-redux';


const CollectionsOverview = ({ products }) => (
  <div className="collections-overview">
    {
      products.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  products: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);