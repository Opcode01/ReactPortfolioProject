import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

// This will inject the Element/Component in the index.html file at the div with the id tag of 'root' 
ReactDOM.render(<App />, document.getElementById('root'));

/* A fetch is really just a Promise - example code */
/*
new Promise((resolve, reject) => {
    return reject(new Error('No bears'));
    
    setTimeout(() => {
        resolve('Bears, beets, battlestar galactica');
    }, 2000);
}).then((quote) => {
    console.log(quote);
})
.catch(error => { 
    console.log(error)
});

*/