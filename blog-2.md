### 2. How to Handle Asynchronous Operations Using Async/Await

Asynchronous programming is a common requirement in modern web applications, define an async function that returns a Promise, and within it, you can use await to pause execution until a Promise resolves.

Here Example:

async function fetchData(url: string): Promise<Data> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

