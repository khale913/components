import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "asdfdsa",
      label: "Can I use React in my project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "asdfdfffff",
      label: "Can I use Javascript in my project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "fl;l",
      label: "Can I use CSS in my project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
