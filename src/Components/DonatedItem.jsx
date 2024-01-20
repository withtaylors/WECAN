import React from 'react';
import Card3 from './Card3';

function DonatedItem({ id, challengeName, explanation, imageSrc }) {
  return (
    <Card3
      key={id}
      title={`챌린지명: ${challengeName}`}
      content={explanation}
      imageSrc={imageSrc}
    />
  );
}

export default DonatedItem;
