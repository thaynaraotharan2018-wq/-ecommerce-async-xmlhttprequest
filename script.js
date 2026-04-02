var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Resposta:", xhr.responseText);
    }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.send();
