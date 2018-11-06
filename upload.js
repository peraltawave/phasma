const express = require('express');
const fileUpload = require('../lib/index.js');
const app = express();

app.use('/form', express.static(__dirname + '/index.html'));

// default options
app.use(fileUpload());

app.get('/ping', function(req, res) {
  res.send('pong');
});

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (Object.keys(req.files).length == 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + '/uploads/' + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded to ' + uploadPath);
  });
});

app.listen(8000, function() {
  console.log('Express server listening on port 8000'); // eslint-disable-line
});



//////////////////////////////////////////////
// const express = require('express');
// const fileUpload = require('express-fileupload');
// const app = express();

// // default options
// app.use(fileUpload());

// app.post('/upload', function(req, res) {
//   if (Object.keys(req.files).length == 0) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   let sampleFile = req.files.sampleFile;

//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
//     if (err)
//       return res.status(500).send(err);

//     res.send('File uploaded!');
//   });
// });