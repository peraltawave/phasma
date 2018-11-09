app.post('/upload', function(req, res) {
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
  

    let pathString = '/Users/benCarson/Desktop/CodingCamp/phasma/public/pictures/' + sampleFile.name;
    console.log(pathString);
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(pathString, function(err) {
      if (err)
        return res.status(500).send(err);
  
       db.Picture.insert  
      res.send('File uploaded!');
    });
  });
};
