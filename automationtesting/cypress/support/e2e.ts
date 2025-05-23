import 'cypress-mochawesome-reporter/register';

// Avoid printing fetch & xhr logs 
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
    const style = app.document.createElement("style");
    style.innerHTML=".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", '');
    app.document.head.appendChild(style);
}