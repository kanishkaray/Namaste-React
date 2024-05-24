const head1 = React.createElement("h1", {}, "Heading 1");
const head2 = React.createElement("h1", {}, "Heading 2");
const heading = React.createElement("div", { className: "heading" }, [
  head1,
  head2,
]);

const para1 = React.createElement(
  "p",
  { id: "first-para" },
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error."
);
const para2 = React.createElement(
  "p",
  {
    id: "second-para",
    style: {
      backgroundColor: "red",
      color: "white",
    },
  },
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error."
);
const paragraph = React.createElement("div", { id: "paragraph" }, [
  para1,
  para2,
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render([heading, paragraph]);
