const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /Mahishadal Raj High School/g, replacement: "Mahishadal Raj High School" },
  { regex: /Raj/g, replacement: "Raj" },
  { regex: /MRHS/g, replacement: "MRHS" },
  { regex: /High School/gi, replacement: "High School" },
  { regex: /Boys'/gi, replacement: "Boys'" },
  { regex: /\bgirls\b/g, replacement: "boys" },
  { regex: /\bGirls\b/g, replacement: "Boys" },
  { regex: /\bgirl child\b/g, replacement: "student" },
  { regex: /\bBoys'\b/g, replacement: "boys'" },
  { regex: /Headmaster/gi, replacement: "Headmaster" },
  { regex: /Paramita Giri \(Bag\)/g, replacement: "Headmaster" },
  { regex: /Oasis Scholarship/gi, replacement: "Oasis Scholarship" },
  { regex: /students/gi, replacement: "students" },
  { regex: /student/gi, replacement: "student" },
  { regex: /মহিষাদল রাজ হাই স্কুল/g, replacement: "মহিষাদল রাজ হাই স্কুল" },
  { regex: /রাজ/g, replacement: "রাজ" },
  { regex: /বিদ্যালয়/g, replacement: "বিদ্যালয়" },
  { regex: /ছাত্র/g, replacement: "ছাত্র" },
  { regex: /ছাত্র/g, replacement: "ছাত্র" },
  { regex: /প্রধান শিক্ষক/g, replacement: "প্রধান শিক্ষক" },
  { regex: /প্রধান শিক্ষক/g, replacement: "প্রধান শিক্ষক" },
  { regex: /ছাত্রশ্রী/g, replacement: "ওয়েসিস স্কলারশিপ" }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        processDirectory(fullPath);
      }
    } else {
      if (
        fullPath.endsWith('.tsx') || 
        fullPath.endsWith('.ts') || 
        fullPath.endsWith('.js') || 
        fullPath.endsWith('.html') ||
        fullPath.endsWith('.css') ||
        fullPath.endsWith('.json') ||
        fullPath.endsWith('.md')
      ) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let newContent = content;
        for (const { regex, replacement } of replacements) {
          newContent = newContent.replace(regex, replacement);
        }
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Updated ${fullPath}`);
        }
      }
    }
  }
}

processDirectory(path.join(__dirname, '.'));
console.log('Replacement complete.');
