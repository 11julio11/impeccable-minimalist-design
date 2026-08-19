const fs = require('fs');
const path = require('path');

const dir = 'c:/Mis_Proyectos(github)/impeccable-minimalist-design/skill/reference';
const files = fs.readdirSync(dir);

let count = 0;
for (const file of files) {
    if (file.endsWith('.md')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('<!-- Este archivo fue adaptado para Minimalist Design -->')) {
            content = content.replace('<!-- Este archivo fue adaptado para Minimalist Design -->', '<!-- This file was adapted for Minimalist Design -->');
            fs.writeFileSync(filePath, content, 'utf8');
            count++;
        }
    }
}
console.log(`Translated comment in ${count} files.`);
