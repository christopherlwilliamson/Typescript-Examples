function getUserViaXMLHttp() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");
    xhr.send();
    xhr.onload = function() {
        debugger;
        xhr.status == 200
            ? console.log("Got the user via XMLHttpRequest as: ", xhr.response)
            : console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    };

    xhr.onprogress = function(event) {
        debugger;
        const message = event.lengthComputable
            ? `Received ${event.loaded} of ${event.total} bytes`
            : `Received ${event.loaded} bytes`;
        console.log(message)
    };

    xhr.onerror = function() {
        debugger;
        console.log("Something went wrong!");
    };
}

function getUserViaFetch() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            debugger;
            return response.json();
        })
        .then(user => {
            debugger;
            console.log("Got the user via fetch as: ", user);
        });
}