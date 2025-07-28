import React from "react";
import ReactDOM from "react-dom/client";

const first = React.createElement("div", {}, [
    React.createElement("div", { id: "firstdiv", key : "firstdiv" }, [
        React.createElement("h1", { id: "first", key: "Aprilia" }, "Aprilia Rs 457"),
        React.createElement("h2", { id: "second", key: "Ninja500" }, "Ninja 500")
    ]),
    React.createElement("div", { id: "seconddiv", key : "seconddiv" }, [
        React.createElement("h1", { id: "third", key: "Ninja400" }, "Ninja 400"),
        React.createElement("h2", { id: "fourth", key: "Ninja300" }, "Ninja 300")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(first)