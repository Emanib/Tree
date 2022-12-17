import "./styles.css";
import React from "react";
type IEntry = {
  name: string | undefined;
  children: IEntry[];
};
const files = {
  children: [
    {
      name: "node_modules",
      children: [
        { name: "utils" },
        {
          children: [
            { name: "api-testing" },
            { children: [{ name: "hello nestd" }] }
          ]
        }
      ]
    },
    {
      name: "package.json"
    },
    { name: "src", children: [{ name: "helprs.js" }] },
    { name: "config.ts" },
    { name: "react-scripts" }
  ]
};
const Column = ({ entry, depth }: { entry: IEntry; depth: number }) => {
  const [isExpand, setExpand] = React.useState(false);
  return (
    <div style={{ paddingLeft: ` ${depth * 5}px ` }}>
      {entry.children ? (
        <button onClick={() => setExpand(!isExpand)} className="btn-expand">
          {" "}
          {isExpand ? "-" : "+"}
          {entry.name}
        </button>
      ) : (
        <div> {entry.name}</div>
      )}
      {isExpand && (
        <div>
          {entry.children?.map((file) => (
            <Column entry={file} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Tree browser components</h1>
      <div className="container">
        {" "}
        {files?.children.map((file) => {
          console.log(file, " destrcutre");
          return <Column entry={file} depth={1} />;
        })}{" "}
      </div>
    </div>
  );
}
