const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    content: "Visit Google"
}

let rootElem = document.querySelector("#root");

// NOrmal code
/* 
function renderElem(elem, parentElem,){
    let domElem = document.createElement(elem.type);
    domElem.innerHTML = elem.content;
    domElem.setAttribute("href", elem.props.href);
    domElem.setAttribute("target", elem.props.target);

    parentElem.appendChild(domElem)
} 
*/

// Loop based code
function renderElem(elem, parentElem,){
    let domElem = document.createElement(elem.type);
    domElem.innerHTML = elem.content;
    for(prop in elem.props){
        if(prop == "content"){
            continue;
        }

        domElem.setAttribute(prop, elem.props[prop]);
    }

    parentElem.appendChild(domElem);
}

renderElem(reactElement, rootElem);