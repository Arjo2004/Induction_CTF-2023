const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const app = express();
const port = 3000;

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/check_hashes', upload.fields([{ name: 'file1', maxCount: 1 }, { name: 'file2', maxCount: 1 }]), (req, res) => {
    const { file1, file2 } = req.files;

    if (!file1 || !file2) {
        return res.status(400).json({ message: 'Please select two files.' });
    }

    // Calculate MD5 hashes of both files
    const hash1 = crypto.createHash('md5').update(file1[0].buffer).digest('hex');
    const hash2 = crypto.createHash('md5').update(file2[0].buffer).digest('hex');

    if (hash1 === hash2) {
        return res.status(200).json({ message: 'BITSCTF{C011510N_F7W_ab54ty}' });
    } else {
        return res.status(200).json({ message: 'This is not what you should do' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
