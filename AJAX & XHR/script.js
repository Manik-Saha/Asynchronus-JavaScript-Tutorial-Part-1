const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://jsonplaceholder.typicode.com/comments",
);

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready 

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) { 
        const data = JSON.parse(this.responseText);
console.log(data)
        data.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${product.name}</strong> - ${product.email}`;
            document.querySelector("#result").appendChild(li);
        });
    }
}

xhr.send();