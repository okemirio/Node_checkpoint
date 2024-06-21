const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');

// Task 1: Print "HELLO WORLD" to the console
console.log("HELLO WORLD");

// Task 2: Create a server that responds with "<h1>Hello Node!!!!</h1>\n"
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});


// Task 3: Create a file named "welcome.txt" with content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created successfully.');

  // Read the contents of "welcome.txt" and log it to the console
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Content of "welcome.txt":', data);
  });
});

// Task 4: Generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });
  return password;
}

// Generate and log a random password
const password = generateRandomPassword();
console.log('Generated Password:', password);

// Task 5: Send an email using nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail email address
    pass: 'your-password', // Replace with your Gmail password or app-specific password
  },
});

const mailOptions = {
  from: 'your-email@gmail.com', // Replace with your Gmail email address
  to: 'recipient-email@example.com', // Replace with recipient's email address
  subject: 'Sending Email using Node.js',
  text: 'Hello from Node.js!',
  html: '<h1>Hello from Node.js!</h1>',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred:', error);
  }
  console.log('Email sent:', info.response);
});

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

