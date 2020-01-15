import React from 'react';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from 'components/collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from 'redux/shop/shop.selector';
import { connect } from 'react-redux';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))
    }
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);