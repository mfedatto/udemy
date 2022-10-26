import "./hello-world-button.scss";

class HelloWorldButton {
    render() {
        const body = document.querySelector("body");
        const button = document.createElement("button");

        button.innerHTML = "Hello world";
        button.onclick = function() {
            const p = document.createElement("p");

            p.innerHTML = "Hello world";

            p.classList.add("hello-world-text");

            body.appendChild(p);
        };

        button.classList.add("hello-world-button");

        body.appendChild(button);
    }
}

export default HelloWorldButton;
