const rootElement = document.getElementById("root");

function createReactElement(jsx) {
    return document.createElement(jsx.type);
}

rootElement.render = function(element) {
    const reactElement = createReactElement(element);
    reactElement.innerHTML = element.children;
    for (const [key, value] of Object.entries(element.prop)) {
        if (key === "children") {
            continue;
        } else {
            reactElement.setAttribute(key, value);
        }
    }
    this.appendChild(reactElement);
}

const jsx = {
    type: "a",
    prop: {
        href: "http://www.google.com",
        target: "_blank",
    },
    children: "Click me to visit google",
}


rootElement.render(jsx);