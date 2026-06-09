// // const express = require('express');
// // const path = require('path');
// // const dotenv = require('dotenv');

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(express.static(path.join(__dirname, 'public')));

// // // View Engine Setup
// // app.set('view engine', 'ejs');
// // app.set('views', path.join(__dirname, 'views'));

// // // Static Premium Data (Client ko dikhane ke liye)
// // const portfolioData = {
// //     name: "YOUR NAME", // Yahan apna naam likhein
// //     title: "Full-Stack Developer & UI Designer",
// //     education: [
// //         { degree: "B.Tech in Computer Science", institution: "Your University Name", year: "2022 - 2026" },
// //         { degree: "Higher Secondary Education", institution: "Your School Name", year: "2020 - 2022" }
// //     ],
// //     internships: [
// //         { role: "Web Developer Intern", company: "Tech Innovators Lab", duration: "3 Months (2025)", desc: "Worked on premium UI/UX enhancements and API integrations." },
// //         { role: "Frontend Assistant", company: "Alpha Web Solutions", duration: "2 Months (2024)", desc: "Developed responsive landing pages using modern JavaScript frameworks." }
// //     ]
// // };

// // // Main Route
// // app.get('/', (req, res) => {
// //     res.render('index', { data: portfolioData });
// // });

// // app.listen(PORT, () => {
// //     console.log(`VIP Animation Portfolio live at http://localhost:${PORT}`);
// // });

// const express = require('express');
// const mysql = require('mysql2');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Body Parsers (Form data read karne ke liye)
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static folder configuration
// app.use(express.static(path.join(__dirname, 'public')));

// // EJS View Engine Setup
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // MySQL Database Connection Pool
// const db = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || '', // Apne XAMPP/MySQL ka password daalein
//     database: process.env.DB_NAME || 'portfolio_db',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// // Auto-Create Table if not exists
// db.query(`
//     CREATE TABLE IF NOT EXISTS contacts (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         message TEXT NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )
// `, (err) => {
//     if (err) console.error("Database Table Error:", err);
//     else console.log("🟢 MySQL Contacts Table Ready & Verified.");
// });

// // Mock Portfolio Data for rendering
// const portfolioData = {
//     name: "Dalchand Ahirwar"
// };

// // GET Route: Render Portfolio Home Page
// app.get('/', (req, res) => {
//     res.render('index', { data: portfolioData });
// });

// // POST Route: Secure Database Insertion
// app.post('/contact', (req, res) => {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).send("All fields are required.");
//     }

//     const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
//     db.query(query, [name, email, message], (err, result) => {
//         if (err) {
//             console.error("Database Insertion Error:", err);
//             return res.send("<script>alert('Database Error! Please try again.'); window.location='/';</script>");
//         }
        
//         console.log(`💾 Data Saved Successfully! ID: ${result.insertId}`);
//         res.send("<script>alert('VIP Message Encrypted & Saved Successfully!'); window.location='/';</script>");
//     });
// });

// // Start Server Config
// app.listen(PORT, () => {
//     console.log(`🚀 VIP Portfolio Engine Live at http://localhost:${PORT}`);
// });


const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body-parsing Middlewares for parsing forms parameters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Hosting Static folder files architectures
app.use(express.static(path.join(__dirname, 'public')));

// EJS View Layer Compilation Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MySQL Database Connectivity Initialization Engine
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '', 
    database: process.env.DB_NAME || 'portfolio_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Auto-Verify Database Table Integrity Block
db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`, (err) => {
    if (err) console.error("🛑 Database Core Check Crash:", err);
    else console.log("🟢 VIP Production Contacts Table Active & Verified.");
});

// Mock Global Config Object for EJS Template Rendering
const sampleData = { name: "Dalchand Ahirwar" };

// GET Route: Render Homepage Entry Metrics
app.get('/', (req, res) => {
    res.render('index', { data: sampleData });
});

// POST Route: Secure Database Ingestion Pipeline
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send("Parameter requirements unfulfilled.");
    }

    const insertionSQL = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    db.query(insertionSQL, [name, email, message], (err, executionResult) => {
        if (err) {
            console.error("❌ Database Injection Halt Exception:", err);
            return res.send("<script>alert('SQL Pipeline Error! Check Connectivity.'); window.location='/';</script>");
        }
        
        console.log(`💾 Secure Entry Saved! Row ID Block: ${executionResult.insertId}`);
        // Browser alerts client smoothly with direct window relocation reload
        res.send("<script>alert('VIP Transmission Saved into MySQL Successfully!'); window.location='/';</script>");
    });
});

// Run execution listener
app.listen(PORT, () => {
    console.log(`🚀 VIP Engine Processing live at http://localhost:${PORT}`);
});