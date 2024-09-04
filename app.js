const parent = React.createElement("div",{id : "parent"}, 
React.createElement("div", {id:"child"}, 
[React.createElement("h1", {id:"h1"}, "hi im h1"), React.createElement("h2", {id:"h2"}, "hi im h2")]));
const body = document.querySelector("body");
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
console.log(parent);
// const heading = React.createElement("h1", {},"hello from react!");
        
//         root.render(heading);