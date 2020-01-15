import React from 'react';
import CollectionItem from 'components/collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title}</TitleContainer>
    <PreviewContainer>
      {
        items
          .filter((it, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;