import React from 'react';
import './collections-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from 'components/collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from 'redux/shop/shop.selector';
import { connect } from 'react-redux';


const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);