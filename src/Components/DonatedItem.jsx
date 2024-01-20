import React, { useState } from 'react';
import Card3 from './Card3';

function DonatedItem({ id, challengeName, explanation, imageSrc }) {
  // 이 컴포넌트의 토글 상태를 위한 상태 훅 추가
  const [isOpen, setIsOpen] = useState(false);

  // Card3 컴포넌트의 토글을 처리하는 함수
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card3
      key={id}
      title={`챌린지명: ${challengeName}`}
      content={explanation}
      imageSrc={imageSrc}
      isOpen={isOpen}
      onToggle={handleToggle}
    />
  );
}

export default DonatedItem;
