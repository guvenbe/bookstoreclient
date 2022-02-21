const  environmentUrl = new Map();
environmentUrl.set('localhost', 'http://localhost:8080');
environmentUrl.set('book-demo-store-bg.herokuapp.com', 'https://book-demo-store-bg.herokuapp.com');

export default environmentUrl.get(window.location.hostname)