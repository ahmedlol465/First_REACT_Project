import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/Core-Concept.jsx";
import TabButtom from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

export function App() {
  const [selectedTopic, setSelectorTopic] = useState("please click a button ");

  function handleSelect(selectedButton) {
    setSelectorTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <header>
        <h1>Hello from home</h1>
      </header>

      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concept</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* // insert all data */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtom onSelect={() => handleSelect("components")}>
              Components
            </TabButtom>
            <TabButtom onSelect={() => handleSelect("jsx")}>jsx</TabButtom>
            <TabButtom onSelect={() => handleSelect("props")}>props</TabButtom>
            <TabButtom onSelect={() => handleSelect("state")}>state</TabButtom>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic.title]}</h3>
            <p>{EXAMPLES[selectedTopic.description]}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic.code]}</code>
            </pre>
          </div>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}
