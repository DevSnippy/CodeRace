import express from 'express';
import { readFile } from 'fs/promises';
import cors from 'cors';
import { quickSort } from './quickSort.mjs';
import { arrOf1kNum , arrOf10kNum , arrOf100kNum , mil , arrOfHalfMil} from './arrays.mjs';

const app = express();
const port = 3001;

app.use(cors());
























app.get('/quickSort/sorted/500', (req, res) => { 
  const sortedArr = (quickSort(arrOfHalfMil)) 
  console.log (sortedArr)
  res.send((quickSort(arrOfHalfMil)));
});

app.get('/JSjson/10mb', async (req, res) => {
  try {
    const JSdata = await readFile('../jsons/10mb.json', 'utf8');
    res.json(JSON.parse(JSdata));
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
