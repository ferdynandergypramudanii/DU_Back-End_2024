const express = require('express');

const app = express();
const post = require('./post.json');

app.use(express.json());

// routes & controller
app.use('/api', require('./routes/users'));

// kalo ga ditambahain next ga bakal muncul error line 15, sengaja dierrorin tuk ngetes line 15
app.get('/api/user', (req, res, next) => {
     inierror
})

// Handle error internal server
app.use((err, req, res, next) => {
     console.error(err)
     res.status(500).json({
          status: '500 Internal Server Error',
          message: "Something went wrong",
          error: err.message
     });
})

// error handling path not found 404
app.use((req, res) => {
     res.status(404).json({
          status: '404 Not Found',
          message: 'Page not Found'
     });
});


app.listen(3000, () => {
     console.log("Server is running on port 3000");
});

