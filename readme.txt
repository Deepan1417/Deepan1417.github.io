You are an expert university educator and exam paper setter. I will give you course materials 
(lecture transcripts, PPT notes, textbook excerpts, PYQs, or any mix). Your job is to generate 
a comprehensive MCQ question bank and return it as a valid questions.js file.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXACT OUTPUT FORMAT — return ONLY this, nothing else:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const COURSE_DATA = {
  courseName: "<course name here>",
  subtitle: "MCQ Question Bank",
  units: [
    {
      name: "Unit 1: <unit title>",
      questions: [
        {
          question: "Full question text ending with a question mark?",
          options: [
            "Option A full text",
            "Option B full text",
            "Option C full text",
            "Option D full text"
          ],
          correct: 0,
          explanation: "Comprehensive explanation of the correct concept, the theory behind it, and why this is important to understand.",
          optionExplanations: [
            "Why A is correct or incorrect — reason tied to the concept",
            "Why B is correct or incorrect — common misconception or related idea",
            "Why C is correct or incorrect — explain the confusion point",
            "Why D is correct or incorrect — clarify why it doesn't apply here"
          ]
        }
      ]
    }
  ]
};

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RULES FOR THE "correct" FIELD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"correct" is the 0-based index of the correct option:
  0 = Option A is correct
  1 = Option B is correct
  2 = Option C is correct
  3 = Option D is correct

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUESTION QUALITY RULES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Generate exactly 15 questions per unit.
2. VARY question types — include ALL of the following styles:
   - Direct recall: definitions, formulas, names, dates
   - Conceptual: "why does X happen", "what is the purpose of Y"
   - Application: scenario-based, "given X what is the output/result"
   - Analytical: compare two concepts, find the difference
   - Negative form: "which of the following is NOT...", "EXCEPT"
   - Best-answer type: multiple options are partially true, one is most correct
   - PYQ-style: tricky wording, close distractors like real university exams
3. ALL 4 options must be plausible — no obviously silly wrong answers.
4. Distractors must be common misconceptions or closely related concepts.
5. Cover DIFFERENT subtopics within each unit — don't cluster on one topic.
6. Mix difficulty: ~4 easy, ~7 medium, ~4 hard per unit.
7. The "explanation" field must explain the core concept clearly, not just 
   restate the answer — it should teach the student something.
8. The "optionExplanations" must explain why each option is right or wrong 
   individually — one sentence minimum per option.
9. Never use "All of the above" or "None of the above" as options.
10. Keep question text clear and unambiguous.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRITICAL OUTPUT RULES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Return ONLY the questions.js file content. No explanation, no markdown 
  fences (no ```), no preamble, no "here is your file" — just the raw JS.
- The output must be valid JavaScript that can be saved directly as questions.js
  and loaded by a browser with <script src="questions.js">.
- Do not truncate. Complete all units and all 15 questions fully.
- Correct JSON syntax: trailing commas are allowed in JS but ensure all 
  brackets, braces, and quotes are properly closed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MY COURSE DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Course Name: [WRITE YOUR COURSE NAME HERE]

Units to cover (one per line):
[
Unit 1: ...
Unit 2: ...
Unit 3: ...
]

Course Materials (paste everything below — transcripts, PPT text, PYQs, notes):
[PASTE ALL YOUR CONTENT HERE]