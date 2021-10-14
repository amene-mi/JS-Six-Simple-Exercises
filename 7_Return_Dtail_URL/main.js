const btn = document.getElementById('show');
const formEI = document.getElementById('form');
const output = document.getElementById('output');

class Url {
    #url;
    debugger;
    constructor(url){
        this.#url = new URL(url);
    }
    href() {
        return this.#url.href;
    }

    origin() {
        return this.#url.origin;
    }

    host() {
        return this.#url.hostname;
    }

    port() {
        return this.#url.port;
    }

    protocol() {
        return this.#url.protocol;
    }

    path() {
        return this.#url.pathname;
    }

    anchor() {
        return this.#url.hash;
    }

    query() {
        return this.#url.search.substr(1).split('&').reduce((obj, property) =>
            (Object.assign(obj, Object.fromEntries([property.split('=')]))), {});
    }
}

function getUrlParts(url) {
    const getURL = new Url(url);
    console.log(getURL.protocol());
    console.log(getURL.anchor());
    console.log(getURL.path());
}

const validation = (form) => {
    try {
        if (form.elements[0].value) {
            getUrlParts(form.elements[0].value);
        }
        else { throw 'Fields are required..!'; }
    } catch (error) {
        alert(error);
        console.error(error);
    }
};

const onBtn = (form = formEI) => validation(form);

btn.addEventListener('click', () => onBtn());
