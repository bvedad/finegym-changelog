import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'changelog');
const publicDir = path.join(process.cwd(), 'public');

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));

let latestDate = '';

for (const file of files) {
  const { data } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
  if (data.date && data.date > latestDate) {
    latestDate = data.date;
  }
}

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(
  path.join(publicDir, 'latest.json'),
  JSON.stringify({ date: latestDate }) + '\n',
);

console.log(`Generated latest.json with date: ${latestDate}`);
