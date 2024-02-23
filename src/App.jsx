import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/Core-Concept.jsx";
import TabButtom from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectorTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectorTopic(selectedButton);
  }

    console.log("APP COMPONENT EXECUTING");


let textContent = <p>Please select a topic</p>

if(selectedTopic){
  textContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
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
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtom isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButtom>
            <TabButtom isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>jsx</TabButtom>
            <TabButtom isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>props</TabButtom>
            <TabButtom isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>state</TabButtom>
          </menu>
          {textContent}
        </section>
      </main>
    </div>
  );
}

export default App;

