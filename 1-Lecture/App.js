 const first = React.createElement("div", {}, [
            React.createElement("div", {id : "firstdiv"}, [
                React.createElement("h1", {id : "first"}, "Aprilia Rs 457"),
                React.createElement("h2" ,{ id : "second"}, "Ninja 500")
            ]),
            React.createElement("div", {di: "seconddiv"}, [
                React.createElement("h1", {id: "third"}, "Ninja 400"),
                React.createElement("h2", {id: "fourth"}, "Ninja 300")
            ])
        ]) ;
        const root = ReactDOM.createRoot(document.getElementById("root")) ;
        root.render(first)