const app = {
    title: 'Visibility Toggle',
    details: 'Here are some details'
};

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility ? <p>{app.details}</p> : ' '}
        </div>
    );

    ReactDOM.render(template, appRoot);
};
render();