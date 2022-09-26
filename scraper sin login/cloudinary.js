const cloudinary = require('cloudinary').v2; // Make sure to use v2


cloudinary.config({ 
    cloud_name: 'israignitesting', 
    api_key: '212623764458432', 
    api_secret: '87rC5Of0R2vQCcu9k6YhbLEZqOg' 
  });

cloudinary.uploader.upload_stream(
  uploadOptions, 
  (error, result) => { /* Do something with result! */ }
).end(screenshotBuffer);