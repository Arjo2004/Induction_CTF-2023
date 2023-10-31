## Keyboard? Login?

### Challenge Name
Keyboard? Login?

Participants are provided with a Wireshark PCAP file consisting of URB protocol packets. The task involves deciphering the packets to identify that the keyboard is the input device and determining the device configurations to recognize it as a Corsair branded keyboard. Additionally, participants need to decode the HID data in the URB protocol and create a Python script to retrieve the login credentials for the website.

### Solution Steps
1. Analyze the Wireshark PCAP file containing URB protocol packets.
2. Identify that the keyboard is the input device based on the packet analysis.
3. Investigate the device configurations to confirm that the keyboard is of Corsair brand.
4. Notice that the keyboard is switched from a USB3 to a USB2 port, leading to the output of 32 bits as HID data in the URB protocol.
5. Trial and error the codes per key using a virtual or physically attached keyboard, as there might be limited resources available online for the specific HID data interpretation.
6. Use the decoded codes to write a Python script that retrieves the login and password for the website.
7. Extract the username as "floofcat" and the password as "bitskrieg69420" from the decoded HID data.

### Key Concepts
- Analyzing Wireshark PCAP files containing URB protocol packets.
- Identifying the input device and device configurations from the URB protocol.
- Decoding HID data and interpreting the keyboard input codes through trial and error.
- Creating a Python script to extract login credentials from the decoded HID data.

### Conclusion
Through careful analysis of the Wireshark PCAP file and an understanding of the URB protocol, participants successfully decode the HID data and extract the login credentials for the website. This involves recognizing the keyboard as a Corsair branded device and interpreting the input codes, ultimately leading to the retrieval of the username and password, "floofcat" and "bitskrieg69420," respectively.
