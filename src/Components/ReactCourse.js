import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';
import reactConfig from './Content/reactConfig';
import { CodeBlock } from "react-code-blocks";

const ReactCourse = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const accordionElements = reactConfig.map((topic, index) => (
    <AccordionLayout
      key={index}
      title={topic.title}
      index={index + 1}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <div className='text-2xl flex flex-wrap'>{topic.content}</div>
      {/* <div className='text-white bg-gray-900 h-90 w-80'>{topic.code}</div> */}
      <div>
        <CodeBlock
          text={topic.code}
          language='js'
          showLineNumbers={true}
          theme='atom-one-dark'
          startingLineNumber={1}
          codeBlock={{ lineNumbers: true, wrapLines: true }}
        />
      </div>
    </AccordionLayout>
  ));
  return (
    <div>{accordionElements}</div>
  );
};
export default ReactCourse;