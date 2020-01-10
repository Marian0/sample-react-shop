import React from 'react';
import CollectionPreview from 'components/collection-preview/collection-preview.component';
import { selectAllProducts } from 'redux/products/products.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ products }) => (
  <div className="shop-page">
    {
      products.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  products: selectAllProducts
});

export default connect(mapStateToProps)(ShopPage);