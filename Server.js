const express = require('express');

const path = require('path');

const app = express();


const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));


// frontend entry
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname,'build/index.html'));
});



// Handles unknown routes
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    console.log(err);
    res.send('404: Page Not Found');
    next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

