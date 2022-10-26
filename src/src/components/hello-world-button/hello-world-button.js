class HelloWorldButton {
    render() {
        const body = document.querySelector("body");
        const button = document.createElement("button");

        button.innerHTML = "Hello world";

        body.appendChild(button);
    }
}

export default HelloWorldButton;
