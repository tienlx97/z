import React from 'react';

type FlagStudiableMetadataContainerProps = {
  studiableMetadataType: any;
  questionType: 2 | 4;
};

export const FlagStudiableMetadataContainer = ({
  questionType,
  studiableMetadataType,
}: FlagStudiableMetadataContainerProps) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <section className="f1eh5147">
        <img
          style={{
            maxHeight: '1rem',
            maxWidth: '1rem',
          }}
          alt="Report this question"
          srcSet="https://assets.quizlet.com/a/j/dist/app/i/learning_assistant/flag.d36c67607d3916d.png, https://assets.quizlet.com/a/j/dist/app/i/learning_assistant/flag@2x.dd91583cc983fcd.png 2x"
        />
      </section>
    </div>
  );
};
