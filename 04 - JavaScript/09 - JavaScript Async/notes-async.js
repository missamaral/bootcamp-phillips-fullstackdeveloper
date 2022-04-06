//promise - an async object with a pending value. it may then be resolved or rejected.

//an async function
    async function resolvePromise() {
        const myPromise = new Promise((resolve, reject) => {
            window.setTimeout(() => {
                resolve('Resolved...');
            }, 3000);
        });

        const resolved = await myPromise
            .then((result) => result + 'going through "then" instructions...')
            .then((result) => result + 'and done!')
            .catch((err) => console.log(err.message));

        return resolved;
    }

// an async function with try catch block
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolved...');
        }, 3000);
    });

    let result;

        try {
            result = await myPromise
                .then((result) => result + 'going through "then" instructions...')
                .then((result) => result + 'and done!')
        } catch(err) {
            result = err.message;
        }

    return resolved;
}

//API - application programming interface
//JSON - JavaScript Object Notation

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

    //fetch returns a promise

//fetch with GET method

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})

    .then(response => response.json())
    .then(json => console.log(json))

//fetch with POST method

fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})

.then(response => response.json())
.then(json => console.log(json))


