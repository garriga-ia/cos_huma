import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const content = fs.readFileSync('src/data.ts', 'utf8');
  
  const prompt = `
I have a TypeScript file \`src/data.ts\` containing educational content in Catalan.
I need to refactor it to support multi-language (Catalan, Spanish, English).

Please rewrite the entire \`src/data.ts\` file.
Change the interfaces to support translations. For example:

\`\`\`typescript
export type SystemId = 'locomotor' | 'excretor' | 'reproductor' | 'nervios' | 'respiratori' | 'circulatori' | 'digestiu';

export interface TranslatedString {
  ca: string;
  es: string;
  en: string;
}

export interface TranslatedArray {
  ca: string[];
  es: string[];
  en: string[];
}

export interface Flashcard {
  q: TranslatedString;
  a: TranslatedString;
}

export interface TestQuestion {
  question: TranslatedString;
  options: TranslatedArray;
  correctIndex: number;
  explanation: TranslatedString;
}

export interface ApuntsSection {
  title: TranslatedString;
  icon: string;
  content: {
    ca: string | string[];
    es: string | string[];
    en: string | string[];
  };
}

export interface SystemData {
  id: SystemId;
  title: TranslatedString;
  icon: string;
  color: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  apunts: {
    missio: TranslatedString;
    sections: ApuntsSection[];
    tips: TranslatedArray;
  };
  test: TestQuestion[];
  flashcards: Flashcard[];
}
\`\`\`

Then, translate all the content in the \`systems\` array to Spanish and English, keeping the original Catalan as well.
Output ONLY the raw TypeScript code for the new \`src/data.ts\` file, without any markdown formatting or explanation.
Make sure to translate everything accurately.

Here is the original file:
\`\`\`typescript
${content}
\`\`\`
`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-pro-preview',
    contents: prompt,
    config: {
      temperature: 0.1
    }
  });

  let newContent = response.text;
  if (newContent.startsWith('\`\`\`typescript')) {
    newContent = newContent.replace(/^\`\`\`typescript\n/, '').replace(/\n\`\`\`$/, '');
  }
  if (newContent.startsWith('\`\`\`')) {
    newContent = newContent.replace(/^\`\`\`\n/, '').replace(/\n\`\`\`$/, '');
  }

  fs.writeFileSync('src/data.ts', newContent);
  console.log('Done!');
}

run().catch(console.error);
