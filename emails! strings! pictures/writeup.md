## emails! strings! pictures!

### Challenge Name
emails! strings! pictures!

Participants are presented with an HTML page containing information about cybersecurity and a form to send a message. A fake flag is embedded in the title of the webpage. The challenge involves uncovering a hidden message using various techniques and tools. 

### Solution Steps
1. Note that the title of the HTML page contains a fake flag: `BITSCTF{H@V3_FUN_0R_N0T!}`.
2. Identify the encoded comment within the HTML code.
3. Use a decoder (like Kali Linux or an online tool like dcode.fr) to decode the comment. The cipher used is Base45.
4. Extract the email address `floof.darkweb.cat@gmail.com` from the decoded information.
5. Send an email to the decoded email address.
6. Receive an auto-response containing a QR code and a hidden message.
7. Utilize the Linux command `strings` to uncover the flag within the QR picture.

### Key Concepts
- HTML analysis to identify hidden comments.
- Base45 decoding to extract a hidden email address.
- Email communication to retrieve additional information.
- Linux command `strings` to extract the flag from the QR picture.

### Conclusion
By carefully examining the HTML code and leveraging various decoding techniques, participants successfully extract the hidden message and uncover
