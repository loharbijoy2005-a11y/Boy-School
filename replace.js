const fs = require('fs');
const path = require('path');

const replacements = [
  // School Names & Acronyms
  { regex: /Mahishadal Raj? High School/gi, replacement: "Mahishadal Raj High School" },
  { regex: /Mahishadal Raj High School/gi, replacement: "Mahishadal Raj High School" },
  { regex: /Raj?/gi, replacement: "Raj" },
  { regex: /Raj/gi, replacement: "Raj" },
  { regex: /MRHS/gi, replacement: "MRHS" },

  // Specific phrases
  { regex: /Boys Education/gi, replacement: "Boys Education" },
  { regex: /girls'? empowerment/gi, replacement: "boys' empowerment" },
  { regex: /student/gi, replacement: "student" },
  { regex: /student/gi, replacement: "student" },
  { regex: /male/gi, replacement: "male" },

  // Roles
  { regex: /Headmaster/gi, replacement: "Headmaster" },
  { regex: /Headmaster/gi, replacement: "Headmaster" },
  { regex: /Paramita Giri \(Bag\)/gi, replacement: "Headmaster" },

  // Bengali text
  { regex: /মহিষাদল রাজ হাই স্কুল/g, replacement: "মহিষাদল রাজ হাই স্কুল" },
  { regex: /মহিষাদল রাজ/g, replacement: "মহিষাদল রাজ" },
  { regex: /রাজ/g, replacement: "রাজ" },
  { regex: /রাজ/g, replacement: "রাজ" },
  { regex: /বিদ্যালয়/g, replacement: "বিদ্যালয়" },
  { regex: /বালক/g, replacement: "বালক" },
  { regex: /ছাত্র/g, replacement: "ছাত্র" },
  { regex: /ছাত্র/g, replacement: "ছাত্র" },
  { regex: /ছাত্রশ্রী/g, replacement: "ওয়েসিস স্কলারশিপ" },
  { regex: /প্রধান শিক্ষক/g, replacement: "প্রধান শিক্ষক" },
  { regex: /প্রধান শিক্ষক/g, replacement: "প্রধান শিক্ষক" }
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
        fullPath.endsWith('.md') ||
        fullPath.endsWith('.py')
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
