const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const app = express();
const port = 6225;

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Serve the HTML form to upload files
app.get('/chall4', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>File Comparison</h1>
        <form action="/compare" method="post" enctype="multipart/form-data">
          <input type="file" name="file1" required><br>
          <input type="file" name="file2" required><br>
          <button type="submit">Compare</button>
        </form>
      </body>
    </html>
  `);
});

// Handle the file comparison when the form is submitted
app.post('/compare', upload.fields([{ name: 'file1', maxCount: 1 }, { name: 'file2', maxCount: 1 }]), (req, res) => {
  try {
    const file1Contents = req.files['file1'][0].buffer;
    const file2Contents = req.files['file2'][0].buffer;

    if (Buffer.compare(file1Contents, file2Contents) === 0) {
      res.send('The files are the same.');
    } else {
      const md5Hash1 = crypto.createHash('md5').update(file1Contents).digest('hex');
      const md5Hash2 = crypto.createHash('md5').update(file2Contents).digest('hex');

      if (md5Hash1 === md5Hash2) {
        res.send('BITSCTF{C011510N_F7W_ab54ty}');
      } else {
        res.send('The files are different.');
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
