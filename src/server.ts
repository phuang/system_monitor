import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Recreate __filename and __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// 2. Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// 3. Optional: A simple API route to test TS types
app.get('/api/status', (req: Request, res: Response) => {
    res.json({ message: "Server is running smoothly!" });
});

app.listen(PORT, () => {
    console.log(`Server is vibing and listening on http://localhost:${PORT}`);
});