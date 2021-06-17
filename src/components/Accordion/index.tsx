import React, { useState, useRef } from 'react';
import { FaChevronRight as ArrowRightIcon } from 'react-icons/fa';
import * as S from './styles';

type AccordionProps = {
  question: string;
  answer: string;
};

const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = useRef<HTMLDivElement>(null);

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container isOpen={isOpen}>
      <S.Header
        data-testid="accordion-header"
        onClick={() => handleToggleAccordion()}
      >
        <h3>{question}</h3>
        <ArrowRightIcon />
      </S.Header>

      <S.Content
        ref={content}
        data-testid="accordion-content"
        aria-hidden={!isOpen}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </S.Container>
  );
};

export default Accordion;
