import { useState } from "react";
import TabButton from "../TabButton";
import Section from "../Section.jsx";
import Tabs from "../Tabs.jsx";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // Selected button => 'Components', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = (selectedTopic && (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic]?.title}</h3>
      <p>{EXAMPLES[selectedTopic]?.description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic]?.code}</code>
      </pre>
    </div>
  )) || <p>Please select a topic.</p>;

  let topics = ["components", "jsx", "props", "state"];

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {topics.map((topic) => (
              <TabButton
                key={topic}
                onClick={() => handleSelect(topic)}
                isSelected={selectedTopic === topic}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
