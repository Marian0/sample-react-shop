import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from 'redux/shop/shop.selector';
import { connect } from 'react-redux';
import WithSpinner from 'components/with-spinner/with-spinner.component';
import { compose } from 'redux';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;