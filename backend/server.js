const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // [cite: 50]
app.use(express.json()); // [cite: 51]

const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir); // [cite: 54, 55]

app.get('/api/demo', (req, res) => {
    const logMessage = `Request at ${new Date().toISOString()}: ${req.ip}\n`;
    fs.appendFileSync(path.join(logsDir, 'access.log'), logMessage); // [cite: 59, 60]
    res.json({
        git: { title: 'Advanced Git Workflow', detail: '6604101408' }, // ใส่รหัสนักศึกษาในข้อมูล
        docker: { title: 'Advanced Docker', detail: 'Multi-stage Build' }
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // [cite: 77]