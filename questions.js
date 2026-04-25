const COURSE_DATA = {
courseName: "Fundamentals of Object Oriented Programming",
subtitle: "NPTEL · Prof. R. Bala Subramanian · IIT Roorkee",
units: [
{
name: "Unit 1: Introduction to OOP",
questions: [
{
question: "Which statement best defines Object-Oriented Programming?",
options: [
"A programming paradigm centered around objects containing data and behavior",
"A programming style that only uses functions and global variables",
"A language translation technique for machine code generation",
"A database model based only on tables"
],
correct: 0,
explanation: "Object-Oriented Programming (OOP) organizes software around objects. Each object combines state (data) and behavior (methods). Classes act as blueprints used to create objects. This helps modularity, reuse, and maintainability.",
optionExplanations: [
"Correct. This captures the core idea of OOP: objects encapsulate state and behavior.",
"Incorrect. That better describes procedural programming.",
"Incorrect. Compilation is unrelated to defining OOP.",
"Incorrect. That refers more to relational databases."
]
},
{
question: "In OOP, a class is best described as what?",
options: [
"A temporary runtime error",
"A blueprint or template for creating objects",
"A keyword used only in Java loops",
"A memory address of an object"
],
correct: 1,
explanation: "A class defines attributes and methods common to objects of that type. For example, a BankAccount class may define balance and deposit(). Objects are created from the class blueprint.",
optionExplanations: [
"Incorrect. A class is not an error.",
"Correct. A class is a blueprint/template for objects.",
"Incorrect. class is not a loop keyword.",
"Incorrect. Memory addresses identify objects, not classes."
]
},
{
question: "Which of the following is NOT a commonly cited advantage of OOP?",
options: [
"Encapsulation",
"Inheritance",
"Polymorphism",
"Mandatory use of goto statements"
],
correct: 3,
explanation: "OOP advantages include encapsulation, inheritance, abstraction, modularity, and polymorphism. goto statements are unrelated and generally discouraged in structured design.",
optionExplanations: [
"Incorrect. Encapsulation is a core OOP benefit.",
"Incorrect. Inheritance supports reuse.",
"Incorrect. Polymorphism improves flexibility.",
"Correct. goto is not an OOP advantage."
]
},
{
question: "Which characteristic of an object refers to the values stored inside it?",
options: [
"State",
"Behavior",
"Identity",
"Inheritance"
],
correct: 0,
explanation: "Object state means the current data values stored in attributes. For a Pen object, color and brand are part of state. Behavior means actions like write(). Identity distinguishes one object from another.",
optionExplanations: [
"Correct. State refers to data values.",
"Incorrect. Behavior refers to actions/methods.",
"Incorrect. Identity refers to uniqueness.",
"Incorrect. Inheritance is a class relationship."
]
},
{
question: "Which characteristic of an object refers to actions such as deposit(), withdraw(), or write()?",
options: [
"State",
"Behavior",
"Identity",
"Compilation"
],
correct: 1,
explanation: "Behavior represents what an object can do through methods. A BankAccount object may deposit or withdraw; a Pen object may write.",
optionExplanations: [
"Incorrect. State is data.",
"Correct. Behavior means functionality/actions.",
"Incorrect. Identity means uniqueness.",
"Incorrect. Compilation is unrelated."
]
},
{
question: "Which real-world example best illustrates a class and its objects?",
options: [
"Class: Fruits, Objects: Apple and Mango",
"Class: Apple, Objects: Fruits and Mango",
"Class: Red, Objects: Color",
"Class: Deposit, Objects: Bank"
],
correct: 0,
explanation: "A class is a general category, while objects are specific instances. Fruits is a category; Apple and Mango are instances.",
optionExplanations: [
"Correct. Fruits is the class, Apple/Mango are objects.",
"Incorrect. Apple is an instance, not the category.",
"Incorrect. Reversed and logically inconsistent.",
"Incorrect. deposit is an action, not a class."
]
},
{
question: "Which paradigm mainly focuses on functions and procedures rather than objects?",
options: [
"Object-Oriented Programming",
"Procedural Programming",
"Generic Programming",
"Logic Programming"
],
correct: 1,
explanation: "Procedural programming organizes code around procedures/functions. OOP instead focuses on objects and classes.",
optionExplanations: [
"Incorrect. OOP focuses on objects.",
"Correct. Procedural programming emphasizes procedures/functions.",
"Incorrect. Generic programming is about reusable types/templates.",
"Incorrect. Logic programming uses logical rules."
]
},
{
question: "Consider C++ code: class Car{}; int main(){ Car c1; } What is c1?",
options: [
"A method",
"A class name",
"An object (instance) of Car",
"A constructor keyword"
],
correct: 2,
explanation: "In C++, writing Car c1; creates an object named c1 of class Car. The class name is Car, while c1 is the instance.",
optionExplanations: [
"Incorrect. c1 is not a method.",
"Incorrect. Car is the class name.",
"Correct. c1 is an object of Car.",
"Incorrect. It is not a keyword."
]
},
{
question: "What is the output of Java code? class A{} class Test{ public static void main(String[] args){ A x = new A(); System.out.println(x==null); }}?",
options: [
"true",
"false",
"null",
"Compilation error"
],
correct: 1,
explanation: "new A() creates a valid object reference, so x points to an object and is not null. Therefore x==null evaluates to false.",
optionExplanations: [
"Incorrect. x is not null after object creation.",
"Correct. new allocates an object, so result is false.",
"Incorrect. println prints boolean here.",
"Incorrect. The code is valid Java."
]
},
{
question: "Which OOP feature hides internal data and allows controlled access?",
options: [
"Encapsulation",
"Recursion",
"Linking",
"Tokenization"
],
correct: 0,
explanation: "Encapsulation bundles data with methods and restricts direct access using access modifiers. Users interact through public methods like getters/setters.",
optionExplanations: [
"Correct. Encapsulation supports data hiding.",
"Incorrect. Recursion is repeated self-calling.",
"Incorrect. Linking combines program units.",
"Incorrect. Tokenization is lexical analysis."
]
},
{
question: "Which OOP feature allows a new class to reuse properties of an existing class?",
options: [
"Inheritance",
"Abstraction",
"Compilation",
"Overloading"
],
correct: 0,
explanation: "Inheritance lets a derived/subclass acquire members of a base/superclass. Example: SavingsAccount can inherit from Account.",
optionExplanations: [
"Correct. Inheritance enables reuse through parent-child relation.",
"Incorrect. Abstraction hides complexity.",
"Incorrect. Compilation translates code.",
"Incorrect. Overloading uses same name with different parameters."
]
},
{
question: "Which OOP concept means one interface taking many forms?",
options: [
"Polymorphism",
"Encapsulation",
"Instantiation",
"Iteration"
],
correct: 0,
explanation: "Polymorphism means the same method name or interface can behave differently in different contexts, such as overloading or overriding.",
optionExplanations: [
"Correct. Poly = many, morph = forms.",
"Incorrect. Encapsulation is data hiding.",
"Incorrect. Instantiation means object creation.",
"Incorrect. Iteration means looping."
]
},
{
question: "Which statement about abstraction is correct?",
options: [
"It exposes unnecessary implementation details",
"It focuses on essential features while hiding complexity",
"It means copying objects bit by bit",
"It only exists in Python"
],
correct: 1,
explanation: "Abstraction emphasizes what an object does rather than how it does it. For example, a user presses a car brake pedal without knowing hydraulic internals.",
optionExplanations: [
"Incorrect. Opposite of abstraction.",
"Correct. Abstraction hides complexity and shows essentials.",
"Incorrect. That relates to copying.",
"Incorrect. Abstraction exists across OOP languages."
]
},
{
question: "Which language is historically famous for pioneering class, subclass, and inheritance ideas before modern OOP became mainstream?",
options: [
"Simula",
"COBOL",
"HTML",
"SQL"
],
correct: 0,
explanation: "Simula is widely recognized as an early language introducing classes, inheritance, and object concepts that influenced later OOP languages.",
optionExplanations: [
"Correct. Simula pioneered many OOP ideas.",
"Incorrect. COBOL is business-oriented, not the pioneer here.",
"Incorrect. HTML is markup language.",
"Incorrect. SQL is query language."
]
},
{
question: "Who is commonly credited with coining the term 'Object-Oriented Programming'?",
options: [
"Dennis Ritchie",
"Alan Kay",
"Bjarne Stroustrup",
"James Gosling"
],
correct: 1,
explanation: "Alan Kay is commonly credited with coining the term Object-Oriented Programming in the 1960s while exploring new programming paradigms.",
optionExplanations: [
"Incorrect. Dennis Ritchie created C.",
"Correct. Alan Kay coined the term.",
"Incorrect. Stroustrup created C++.",
"Incorrect. Gosling led Java."
]
},
{
question: "Which statement is incorrect regarding objects?",
options: [
"Objects can represent physical entities like a car",
"Objects can represent logical entities like a bank account",
"Every object may have state and behavior",
"Objects cannot exist at runtime"
],
correct: 3,
explanation: "Objects are created and used during runtime. They may represent physical or logical entities and typically contain state and behavior.",
optionExplanations: [
"Incorrect. This is true.",
"Incorrect. This is true.",
"Incorrect. This is generally true.",
"Correct. Objects commonly exist at runtime."
]
},
{
question: "In C++, which statement creates two objects of class Box?",
options: [
"Box box1, box2;",
"object Box(box1,box2);",
"class box1 box2;",
"new class Box;"
],
correct: 0,
explanation: "In C++, objects can be declared like variables: ClassName obj1, obj2;. Thus Box box1, box2; creates two objects.",
optionExplanations: [
"Correct. Valid C++ object declaration syntax.",
"Incorrect. Not valid C++ syntax.",
"Incorrect. class defines type, not objects this way.",
"Incorrect. Invalid syntax."
]
},
{
question: "Which comparison between procedural programming and OOP is most accurate?",
options: [
"Procedural focuses on objects, OOP on functions",
"Procedural focuses on functions, OOP on objects",
"Both are identical in organization",
"OOP cannot use functions"
],
correct: 1,
explanation: "Procedural programming organizes around functions/procedures, while OOP organizes around objects containing data and methods.",
optionExplanations: [
"Incorrect. Reversed.",
"Correct. This is the standard comparison.",
"Incorrect. They differ significantly.",
"Incorrect. OOP uses methods/functions."
]
},
{
question: "What is the output of C++ code? class A{}; int main(){ A x,y; cout << ( &x == &y ); }",
options: [
"1 always",
"0 generally because objects have different identities",
"Compilation error because objects cannot have addresses",
"Garbage string"
],
correct: 1,
explanation: "Distinct objects usually occupy different memory locations, so their addresses differ. Hence comparison is generally false (0).",
optionExplanations: [
"Incorrect. Different objects are not same address.",
"Correct. Separate objects have different identities/addresses.",
"Incorrect. Objects do have addresses.",
"Incorrect. Output is boolean/integer style."
]
},
{
question: "Which scenario best justifies using OOP?",
options: [
"Modeling a Library with Books, Members, and Loans",
"Writing one-line arithmetic only",
"Replacing keyboard hardware physically",
"Printing a page without software logic"
],
correct: 0,
explanation: "Systems with interacting entities map naturally to classes and objects. Library systems can model Book, Member, Loan, Librarian, etc.",
optionExplanations: [
"Correct. Multiple interacting entities suit OOP well.",
"Incorrect. Overkill for trivial one-line arithmetic.",
"Incorrect. Hardware replacement is not an OOP design task.",
"Incorrect. Too vague and not entity-focused."
]
},
{
question: "Which is NOT one of the three common characteristics of an object discussed in OOP basics?",
options: [
"State",
"Behavior",
"Identity",
"Assembler"
],
correct: 3,
explanation: "State, behavior, and identity are common object characteristics. Assembler is a low-level programming tool, not an object characteristic.",
optionExplanations: [
"Incorrect. Real characteristic.",
"Incorrect. Real characteristic.",
"Incorrect. Real characteristic.",
"Correct. Not an object property."
]
},
{
question: "Which statement about modularity is correct?",
options: [
"Modularity means dividing a system into manageable classes/components",
"Modularity means deleting all methods",
"Modularity means only using one file",
"Modularity means avoiding object creation"
],
correct: 0,
explanation: "Modularity divides a large system into smaller manageable units such as classes. This improves testing, maintenance, and teamwork.",
optionExplanations: [
"Correct. That is the meaning of modularity.",
"Incorrect. Methods are still needed.",
"Incorrect. Modules may span many files.",
"Incorrect. Object creation is unrelated."
]
},
{
question: "Which language pair is most strongly associated with this course's implementation of OOP concepts?",
options: [
"C++ and Java",
"Assembly and BASIC",
"SQL and HTML",
"Fortran and Verilog"
],
correct: 0,
explanation: "The course prominently teaches OOP concepts using C++ and Java, with some cross-language ideas including Python.",
optionExplanations: [
"Correct. These are major implementation languages in the course.",
"Incorrect. Not the main OOP pair here.",
"Incorrect. These are not OOP teaching pair here.",
"Incorrect. Not the intended answer."
]
},
{
question: "Which statement best compares object creation in C++, Java, and Python?",
options: [
"All three languages support creating instances from classes",
"Only Java supports objects",
"C++ has classes but cannot create objects",
"Python has no classes"
],
correct: 0,
explanation: "C++, Java, and Python all support classes and object instantiation, though syntax differs: C++ uses declarations/new, Java commonly uses new, Python uses ClassName().",
optionExplanations: [
"Correct. All three support objects.",
"Incorrect. C++ and Python also do.",
"Incorrect. C++ absolutely supports objects.",
"Incorrect. Python supports classes."
]
},
{
question: "Which statement about code reusability in OOP is most accurate?",
options: [
"Existing classes can often be reused or extended in new programs",
"Every program must be rewritten from scratch",
"Reusability means copying random code manually only",
"Reusability removes need for testing"
],
correct: 0,
explanation: "OOP promotes reuse through classes, inheritance, composition, and libraries. Reuse reduces effort but does not eliminate testing.",
optionExplanations: [
"Correct. Reuse is a major OOP benefit.",
"Incorrect. OOP encourages reuse.",
"Incorrect. Manual copying is poor practice.",
"Incorrect. Testing is still essential."
]
},
{
question: "In Java, which code correctly creates an object of class Pen?",
options: [
"Pen p = Pen();",
"Pen p = new Pen();",
"class p = new Pen();",
"new Pen p();"
],
correct: 1,
explanation: "Java typically creates objects using new. Syntax: ClassName ref = new ClassName(); so Pen p = new Pen(); is correct.",
optionExplanations: [
"Incorrect. Missing new keyword.",
"Correct. Valid Java object creation syntax.",
"Incorrect. class is not used here.",
"Incorrect. Wrong order."
]
},
{
question: "What is the output of C++ code? class Pen{}; int main(){ Pen p; cout << Created",
options: [
"Created",
"Compilation error because class has no data",
"Nothing can be printed after object creation",
"Runtime exception"
],
correct: 0,
explanation: "An empty class can still have objects. The statement cout << Created prints the text normally.",
optionExplanations: [
"Correct. Object is created and text prints.",
"Incorrect. Empty classes are valid.",
"Incorrect. Printing is allowed.",
"Incorrect. No runtime exception implied."
]
},
{
question: "Which statement is true about data security in OOP?",
options: [
"Access controls can restrict who uses internal data",
"All data must always be globally public",
"Security means deleting variables",
"Only procedural languages support security"
],
correct: 0,
explanation: "Using public/private/protected access control, OOP can restrict direct access to data and expose only safe interfaces.",
optionExplanations: [
"Correct. Encapsulation supports controlled access.",
"Incorrect. OOP often avoids global public data.",
"Incorrect. Deletion is unrelated.",
"Incorrect. OOP strongly supports access control."
]
},
{
question: "Which option best represents an intangible object example?",
options: [
"Chair",
"Bike",
"Banking System",
"Pen"
],
correct: 2,
explanation: "Intangible objects are conceptual/non-physical entities modeled in software, such as banking systems, universities, or accounts.",
optionExplanations: [
"Incorrect. Physical tangible object.",
"Incorrect. Physical tangible object.",
"Correct. Logical/intangible entity.",
"Incorrect. Physical tangible object."
]
},
{
question: "Which option is the best reason OOP is useful in large software projects?",
options: [
"Classes help organize complexity into manageable parts",
"It guarantees zero bugs",
"It removes need for requirements",
"It avoids all memory usage"
],
correct: 0,
explanation: "Large systems become easier to manage when broken into classes and objects with clear responsibilities. OOP does not guarantee bug-free software.",
optionExplanations: [
"Correct. Organization and modularity are key strengths.",
"Incorrect. No paradigm guarantees zero bugs.",
"Incorrect. Requirements are still needed.",
"Incorrect. Memory is still required."
]
}
]
},
{

      name: "Unit 1.1: Introduction to OOP",
      questions: [
        {
          question: "Who coined the term 'Object-Oriented Programming' during his graduate school research in 1966?",
          options: [
            "Alan Turing",
            "Dennis Ritchie",
            "Alan Kay",
            "Bjarne Stroustrup"
          ],
          correct: 2,
          explanation: "According to the historical overview provided in the course, the term 'Object-Oriented Programming' was coined by Alan Kay around 1966 during his time in graduate school.",
          optionExplanations: [
            "Why A is wrong — Alan Turing is associated with the Turing machine and mathematical computing foundations in the 1930s, long before OOP.",
            "Why B is wrong — Dennis Ritchie created the procedural C programming language, not the term OOP.",
            "Why C is correct — Alan Kay coined the term 'Object-Oriented Programming' in 1966, laying the conceptual nomenclature for the paradigm.",
            "Why D is wrong — Bjarne Stroustrup developed C++ later in the 1980s; he did not coin the term OOP itself."
          ]
        },
        {
          question: "Which of the following early graphical applications, developed between 1961 and 1962, served as a primary inspiration for object-based programming?",
          options: [
            "Simula",
            "Sketchpad",
            "Lambda Calculus",
            "Turing Engine"
          ],
          correct: 1,
          explanation: "The Sketchpad application, developed in 1961 and 1962, served as an early inspiration for scientists to start building object-based applications, preceding the formal OOP term.",
          optionExplanations: [
            "Why A is wrong — Simula was introduced in 1965 as the first language to use OOP concepts, but Sketchpad was the earlier application inspiration.",
            "Why B is correct — Sketchpad (1961-62) was a graphical interface application that inspired object-based conceptualization.",
            "Why C is wrong — Lambda Calculus is a mathematical foundation from the 1930s, not a software application.",
            "Why D is wrong — The Turing Engine/Machine is a theoretical computational model from the 1930s, not an application."
          ]
        },
        {
          question: "How does the fundamental structural approach of Object-Oriented Programming differ from Procedural-Oriented Programming?",
          options: [
            "Procedural programming centers entirely around objects, while OOP is strictly based on linear mathematical algorithms.",
            "Procedural programming depends primarily on functions, whereas OOP is entirely structured around objects and classes.",
            "OOP requires the use of Lambda Calculus for all memory allocation, while Procedural programming relies on identity hashmaps.",
            "OOP eliminates the need for any variables, whereas Procedural programming requires variables to be declared at runtime."
          ],
          correct: 1,
          explanation: "Procedural-oriented programming (like C) is organized around functions and linear execution flows. In contrast, OOP structures the entire program around objects (data) and classes (blueprints).",
          optionExplanations: [
            "Why A is wrong — This statement reverses the paradigms; procedural is not object-centered.",
            "Why B is correct — The core difference taught is that procedural depends on functions, while OOP is centered on objects and classes.",
            "Why C is wrong — Lambda Calculus is a 1930s mathematical paradigm, and identity hashmaps are specific to Java objects, not procedural paradigms.",
            "Why D is wrong — OOP heavily utilizes variables (as member data/state); it does not eliminate them."
          ]
        },
        {
          question: "Which of the following is NOT an advantage of Object-Oriented Programming as discussed in the lectures?",
          options: [
            "Modularity through classes",
            "Data maintenance and security",
            "Procedural flowchart dependence",
            "Code reusability"
          ],
          correct: 2,
          explanation: "OOP overcomes the need for traditional procedural flowcharts by utilizing Object-Oriented Analysis and Design (OOAD) diagrams. Therefore, dependence on flowcharts is not an OOP advantage.",
          optionExplanations: [
            "Why A is wrong — Modularity is a primary advantage of OOP, allowing programs to be broken into class-based components.",
            "Why B is wrong — Data maintenance and security are core OOP advantages achieved via encapsulation.",
            "Why C is correct — Procedural flowchart dependence is a characteristic of procedural programming, which OOP's OOAD design advantages actively replace.",
            "Why D is wrong — Code reusability (via inheritance) is a heavily emphasized benefit of OOP."
          ]
        },
        {
          question: "When defining a class in OOP, what analogy does the professor use to describe the relationship between objects and classes in a programming language?",
          options: [
            "They act as the hardware and software of the language.",
            "They serve as the grammar of the language to enable structured communication.",
            "They are like the ink and paper used to write a letter.",
            "They function as the compiler and interpreter of the operating system."
          ],
          correct: 1,
          explanation: "Prof. Bala Subramanian compares objects and classes to the 'grammar' of the language, stating that just as grammar structures human communication, classes/objects enable communication with other devices to achieve tasks.",
          optionExplanations: [
            "Why A is wrong — Hardware and software are physical computing concepts, not the analogy used for OOP structure.",
            "Why B is correct — The lecture explicitly states objects and classes serve as the foundation or 'grammar' of the language.",
            "Why C is wrong — This is a generic analogy not referenced in the course material for this concept.",
            "Why D is wrong — Compilers and interpreters are translation tools, unrelated to the structural design analogy of classes."
          ]
        },
        {
          question: "In OOP terminology, what does the 'state' of an object physically represent in a program?",
          options: [
            "The memory deallocation process during runtime execution.",
            "The object's member functions or methods that execute tasks.",
            "The data or values held by the object's fields at a given time.",
            "The blueprint from which multiple similar objects are instantiated."
          ],
          correct: 2,
          explanation: "An object encapsulates both state and behavior. The 'state' refers to the member data (the variables and their values), while 'behavior' refers to the member functions or methods.",
          optionExplanations: [
            "Why A is wrong — Memory deallocation is handled by destructors or garbage collection, not the 'state' of the object.",
            "Why B is wrong — Member functions represent the 'behavior' (functionality) of an object, not its state.",
            "Why C is correct — State strictly refers to the data values (attributes) an object holds, such as a pen's color.",
            "Why D is wrong — The blueprint concept refers to the 'Class', not the state of an individual object."
          ]
        },
        {
          question: "If we consider 'Fruits' as a class, which of the following best represents the instantiation of objects within this paradigm?",
          options: [
            "Apple, Mango, and Pear",
            "Sweetness, Color, and Weight",
            "Growing, Ripening, and Falling",
            "Roots, Leaves, and Branches"
          ],
          correct: 0,
          explanation: "A class is a broad category or template, while objects are specific, concrete instances. If 'Fruits' is the class, specific fruits like Apple, Mango, and Pear are the objects.",
          optionExplanations: [
            "Why A is correct — Apple, Mango, and Pear are specific, tangible instances (objects) of the broader category (class) 'Fruits'.",
            "Why B is wrong — These represent the 'state' or member data attributes of a fruit, not the object instances themselves.",
            "Why C is wrong — These represent the 'behavior' or member functions (actions) a fruit might undergo.",
            "Why D is wrong — These are components of a tree, unrelated to the instantiation of a fruit object."
          ]
        },
        {
          question: "What is the specific functionality of the 'behavior' characteristic of an object?",
          options: [
            "It uniquely identifies the object in memory using a hashmap.",
            "It defines the data values and attributes the object currently holds.",
            "It acts as a template to dynamically generate new classes at runtime.",
            "It represents the operations or member functions the object can perform."
          ],
          correct: 3,
          explanation: "An object's behavior defines what it can do. In code, this translates to member functions (in C++) or methods (in Java), such as 'deposit()' for a bank account or 'write()' for a pen.",
          optionExplanations: [
            "Why A is wrong — This describes the 'identity' characteristic of an object.",
            "Why B is wrong — This describes the 'state' characteristic of an object.",
            "Why C is wrong — Classes act as templates for objects, not the other way around.",
            "Why D is correct — Behavior dictates functionality, implemented via member functions or methods."
          ]
        },
        {
          question: "Which of the following scenarios describes an 'intangible object' as defined in the course?",
          options: [
            "A physical chair with a specific weight and color.",
            "A software representation of a University or Banking System.",
            "A marker pen that can perform a writing action.",
            "A printed flowchart representing a procedural algorithm."
          ],
          correct: 1,
          explanation: "Objects can be tangible (physical items you can touch, like a chair or pen) or intangible (logical entities that exist conceptually, like a Banking System or a University).",
          optionExplanations: [
            "Why A is wrong — A chair is physical, making it a tangible object.",
            "Why B is correct — A University or Banking System is a logical, non-physical entity, making it an intangible object.",
            "Why C is wrong — A marker pen is a physical, tangible object.",
            "Why D is wrong — A flowchart is a procedural design tool, not an example of an intangible OOP object."
          ]
        },
        {
          question: "How does the tracking of an object's unique 'identity' differ structurally between C++ and Java?",
          options: [
            "C++ uses an identity hashmap, whereas Java uses the physical base memory address.",
            "C++ relies on the object's base memory address, whereas Java uses an identity hashmap.",
            "Both C++ and Java exclusively use the scope resolution operator for identity tracking.",
            "Both languages use lambda calculus to generate dynamic runtime addresses."
          ],
          correct: 1,
          explanation: "In C++, an object's unique identity is tied to its physical base address in memory (similar to an array's base address). In Java, object identity is managed virtually using an identity hashmap.",
          optionExplanations: [
            "Why A is wrong — This reverses the actual implementations of the two languages.",
            "Why B is correct — C++ maps identity to memory addresses, while Java utilizes an identity hashmap.",
            "Why C is wrong — The scope resolution operator (`::`) is used for defining scope in C++, not for tracking object identity.",
            "Why D is wrong — Lambda calculus is a 1930s mathematical concept, not a modern memory tracking mechanism."
          ]
        },
        {
          question: "Consider the C++ array declaration `int A;`. If a programmer outputs `cout << A;`, what OOP concept does the output best analogize?",
          options: [
            "The encapsulation of integer data within a private modifier.",
            "The runtime polymorphism triggered by the array index.",
            "The unique object identity represented by a base memory address.",
            "The abstract class definition required for C++ compilation."
          ],
          correct: 2,
          explanation: "Printing an array name `A` in C++ outputs its base memory address. The professor uses this to explain 'object identity', noting that just as an array has a base address, a C++ object uses its memory address as its unique ID.",
          optionExplanations: [
            "Why A is wrong — Printing the address does not demonstrate encapsulation or data hiding.",
            "Why B is wrong — There is no polymorphism or method overriding occurring here.",
            "Why C is correct — The base address output perfectly mirrors how a C++ object maintains a unique identity in memory.",
            "Why D is wrong — An array is a data structure, not an abstract class."
          ]
        },
        {
          question: "What is the precise structural purpose of the dot operator `.` when used with an instantiated object?",
          options: [
            "It forces the compiler to inherit public data from a base class.",
            "It bridges the specific object instance with its internal member data or member functions.",
            "It acts as a scope resolution tool to define functions outside of the class block.",
            "It automatically dynamically allocates memory for Java objects on the heap."
          ],
          correct: 1,
          explanation: "The dot operator (`.`) acts as a bridge or connector. It allows a specific object instance (like `s1`) to access or invoke its encapsulated member data or member functions (like `s1.id`).",
          optionExplanations: [
            "Why A is wrong — Inheritance is defined using `:` in C++ or `extends` in Java, not the dot operator.",
            "Why B is correct — The dot operator creates the necessary access bridge between the object and its class members.",
            "Why C is wrong — The scope resolution operator is `::`, not the dot operator `.`.",
            "Why D is wrong — Memory allocation in Java is handled by the `new` keyword, not the dot operator."
          ]
        },
        {
          question: "Evaluate the following C++ code snippet:\n\nclass Box {\npublic:\n  double height;\n  double length;\n};\nint main() {\n  Box box1;\n  box1.height = 5.0;\n  return 0;\n}\n\nWhich statement accurately describes the memory behavior occurring here?",
          options: [
            "The `box1` object is dynamically instantiated at runtime using a default identity hashmap.",
            "The class `Box` consumes memory space as soon as it is defined above `main()`.",
            "The object `box1` acts as a physical instance, allocating memory for `height` and `length` when declared.",
            "A compilation error will occur because the `new` keyword is missing for instantiation."
          ],
          correct: 2,
          explanation: "A class is merely a blueprint and consumes no memory until an object is instantiated. When `Box box1;` is declared in C++, memory is allocated on the stack for that specific object instance's state variables.",
          optionExplanations: [
            "Why A is wrong — Identity hashmaps are a Java concept. C++ allocates this on the stack with a base memory address.",
            "Why B is wrong — Classes are logical templates; they do not consume physical memory until instantiated as objects.",
            "Why C is correct — Instantiating `box1` creates the physical instance in memory, ready to hold the state values.",
            "Why D is wrong — C++ allows static allocation (stack allocation) without the `new` keyword. `new` is strictly required in Java."
          ]
        },
        {
          question: "Examine this Java snippet:\n\nclass Car {\n  String brand;\n}\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car();\n    myCar.brand = \"Toyota\";\n  }\n}\n\nWhat is the strict purpose of the `new` keyword in this Java code?",
          options: [
            "It dynamically allocates memory for the `myCar` object and invokes the class constructor.",
            "It replaces the dot operator for accessing the `brand` member data securely.",
            "It explicitly defines `Car` as an abstract class that cannot be instantiated directly.",
            "It enforces compile-time polymorphism by overloading the default constructor."
          ],
          correct: 0,
          explanation: "Unlike C++, Java requires explicit dynamic memory allocation for objects. The `new` keyword allocates memory for the object on the heap at runtime and triggers the constructor (`Car()`).",
          optionExplanations: [
            "Why A is correct — The `new` keyword handles dynamic runtime memory allocation and calls the constructor.",
            "Why B is wrong — The dot operator is still used immediately after (`myCar.brand`) to access the data.",
            "Why C is wrong — `new` actually *does* instantiate the object; it does not make the class abstract.",
            "Why D is wrong — Memory allocation has nothing to do with function overloading or compile-time polymorphism."
          ]
        },
        {
          question: "When translating traditional procedural algorithms into OOP, what design advantage replaces the use of complex flowcharts?",
          options: [
            "Turing Machine algorithms",
            "Object-Oriented Analysis and Design (OOAD) diagrams",
            "Lambda Calculus derivations",
            "Identity Hashmap matrices"
          ],
          correct: 1,
          explanation: "A major benefit of OOP is its Design Advantage. Instead of procedural flowcharts, developers use Object-Oriented Analysis and Design (OOAD) diagrams to visually structure classes, objects, and their interactions.",
          optionExplanations: [
            "Why A is wrong — The Turing Machine is a 1930s procedural computing foundation.",
            "Why B is correct — OOAD diagrams provide a clear, modular way to visually represent OOP architecture, replacing linear flowcharts.",
            "Why C is wrong — Lambda calculus is a mathematical model, not a visual design tool for modern software.",
            "Why D is wrong — Hashmaps are memory management tools, not high-level software design diagrams."
          ]
        },
        {
          question: "A developer writes a base class `Document` outlining a method `printHeader()`, but defers the actual coding of this method to a child class `PDFDocument`. Which core OOP concept does this scenario primarily demonstrate?",
          options: [
            "Encapsulation",
            "Abstraction",
            "Data Maintenance",
            "Early Binding"
          ],
          correct: 1,
          explanation: "Abstraction involves defining a template of functionality (what it should do) while hiding or deferring the specific implementation details (how it does it) to derived classes. The professor compares this to the abstract of a research paper.",
          optionExplanations: [
            "Why A is wrong — Encapsulation refers to securely bundling data and methods together inside a single class, not deferring implementation.",
            "Why B is correct — Deferring the implementation of a declared method to a subclass is the definition of Abstraction.",
            "Why C is wrong — Data maintenance relates to scoping variables inside classes to avoid procedural naming conflicts.",
            "Why D is wrong — Early binding refers to compile-time function overloading, not deferred method implementation."
          ]
        },
        {
          question: "Which of the following statements about 'Data Maintenance and Security' in OOP compared to procedural C programming is EXCEPTIONAL or INCORRECT?",
          options: [
            "OOP prevents compilation errors when identical variable names are used, provided they are in different classes.",
            "Procedural C restricts you from declaring `int a;` twice in the same global scope.",
            "OOP encapsulation ensures that a private variable `int a;` in Class A cannot be accidentally altered by Class B.",
            "Procedural programming achieves superior data security by relying on global variables to share state."
          ],
          correct: 3,
          explanation: "Procedural programming heavily relies on global variables and passing data between isolated functions, which fundamentally *lacks* data security. OOP provides superior security through encapsulation and access modifiers.",
          optionExplanations: [
            "Why A is wrong — This is a true statement. Class scoping allows duplicate names without collision.",
            "Why B is wrong — This is a true statement. C will throw a multiple declaration error in the same scope.",
            "Why C is wrong — This is a true statement. Encapsulation protects private class data.",
            "Why D is correct — This statement is INCORRECT. Global variables in procedural programming severely compromise data security."
          ]
        },
        {
          question: "Consider the OOP concept of Polymorphism. Which of the following is an example of 'Compile-time polymorphism' (Early Binding)?",
          options: [
            "A derived class overriding a virtual function defined in its base class.",
            "A base class encapsulating its member data using the `private` modifier.",
            "A class defining two functions named `max`, one taking integers and one taking doubles.",
            "A Java program assigning a unique identity hashmap to two similar objects."
          ],
          correct: 2,
          explanation: "Compile-time polymorphism is achieved through Function Overloading: creating multiple functions with the exact same name but different parameter types or counts within the same scope. The compiler decides which to use before runtime.",
          optionExplanations: [
            "Why A is wrong — Overriding a base class method is an example of Run-time polymorphism (Late Binding).",
            "Why B is wrong — This describes Encapsulation, not polymorphism.",
            "Why C is correct — Overloading the `max` function based on argument data types is classic Compile-time polymorphism.",
            "Why D is wrong — Identity hashmaps relate to object uniqueness, completely unrelated to polymorphism."
          ]
        },
        {
          question: "Why does the Java language use the keyword `extends` in its class definitions?",
          options: [
            "To indicate that a subclass is inheriting attributes and methods from a superclass.",
            "To extend the memory allocated to the identity hashmap at runtime.",
            "To allow a class to declare multiple functions with the identical name.",
            "To substitute the C++ `using namespace std;` library inclusion command."
          ],
          correct: 0,
          explanation: "In Java, inheritance is explicitly declared using the `extends` keyword (e.g., `class Car extends Vehicle`), which denotes that the child class (subclass) inherits from the parent class (superclass).",
          optionExplanations: [
            "Why A is correct — The `extends` keyword is Java's syntax for implementing class inheritance.",
            "Why B is wrong — `extends` has no interaction with runtime memory expansion or hashmaps.",
            "Why C is wrong — Overloading functions does not require the `extends` keyword; it just requires different parameter lists.",
            "Why D is wrong — Java uses `import` for libraries. `extends` is strictly for inheritance."
          ]
        },
        {
          question: "Analyze the following C++ code structure:\n\nclass Vehicle {\npublic:\n  string brand;\n};\nclass Car : public Vehicle {\npublic:\n  string model;\n};\n\nIf we instantiate `Car c1;`, which of the following is true regarding code reusability?",
          options: [
            "Object `c1` can access `model` but must use the scope resolution operator to access `brand`.",
            "Object `c1` can directly access both `brand` and `model` because `Car` inherits from `Vehicle`.",
            "Object `c1` cannot access `brand` because it is hidden by default in the base class.",
            "Object `c1` triggers a compilation error because C++ requires the `extends` keyword."
          ],
          correct: 1,
          explanation: "This demonstrates single inheritance in C++. Because `Car` publicly inherits `Vehicle`, the derived object `c1` can seamlessly access its own member `model` as well as the reused/inherited public member `brand` from the base class.",
          optionExplanations: [
            "Why A is wrong — The dot operator (`c1.brand`) is sufficient due to public inheritance; scope resolution is not needed for a standard instance call here.",
            "Why B is correct — Inheritance allows the child object to reuse and access the public members of the parent class.",
            "Why C is wrong — `brand` is explicitly marked `public:`, so it is not hidden.",
            "Why D is wrong — `extends` is Java syntax. The colon `:` is the correct C++ inheritance syntax."
          ]
        },
        {
          question: "Which of the following syntactical features represents a strict difference between defining a standard class in C++ versus Java?",
          options: [
            "Java requires all member data to be placed outside the class braces, while C++ requires them inside.",
            "C++ requires a semicolon `;` immediately following the closing brace of the class, whereas Java does not.",
            "C++ uses the `new` keyword to define the class structure, while Java uses the `class` keyword.",
            "Java utilizes the `:` operator for inheritance, whereas C++ relies on the `implements` keyword."
          ],
          correct: 1,
          explanation: "A key syntactical difference highlighted in the lectures is that a C++ class definition must end with a semicolon after the closing brace (e.g., `};`), whereas a Java class definition does not use a trailing semicolon.",
          optionExplanations: [
            "Why A is wrong — Both languages require member data to be encapsulated *inside* the class braces.",
            "Why B is correct — The trailing semicolon is mandatory in C++ class definitions but omitted in Java.",
            "Why C is wrong — Both languages use the `class` keyword to define the blueprint.",
            "Why D is wrong — This is reversed. C++ uses `:` for inheritance, and Java uses `extends` (or `implements` for interfaces)."
          ]
        },
        {
          question: "In the context of the C++ standard library, what is the function of the `using namespace std;` directive?",
          options: [
            "It acts as the primary driver class where program execution begins.",
            "It dynamically manages memory allocation to prevent runtime overflow.",
            "It provides direct access to standard functions like `cout` without needing to prefix them with `std::`.",
            "It encapsulates private member data to ensure secure data maintenance."
          ],
          correct: 2,
          explanation: "The `std` namespace contains standard C++ library functions. Declaring `using namespace std;` allows the programmer to write `cout <<` instead of repeatedly writing the fully qualified `std::cout <<`.",
          optionExplanations: [
            "Why A is wrong — The `main()` function is where program execution begins, not the namespace declaration.",
            "Why B is wrong — Namespaces organize code scope; they do not manage dynamic memory.",
            "Why C is correct — It sets the scope to the standard library, simplifying the syntax for basic IO commands.",
            "Why D is wrong — Encapsulation of private data is handled by classes and access modifiers, not namespaces."
          ]
        },
        {
          question: "What is the primary architectural purpose of the `main` method/function in both C++ and Java object-oriented programs?",
          options: [
            "It serves as an abstract template that derived classes must override.",
            "It encapsulates the private identity hashmaps of all objects.",
            "It acts as the driver block or entry point where objects are instantiated and execution begins.",
            "It forces the compiler to switch from procedural logic to object-oriented logic."
          ],
          correct: 2,
          explanation: "In both languages, `main()` is the entry point of the program. It acts as the 'driver', meaning this is where classes are utilized, objects are instantiated, and actual execution flows.",
          optionExplanations: [
            "Why A is wrong — `main` is a concrete function that runs the program, not an abstract template.",
            "Why B is wrong — It does not encapsulate hashmaps; it executes code.",
            "Why C is correct — The lecture refers to the class containing `main` in Java as the 'driver class', as it drives the execution and instantiation of objects.",
            "Why D is wrong — The compiler doesn't switch logic based on `main`; the program's architectural design dictates whether it is OOP or procedural."
          ]
        },
        {
          question: "A student writes `cout << s1.id << endl;` in C++. What is the exact Java equivalent to output this object data to the console with a newline?",
          options: [
            "Console.printLine(s1.id);",
            "System.out.println(s1.id);",
            "print(s1.id \\n);",
            "System.print.out(s1.id);"
          ],
          correct: 1,
          explanation: "The standard output stream command in C++ is `cout`. The direct equivalent in Java to print a line to the console is `System.out.println()`.",
          optionExplanations: [
            "Why A is wrong — This is closer to C# syntax (`Console.WriteLine`).",
            "Why B is correct — `System.out.println()` is the exact valid Java syntax for console output with a newline.",
            "Why C is wrong — This resembles Python or C syntax without the object-oriented System/Out structure.",
            "Why D is wrong — The Java syntax is strictly `System.out` followed by the method `.println()`, not the other way around."
          ]
        },
        {
          question: "When discussing 'Run-time polymorphism', which OOP feature is inherently required to make it function?",
          options: [
            "Method Overloading",
            "Data Hiding (Private modifiers)",
            "Inheritance (Base and Derived classes)",
            "The `new` dynamic memory operator"
          ],
          correct: 2,
          explanation: "Run-time polymorphism (Late Binding) specifically relies on Method Overriding. Overriding can only occur when a derived class inherits from a base class and redefines a virtual function sharing the exact same signature.",
          optionExplanations: [
            "Why A is wrong — Overloading occurs within the same class scope and is an example of Compile-time polymorphism.",
            "Why B is wrong — Private modifiers secure data but do not enable polymorphic execution paths.",
            "Why C is correct — Run-time polymorphism via overriding requires a hierarchical inheritance relationship.",
            "Why D is wrong — The `new` operator allocates memory but does not dictate polymorphic logic execution."
          ]
        },
        {
          question: "If 'Vehicle' is a class and 'Car' is a derived class, which term correctly describes 'Vehicle' in Java terminology?",
          options: [
            "Subclass",
            "Superclass",
            "Base class",
            "Derived class"
          ],
          correct: 1,
          explanation: "While C++ uses the terms 'Base class' and 'Derived class', Java terminology refers to the parent class as the 'Superclass' and the child class as the 'Subclass'.",
          optionExplanations: [
            "Why A is wrong — 'Subclass' is the Java term for the child class (Car).",
            "Why B is correct — 'Superclass' is the explicit Java term for the parent class being inherited from.",
            "Why C is wrong — 'Base class' is correct in C++, but the question specifies Java terminology.",
            "Why D is wrong — 'Derived class' is the C++ equivalent of a subclass."
          ]
        },
        {
          question: "Examine the following C++ snippet:\n\nclass Student {\npublic:\n  int id;\n  void insert(int i) {\n    id = i;\n  }\n};\n\nWhat is the role of `int i` in this context?",
          options: [
            "It acts as a private encapsulation key preventing external access.",
            "It serves as an argument parameter passed into the member function to set the state.",
            "It overrides the default identity hashmap generated by the compiler.",
            "It acts as the derived class inheriting from the Student base."
          ],
          correct: 1,
          explanation: "In this snippet, `void insert(int i)` is a member function acting as a 'setter'. The parameter `i` receives data from the main program and bridges it to assign a value to the member data `id`.",
          optionExplanations: [
            "Why A is wrong — It is a simple function parameter, not a security or access modifier.",
            "Why B is correct — `i` takes the input argument and sets the state (`id = i`).",
            "Why C is wrong — Hashmaps relate to Java object identities, not C++ integer variables.",
            "Why D is wrong — `i` is an integer variable, not a class structure capable of inheritance."
          ]
        },
        {
          question: "Which scenario correctly illustrates 'Compile-time polymorphism' via function overloading?",
          options: [
            "A `Bird` class overrides the `move()` function inherited from the `Animal` class.",
            "A developer writes `int max(int a, int b)` and later writes `double max(double a, double b)` in the same class.",
            "A variable `int a;` is protected inside a medical capsule-like class structure.",
            "An object `Car` accesses the `brand` string data inherited from `Vehicle`."
          ],
          correct: 1,
          explanation: "Function overloading occurs when multiple functions share the same name (e.g., `max`) but accept different types or numbers of arguments. The compiler decides which to invoke early during compilation.",
          optionExplanations: [
            "Why A is wrong — Overriding a base class method is Run-time polymorphism.",
            "Why B is correct — Reusing the function name `max` with varying parameter data types demonstrates Compile-time polymorphism.",
            "Why C is wrong — This describes Encapsulation.",
            "Why D is wrong — This demonstrates Code Reusability through Inheritance."
          ]
        },
        {
          question: "Why does the C++ compiler crash when you write `int A;` and `int A;` in the same global procedural scope, but accepts identical variable names if they are inside separate classes?",
          options: [
            "Because procedural programming uses late binding, making variable names highly volatile.",
            "Because classes generate abstract destructors that automatically delete duplicate data.",
            "Because OOP utilizes 'Data Maintenance' via encapsulation, securing variables within distinct class scopes.",
            "Because Java's identity hashmaps seamlessly manage the duplicate memory addresses."
          ],
          correct: 2,
          explanation: "A major advantage of OOP over procedural programming is Data Maintenance. Encapsulation wraps data inside specific class boundaries, meaning `ClassA.A` and `ClassB.A` live in isolated, secure scopes and do not conflict.",
          optionExplanations: [
            "Why A is wrong — Late binding applies to runtime function overriding, not variable declaration collisions.",
            "Why B is wrong — Destructors free memory when an object is destroyed; they do not resolve compilation naming errors.",
            "Why C is correct — Classes provide individual scope (encapsulation), resolving global naming collisions found in procedural code.",
            "Why D is wrong — This is a C++ compilation issue; Java's identity hashmaps are irrelevant here."
          ]
        },
        {
          question: "According to the professor, if you conceptualize an object-oriented program as a sentence, what role do the classes and objects play?",
          options: [
            "They serve as the punctuation marks terminating the logic.",
            "They act as the foundational grammar of the language enabling communication.",
            "They represent the mathematical lambda calculus operations.",
            "They function strictly as the visual flowcharts of the system."
          ],
          correct: 1,
          explanation: "In Lecture 1, the professor explicitly states that objects and classes act like the 'grammar' of the language, providing the structured rules and entities that allow different parts of the program to communicate and achieve a goal.",
          optionExplanations: [
            "Why A is wrong — Semicolons and braces are punctuation; classes are structural blueprints.",
            "Why B is correct — This matches the direct analogy given in the introductory lecture defining OOP.",
            "Why C is wrong — Lambda calculus is the 1930s mathematical predecessor, not the grammar analogy for modern OOP.",
            "Why D is wrong — OOAD diagrams replace flowcharts, but classes themselves are the code structure, not the drawings."
          ]
        },
        {
          question: "Given the following Java code:\n\nclass Employee {\n  int id;\n  String name;\n}\npublic class Main {\n  public static void main(String[] args) {\n    Employee e1;\n    e1.id = 10;\n  }\n}\n\nWhat is the expected result when compiling this Java code?",
          options: [
            "The program compiles successfully and prints 10.",
            "A compilation error occurs because the object `e1` has not been instantiated using `new`.",
            "The program dynamically generates a hashmap and binds the ID to 10 via early binding.",
            "The `extends` keyword is missing, preventing access to the `id` member data."
          ],
          correct: 1,
          explanation: "In Java, declaring an object reference (`Employee e1;`) does not allocate memory for it. You must explicitly instantiate it using the `new` keyword (`Employee e1 = new Employee();`). Attempting to access members of an uninitialized object yields a compilation error.",
          optionExplanations: [
            "Why A is wrong — It fails to compile due to a lack of memory allocation.",
            "Why B is correct — Java strictly requires dynamic object instantiation using `new` before accessing member data.",
            "Why C is wrong — A hashmap identity cannot be generated if the object hasn't been instantiated.",
            "Why D is wrong — The code is not attempting inheritance, so `extends` is not required here."
          ]
        },
        {
          question: "Which of the following defines 'Code Reusability' within the Object-Oriented Programming paradigm?",
          options: [
            "Hiding internal implementation details using pure virtual functions.",
            "Utilizing the `extends` or `:` operators to allow a derived class to inherit existing member data and functions from a base class.",
            "Using the `using namespace std;` directive to recycle standard input/output streams.",
            "Bundling variables and functions together into a single capsule."
          ],
          correct: 1,
          explanation: "Code reusability is a massive advantage of OOP, heavily realized through Inheritance. Once a base class is written and tested, a derived class can inherit its properties (using `:` in C++ or `extends` in Java), preventing the need to rewrite that code.",
          optionExplanations: [
            "Why A is wrong — Hiding internal details describes Abstraction.",
            "Why B is correct — Inheritance explicitly grants derived classes access to base class code, providing high code reusability.",
            "Why C is wrong — Namespaces simplify syntax for libraries but do not represent the architectural OOP reusability of classes.",
            "Why D is wrong — Bundling data and functions is Encapsulation."
          ]
        },
        {
          question: "Consider an object `b1` representing a 'Bike'. Which of the following attributes would best be categorized as the object's 'Behavior'?",
          options: [
            "The bike's weight of 150 kilograms.",
            "The bike's identity hashmap assigned by the JVM.",
            "The action of the bike accelerating smoothly on a road.",
            "The bike's brand name 'Yamaha'."
          ],
          correct: 2,
          explanation: "In OOP, an object's characteristics are divided into State, Behavior, and Identity. Weight and Brand are data values (State). Accelerating or running is a functionality or action (Behavior).",
          optionExplanations: [
            "Why A is wrong — Weight is a specific data value representing State.",
            "Why B is wrong — The hashmap is the system-level Identity tracking mechanism.",
            "Why C is correct — Accelerating is an action/functionality, perfectly representing Behavior.",
            "Why D is wrong — A brand name is a string of data representing State."
          ]
        },
        {
          question: "What is INCORRECT regarding the concept of a 'Class' in C++ and Java?",
          options: [
            "A class acts as a template or blueprint from which objects are generated.",
            "A class occupies physical execution memory immediately upon being defined in the code.",
            "A class encapsulates both data members (state) and member functions (behavior).",
            "A class can represent a group of similar objects sharing the same structure."
          ],
          correct: 1,
          explanation: "A class is purely a logical blueprint. It does not occupy physical RAM for its data members until an actual object is instantiated from it during runtime.",
          optionExplanations: [
            "Why A is wrong — This is a true statement defining a class.",
            "Why B is correct — This statement is INCORRECT. Classes do not consume memory for their state variables until object instantiation.",
            "Why C is wrong — This is a true statement describing encapsulation.",
            "Why D is wrong — This is a true statement describing how classes categorize similar objects."
          ]
        },
        {
          question: "When dealing with access modifiers in a C++ class, what is the default visibility of member data if no access specifier like `public:` or `private:` is explicitly written?",
          options: [
            "protected",
            "public",
            "abstract",
            "private"
          ],
          correct: 3,
          explanation: "By default, if you open a class definition in C++ and start declaring member variables without specifying an access modifier, the compiler treats all those members as `private`. They cannot be accessed by the main driver program directly.",
          optionExplanations: [
            "Why A is wrong — Protected members must be explicitly declared to allow inherited access.",
            "Why B is wrong — In C++, classes default to private. (Note: C-style `structs` default to public).",
            "Why C is wrong — Abstract is not an access modifier.",
            "Why D is correct — C++ strictly defaults all class members to private to enforce data hiding."
          ]
        },
        {
          question: "What does the abbreviation 'OOAD' stand for, which replaces traditional flowcharts in modern software design?",
          options: [
            "Object-Oriented Array Declarations",
            "Overloaded Object Abstraction Designs",
            "Object-Oriented Analysis and Design",
            "Overridden Operator Allocation Dispatch"
          ],
          correct: 2,
          explanation: "OOAD stands for Object-Oriented Analysis and Design. It provides visual diagrams and design paradigms that map out class relationships and interactions, heavily replacing traditional procedural algorithm flowcharts.",
          optionExplanations: [
            "Why A is wrong — Arrays are simple data structures, not a broad design philosophy.",
            "Why B is wrong — This is a nonsensical mix of OOP terms.",
            "Why C is correct — OOAD is the formal design methodology mentioned in the lectures that provides a design advantage.",
            "Why D is wrong — This is a fabricated combination of OOP keywords."
          ]
        },
        {
          question: "Read the C++ code below:\n\nclass Demo {\npublic:\n  int data;\n  void display() {\n    cout << data;\n  }\n};\nint main() {\n  Demo d1;\n  d1.data = 42;\n  d1.display();\n  return 0;\n}\n\nWhat bridge mechanism connects the object `d1` to the member function `display()`?",
          options: [
            "The compile-time early binding algorithm.",
            "The scope resolution operator `::`.",
            "The public inheritance extends mechanism.",
            "The dot operator `.`."
          ],
          correct: 3,
          explanation: "In order to access public members (both data and functions) of a standard statically allocated object in C++, the dot operator (`.`) is utilized as a bridge. The syntax `d1.display()` proves this.",
          optionExplanations: [
            "Why A is wrong — Early binding resolves function overloading, it is not the syntactical operator connecting the object to the method.",
            "Why B is wrong — `::` is used to define functions outside the class scope, not to call methods on an instantiated object.",
            "Why C is wrong — No inheritance is happening in this single-class code snippet.",
            "Why D is correct — The dot operator `.`, seen in `d1.display()`, is the explicit syntactical bridge."
          ]
        },
        {
          question: "Which of the following best describes 'Dynamic Method Dispatch' in Object-Oriented Programming?",
          options: [
            "A compile-time mechanism where identically named functions are resolved based on their argument count.",
            "The Java-specific process required to generate an identity hashmap upon object creation.",
            "A run-time polymorphism feature where a call to an overridden method is resolved during execution.",
            "The design advantage of OOAD that creates dynamic flowcharts."
          ],
          correct: 2,
          explanation: "Dynamic Method Dispatch is the technical mechanism behind Run-time Polymorphism (Late Binding). When a base class reference points to a derived class object, the JVM (or C++ runtime) dynamically dispatches the method call to the overridden version in the derived class during execution.",
          optionExplanations: [
            "Why A is wrong — This describes Compile-time polymorphism (Method Overloading).",
            "Why B is wrong — Identity hashmaps relate to object uniqueness, not method dispatching.",
            "Why C is correct — Dynamic method dispatch resolves overridden method execution paths at runtime.",
            "Why D is wrong — OOAD generates static design diagrams, not runtime execution paths."
          ]
        },
        {
          question: "According to the lectures, if an object acts as the 'physical instance', how is the 'Class' conceptually described in relation to it?",
          options: [
            "The class is the runtime environment that executes the object.",
            "The class is a template or blueprint specifying the member data and functions.",
            "The class is the dynamic memory heap where the object is allocated.",
            "The class is an abstract base pointer preventing access to data."
          ],
          correct: 1,
          explanation: "A class acts as a template, blueprint, or set of grammar rules. It dictates the variables (state) and methods (behavior) that any object instantiated from it will possess.",
          optionExplanations: [
            "Why A is wrong — The runtime environment (like the JVM or OS) executes the code, not the class.",
            "Why B is correct — 'Template' or 'Blueprint' are the exact conceptual terms used to define a class in OOP.",
            "Why C is wrong — The heap is hardware memory management, distinct from a class blueprint.",
            "Why D is wrong — A class defines structure; it does not intrinsically act as a pointer blocking data."
          ]
        },
        {
          question: "Which of the following is NOT required to successfully implement Compile-Time Polymorphism (Function Overloading)?",
          options: [
            "The overloaded functions must share the exact same function name.",
            "The overloaded functions must reside within separate base and derived classes.",
            "The overloaded functions must possess different argument types or a different number of arguments.",
            "The compiler must be able to resolve the correct function prior to program execution."
          ],
          correct: 1,
          explanation: "Function overloading (Compile-time polymorphism) occurs when multiple functions share the same name *within the same scope/class*. Placing identically named functions in a base class and derived class is actually Function Overriding (Run-time polymorphism).",
          optionExplanations: [
            "Why A is wrong — Overloading absolutely requires the function names to be identical.",
            "Why B is correct — This statement is FALSE regarding overloading. Separate base/derived classes are used for Overriding, not Overloading.",
            "Why C is wrong — Different parameter lists are strictly required for the compiler to differentiate overloaded functions.",
            "Why D is wrong — Early binding dictates the resolution must happen at compile-time (prior to execution)."
          ]
        },
        {
          question: "In C++, suppose a class `Cylinder` has public variables `radius` and `height`. A developer writes `Cylinder c1; c1.radius = 5;`. When does `c1` receive its memory allocation?",
          options: [
            "At runtime, only when the `new` operator dynamically builds it.",
            "At compile-time, because C++ prohibits dynamic OOP structures.",
            "At runtime, automatically allocated on the stack when the `c1` declaration is executed.",
            "Memory is never allocated because `Cylinder` acts purely as an abstract blueprint."
          ],
          correct: 2,
          explanation: "In C++, statically declaring an object like `Cylinder c1;` inside a function allocates memory for it automatically on the stack at runtime when the execution hits that scope. Unlike Java, C++ does not strictly require `new` for instantiation.",
          optionExplanations: [
            "Why A is wrong — C++ can use `new` for heap allocation, but standard stack allocation (`Cylinder c1;`) does not require it.",
            "Why B is wrong — C++ heavily supports dynamic structures via pointers and `new`/`delete`, but this specific line is automatic stack allocation.",
            "Why C is correct — The physical instance gets its stack memory allocated right at the point of declaration during execution.",
            "Why D is wrong — The *Class* is the blueprint, but `c1` is the instantiated object, which absolutely requires physical memory."
          ]
        },
        {
          question: "Which early programming language, created in 1965, first pioneered the specific OOP concepts of classes, subclasses, inheritance, and virtual methods?",
          options: [
            "Pascal",
            "C",
            "Sketchpad",
            "Simula"
          ],
          correct: 3,
          explanation: "While Alan Kay coined the term OOP in 1966, the language Simula, introduced in 1965, was the first to implement the core structural elements of OOP, including classes and inheritance.",
          optionExplanations: [
            "Why A is wrong — Pascal is a classic procedural-oriented programming language.",
            "Why B is wrong — C is a foundational procedural language created by Dennis Ritchie.",
            "Why C is wrong — Sketchpad (1961) was a graphical application that inspired object-based thinking, not a programming language itself.",
            "Why D is correct — Simula (1965) is historically recognized as the first OOP language featuring classes and subclasses."
          ]
        },
        {
          question: "A student compares Java and C++ inheritance syntax. They note C++ uses `class Child : public Parent`. What is the exact equivalent keyword linking classes in Java?",
          options: [
            "implements",
            "inherits",
            "super",
            "extends"
          ],
          correct: 3,
          explanation: "Java specifically uses the `extends` keyword to indicate that a subclass inherits from a superclass (e.g., `class Child extends Parent`).",
          optionExplanations: [
            "Why A is wrong — `implements` is used in Java to connect a class to an Interface, not a superclass.",
            "Why B is wrong — `inherits` is not a valid Java keyword.",
            "Why C is wrong — `super` is used inside a subclass to invoke the parent's constructor or methods, not to define the inheritance link itself.",
            "Why D is correct — `extends` explicitly maps to C++'s single inheritance colon operator."
          ]
        },
        {
          question: "When organizing code, how does the concept of 'Modularity' benefit an Object-Oriented project compared to a massive procedural script?",
          options: [
            "It forces all algorithms to merge into a single global method to conserve runtime memory.",
            "It breaks complex software down into manageable, independent components represented by classes.",
            "It allows variables to override functions using identity hashmaps.",
            "It removes the need to compile code, running it directly via dynamic method dispatch."
          ],
          correct: 1,
          explanation: "Modularity through classes is a primary advantage of OOP. It allows developers to partition a massive, tangled procedural codebase into logical, self-contained units (classes) that represent distinct parts of a system.",
          optionExplanations: [
            "Why A is wrong — Merging everything into one method is the opposite of modularity; it creates a monolithic script.",
            "Why B is correct — Modularity explicitly means dividing complex systems into smaller, maintainable class-based modules.",
            "Why C is wrong — Variables cannot override functions, and hashmaps manage identity, not code structure.",
            "Why D is wrong — Code must still be compiled (or interpreted via bytecode). Modularity aids developer organization, not bypass compilation."
          ]
        },
        {
          question: "Examine the following pseudo-Java code snippet:\n\nclass Account {\n  int balance = 5000;\n}\nclass Main {\n  public static void main(String[] args) {\n    Account a1 = new Account();\n    Account a2 = a1;\n  }\n}\n\nBased on OOP identity tracking in Java, what is fundamentally true about objects `a1` and `a2`?",
          options: [
            "They share the exact same identity hashmap because `a2` is simply a reference pointing to the object instantiated by `a1`.",
            "They possess two distinct identity hashmaps representing two entirely separate physical objects in memory.",
            "A compilation error triggers because object copy constructors must use the `extends` keyword.",
            "They trigger early binding polymorphism, cloning the memory values at compile time."
          ],
          correct: 0,
          explanation: "In Java, object variables act as references. Because the `new` operator was only called once (`new Account()`), only one object was created in heap memory with one identity hashmap. `a2 = a1;` simply points the `a2` reference to the exact same object instance as `a1`.",
          optionExplanations: [
            "Why A is correct — Only one instantiation occurred. Both references point to the same physical object, sharing the same identity hashmap.",
            "Why B is wrong — Without a second `new` keyword, a second physical object does not exist.",
            "Why C is wrong — Assignment operator `=` correctly passes references in Java without `extends`.",
            "Why D is wrong — Early binding refers to function overloading, not object reference assignment."
          ]
        },
        {
          question: "When applying OOP to a real-world scenario, you write a class representing a 'Bank'. Under which category of objects does this logically fall?",
          options: [
            "Tangible Objects",
            "Primitive Variables",
            "Intangible Objects",
            "Abstract Hashmaps"
          ],
          correct: 2,
          explanation: "In object-oriented modeling, a bank, university, or system is classified as an 'intangible object' because it is a conceptual/logical entity, unlike a physical 'tangible' object such as a pen or chair.",
          optionExplanations: [
            "Why A is wrong — Tangible objects can be physically touched (like a car).",
            "Why B is wrong — Primitive variables (int, float) hold raw data, they do not conceptually model a system.",
            "Why C is correct — Intangible objects represent conceptual entities like banking systems or software managers.",
            "Why D is wrong — Hashmaps identify instances in memory; they are not the category for modeling conceptual systems."
          ]
        },
        {
          question: "Which aspect of OOP ensures that internal member data like an employee's salary cannot be arbitrarily modified by external procedural global functions?",
          options: [
            "Code Reusability",
            "Encapsulation and Data Hiding",
            "Dynamic Late Binding",
            "Virtual Destructors"
          ],
          correct: 1,
          explanation: "Encapsulation binds data and functions securely into a class capsule. By using access modifiers (like `private`), it achieves 'data hiding', preventing unauthorized global functions from arbitrarily modifying sensitive internal state variables like a salary.",
          optionExplanations: [
            "Why A is wrong — Reusability is achieved via Inheritance to avoid rewriting code.",
            "Why B is correct — Encapsulation protects data via scoping, establishing robust 'Data Maintenance and Security'.",
            "Why C is wrong — Late binding resolves which overridden method executes; it does not secure variables.",
            "Why D is wrong — Destructors safely clear memory when objects are destroyed, they do not block access to live variables."
          ]
        },
        {
          question: "Regarding procedural C programming versus C++, how does OOP uniquely resolve the issue of 'Data Maintenance' when two different program components require an integer variable named `count`?",
          options: [
            "C++ uses dynamic method dispatch to automatically rewrite variable names at runtime.",
            "Procedural C effortlessly handles multiple identical global variables, while C++ blocks them.",
            "OOP encapsulates variables within distinct Class scopes, preventing the compilation collisions that occur in procedural global scopes.",
            "OOP forces the developer to rely exclusively on lambda calculus algorithms to manage state."
          ],
          correct: 2,
          explanation: "In standard procedural C, defining `int count;` globally twice triggers a naming collision error. OOP's modularity and encapsulation mean `ClassA` and `ClassB` can both have a member data `count` without collision, vastly improving Data Maintenance.",
          optionExplanations: [
            "Why A is wrong — Dynamic method dispatch is for executing polymorphic functions, not rewriting variable names.",
            "Why B is wrong — Procedural C strictly prohibits duplicate global declarations in the same scope.",
            "Why C is correct — Class boundaries encapsulate data, partitioning the namespace so identical variable names do not collide.",
            "Why D is wrong — Lambda calculus is a 1930s mathematical root, unrelated to C++ scope resolution."
          ]
        },
        {
          question: "Read the C++ snippet:\n\nclass Animal {\npublic:\n  void eat() { cout << \"Eating\"; }\n};\nclass Dog : public Animal {\n};\nint main() {\n  Dog d1;\n  d1.eat();\n}\n\nWhy does this code successfully output 'Eating' despite the `Dog` class body being empty?",
          options: [
            "Because early binding assumes all undefined classes run abstract global functions.",
            "Because the C++ compiler automatically generates an `eat()` behavior for any class named `Dog`.",
            "Because the `Dog` class inherits the public member function `eat()` from the `Animal` base class.",
            "Because the dot operator dynamically overrides the missing function at runtime."
          ],
          correct: 2,
          explanation: "This is a classic demonstration of Single Inheritance. The `Dog` class is derived from the `Animal` class publicly (`: public Animal`). It inherently possesses all public properties and behaviors of the base class, making `d1.eat()` perfectly valid.",
          optionExplanations: [
            "Why A is wrong — Early binding resolves function signatures; it does not assume or inject global code.",
            "Why B is wrong — Compilers do not make linguistic assumptions based on class names like 'Dog'.",
            "Why C is correct — Inheritance provides 'Code Reusability'; the derived class utilizes the base class's defined public function.",
            "Why D is wrong — Overriding requires explicitly writing a matching function in the derived class, which is absent here."
          ]
        },
        {
          question: "Which of the following is INCORRECT regarding the relationship between 'State' and 'Behavior'?",
          options: [
            "State is mapped directly to the member functions, while behavior is mapped to the identity hashmap.",
            "State defines the attributes (like color or ID), while behavior defines operations (like writing or calculating).",
            "An object is defined as an entity that encapsulates both State and Behavior.",
            "Behavior acts upon or utilizes the State of the object to perform its programmed logic."
          ],
          correct: 0,
          explanation: "This statement reverses and confuses the concepts. State maps to member data (variables), and behavior maps to member functions (methods). Identity hashmaps map to the object's unique runtime tracking.",
          optionExplanations: [
            "Why A is correct — This statement is highly inaccurate, incorrectly tying state to functions and behavior to hashmaps.",
            "Why B is wrong — This is a perfectly accurate definition of the concepts.",
            "Why C is wrong — This accurately defines an object according to the lecture.",
            "Why D is wrong — This accurately describes how methods (behavior) manipulate attributes (state)."
          ]
        },
        {
          question: "If an exam question asks to 'model a real-world object like a Pen in C++', which combination accurately reflects OOP theory?",
          options: [
            "Class = Intangible Object, Identity = Write(), Behavior = Parker",
            "Class = Base Address, State = Ink Volume, Identity = Semicolon",
            "Object = Specific Pen Instance, State = Blue Color, Behavior = Writing Action",
            "Object = Abstract Template, Behavior = C++ Semicolon, State = `extends` keyword"
          ],
          correct: 2,
          explanation: "Following the professor's analogy: A specific pen in your hand is the Object Instance. Its properties (like brand 'Parker' or color 'Blue') represent its State. Its functionality (like writing) represents its Behavior.",
          optionExplanations: [
            "Why A is wrong — A pen is a tangible object, 'write' is a behavior, and 'Parker' is state.",
            "Why B is wrong — Identity is the memory address, not a semicolon. A class is a blueprint.",
            "Why C is correct — This maps the OOP concepts perfectly to the physical properties of a pen.",
            "Why D is wrong — Objects are physical/loaded instances, not abstract templates. Semicolons and `extends` are syntax."
          ]
        },
        {
          question: "A programmer is struggling with procedural code full of nested `if-else` blocks routing execution to specific external functions. Which core OOP feature directly aims to replace this messy logic with clean, dynamic execution paths?",
          options: [
            "Data Hiding via `private` access modifiers.",
            "Run-time Polymorphism via Method Overriding and Late Binding.",
            "Identity Hashmap synchronization.",
            "The absence of a trailing semicolon in Java class syntax."
          ],
          correct: 1,
          explanation: "Run-time polymorphism (Overriding) allows the program to dynamically dispatch a method call to the correct specific object instance at runtime without needing massive procedural `if-else` blocks checking the object type.",
          optionExplanations: [
            "Why A is wrong — Data hiding secures variables; it doesn't navigate execution logic paths.",
            "Why B is correct — Polymorphism simplifies code by allowing a single method call to execute vastly different overriding functions depending on the object type.",
            "Why C is wrong — Hashmap synchronization is a threading/memory concept, not logic routing.",
            "Why D is wrong — Syntax punctuation has no bearing on algorithmic flow logic."
          ]
        },
        {
          question: "Examine the Java definition below:\n\nclass Person {\n  public static void main(String[] args) {\n    Person p1 = new Person();\n  }\n}\n\nIn Java terminology taught in the course, what specific role does the `Person` class play due to the presence of `main()`?",
          options: [
            "The Abstract Base Class",
            "The Tangible Object Capsule",
            "The Virtual Method Template",
            "The Driver Class"
          ],
          correct: 3,
          explanation: "In Java, the specific class containing the `public static void main(String[] args)` method serves as the main entry point for execution. The professor explicitly refers to this central class structure as the 'Driver class'.",
          optionExplanations: [
            "Why A is wrong — The class is concrete and fully executable, not abstract.",
            "Why B is wrong — The class itself is a blueprint; it is not a tangible physical object.",
            "Why C is wrong — `main` is a static executable function, not a virtual method deferred for overriding.",
            "Why D is correct — The class containing `main()` drives the program execution and object instantiation."
          ]
        },
        {
          question: "What is the primary conceptual gap between 'Compile-time polymorphism' and 'Run-time polymorphism'?",
          options: [
            "Compile-time polymorphism utilizes inheritance overrides, whereas Run-time relies strictly on overloading variables.",
            "Compile-time determines the execution path based on function signatures before execution, while Run-time determines the execution path based on object types during execution.",
            "Compile-time polymorphism requires the C++ `new` operator, while Run-time polymorphism relies on the Java `extends` keyword.",
            "Compile-time polymorphism hides data via encapsulation, whereas Run-time polymorphism exposes it to abstract classes."
          ],
          correct: 1,
          explanation: "Compile-time polymorphism (Early Binding via Overloading) resolves identical function names by analyzing their argument lists during code compilation. Run-time polymorphism (Late Binding via Overriding) resolves method calls while the program runs, checking the specific derived object type instantiated in memory.",
          optionExplanations: [
            "Why A is wrong — This reverses the mechanics: compile-time is overloading, run-time is inheritance overrides.",
            "Why B is correct — This accurately captures the timing (before vs during execution) and mechanism (signatures vs object types) distinctions.",
            "Why C is wrong — These keywords relate to memory and inheritance syntax, not directly dictating the binding timing.",
            "Why D is wrong — Encapsulation and abstraction are entirely distinct OOP features from polymorphic binding."
          ]
        },
        {
          question: "In C++, the memory base address of an array provides a unique identity. What equivalent Java mechanism fulfills this identical OOP characteristic requirement for objects?",
          options: [
            "The `System.out.println()` IO stream.",
            "The `extends` abstract keyword.",
            "The dynamic method dispatch.",
            "The JVM Identity Hashmap."
          ],
          correct: 3,
          explanation: "Identity is a core characteristic of an object. In C++, printing an object or array yields a physical memory base address. Because Java abstracts direct memory access, it utilizes an 'Identity Hashmap' to uniquely track and identify object instances dynamically.",
          optionExplanations: [
            "Why A is wrong — This is the Java syntax for outputting strings to the console.",
            "Why B is wrong — `extends` manages inheritance relationships.",
            "Why C is wrong — Method dispatch relates to polymorphic overriding execution.",
            "Why D is correct — The Identity Hashmap explicitly tracks unique object IDs in Java, mirroring C++ base addresses."
          ]
        },
        {
          question: "A developer complains that procedural flowchart designs are failing to communicate the complex data interactions in a large modern software system. Which OOP advantage directly solves this architectural documentation issue?",
          options: [
            "Polymorphic Method Overloading",
            "Design Advantages via OOAD",
            "Lambda Calculus derivations",
            "C++ Scope Resolution Operators"
          ],
          correct: 1,
          explanation: "Procedural flowcharts map linear algorithms, which struggle to represent complex software states. Object-Oriented Analysis and Design (OOAD) provides visual diagrams (like Class diagrams) that map objects, data, and their interactions, providing a massive 'Design Advantage'.",
          optionExplanations: [
            "Why A is wrong — Overloading solves code redundancy, not high-level software architectural documentation.",
            "Why B is correct — OOAD is the specific design advantage cited in the lectures that surpasses traditional procedural flowcharts.",
            "Why C is wrong — Lambda calculus is a theoretical math foundation from the 1930s.",
            "Why D is wrong — `::` is a low-level syntax feature in C++, not a system design methodology."
          ]
        },
        {
          question: "What specific characteristic makes 'Modularity through Classes' a massive benefit over procedural 'spaghetti' code?",
          options: [
            "It groups related data (State) and functions (Behavior) into self-contained, independent units that can be managed separately.",
            "It guarantees that all programs will execute in constant O(1) time.",
            "It forces the compiler to ignore syntax errors if the class uses early binding.",
            "It automatically links C++ programs directly into Java identity hashmaps."
          ],
          correct: 0,
          explanation: "Modularity breaks complex, tangled procedural code down into isolated, manageable pieces (Classes). Because a Class encapsulates its own state and behavior, developers can fix, test, or upgrade one class without breaking the entire global system.",
          optionExplanations: [
            "Why A is correct — Modularity logically groups related data and functions into manageable, isolated components.",
            "Why B is wrong — OOP architecture has no automatic bearing on algorithmic time complexity like O(1).",
            "Why C is wrong — Compilers never ignore syntax errors; early binding is an overloading mechanism.",
            "Why D is wrong — C++ and Java are separate languages with separate memory management paradigms."
          ]
        },
        {
          question: "If a developer wants to write a method `deposit()` that works exclusively on the data inside `class BankAccount`, what specific OOP mechanism is they employing?",
          options: [
            "Multi-level Inheritance",
            "Compile-time polymorphism",
            "Object Identity",
            "Encapsulation"
          ],
          correct: 3,
          explanation: "Encapsulation is the process of bundling member data (like an account balance) and the member functions that manipulate it (like `deposit()`) together inside a single Class, shielding it from outside interference.",
          optionExplanations: [
            "Why A is wrong — Inheritance passes traits down to child classes, it does not define the core bundling of methods and data.",
            "Why B is wrong — Polymorphism allows functions to take multiple forms, not the bundling action itself.",
            "Why C is wrong — Identity tracks instances, not the security of the methods.",
            "Why D is correct — Encapsulation ties the `deposit()` behavior securely to the `BankAccount` state."
          ]
        },
        {
          question: "Which of the following scenarios is a FALSE representation of OOP Abstraction?",
          options: [
            "A base class defining a method `calculateArea()` but leaving it empty, requiring a `Circle` derived class to provide the formula.",
            "Writing the full, complex algorithm for `calculateArea()` inside the base class so all derived classes are forced to use the exact same logic.",
            "Providing a simple interface like an ATM screen while hiding the complex database transaction logic behind it.",
            "Comparing a class definition to the abstract of a research paper, where the concept is stated but detailed proofs are deferred."
          ],
          correct: 1,
          explanation: "Abstraction specifically involves *hiding* or *deferring* complex implementation details while showing only the necessary interface or declaration. Defining the full, unchangeable algorithm in the base class represents strict inheritance and concrete definition, failing the concept of abstraction.",
          optionExplanations: [
            "Why A is wrong — This is a true example of abstraction (deferring implementation to child).",
            "Why B is correct — This statement is FALSE regarding abstraction. Hardcoding complex logic that cannot be altered or hidden violates abstraction principles.",
            "Why C is wrong — This is a classic real-world true example of abstraction (hiding complexity).",
            "Why D is wrong — This is a true analogy explicitly used by Prof. Bala Subramanian."
          ]
        },
        {
          question: "Consider a C++ snippet featuring `class Box { double length; };`. If a programmer declares `Box b1;`, what happens if they immediately try to execute `b1.length = 10;` in `main()`?",
          options: [
            "It will succeed because the dot operator bypasses access modifiers.",
            "It will succeed because C++ classes default to public visibility.",
            "It will fail with a compilation error because C++ class members default to private visibility.",
            "It will fail because the `new` keyword was omitted during instantiation."
          ],
          correct: 2,
          explanation: "In C++, if no access modifier (like `public:`) is written, all members of a `class` default to `private`. The main driver program cannot access private members directly using the dot operator, triggering a compilation error.",
          optionExplanations: [
            "Why A is wrong — The dot operator strictly respects access modifiers; it cannot bypass `private`.",
            "Why B is wrong — C++ classes default to `private`, not `public`.",
            "Why C is correct — The missing `public:` tag leaves `length` hidden as `private`, preventing direct assignment.",
            "Why D is wrong — `Box b1;` is perfectly valid static stack allocation in C++."
          ]
        }
      ]
    },
    {
      
      name: "Unit 2: Classes and Objects in C++ and Java",
      questions: [
        {
          question: "When conceptualizing a real-world entity like a 'Pen' in Object-Oriented Programming, how are its physical properties and writing capabilities categorized?",
          options: [
            "Properties are the identity hashmap, and writing is the compile-time polymorphism.",
            "Properties are the state (member data), and writing is the behavior (member function).",
            "Properties are the tangible classes, and writing is the intangible memory allocation.",
            "Properties are the access specifiers, and writing is the base memory address."
          ],
          correct: 1,
          explanation: "In OOP, an object encapsulates state and behavior. The state represents the data values or physical properties (like a pen's color or brand), while the behavior represents its functionality or methods (like writing).",
          optionExplanations: [
            "Why A is wrong — Identity hashmaps identify objects in memory; they do not represent physical properties or state.",
            "Why B is correct — This exactly matches the professor's analogy where physical traits are 'state' and actions are 'behavior'.",
            "Why C is wrong — Classes are blueprints, not properties, and writing is an action, not memory allocation.",
            "Why D is wrong — Access specifiers dictate security (public/private), not the properties of the object itself."
          ]
        },
        {
          question: "Which of the following syntactical rules is a strict requirement for defining a class in C++ but is strictly omitted in Java?",
          options: [
            "Declaring all member data before member functions.",
            "Using the `class` keyword before the class name.",
            "Terminating the closing brace of the class definition with a semicolon.",
            "Utilizing the `new` keyword inside the class body."
          ],
          correct: 2,
          explanation: "A fundamental syntactical difference taught in the lectures is that C++ requires a semicolon `;` immediately following the closing brace `}` of a class definition, whereas Java does not use a trailing semicolon.",
          optionExplanations: [
            "Why A is wrong — Neither language enforces a strict order of declaring data before functions.",
            "Why B is wrong — Both C++ and Java use the `class` keyword to define classes.",
            "Why C is correct — C++ syntax ends a class blueprint with `};`, while Java simply ends with `}`.",
            "Why D is wrong — The `new` keyword is used for instantiation in Java, not class definition."
          ]
        },
        {
          question: "Examine the following C++ code snippet:\n\nclass Box {\n  double width;\npublic:\n  void setWidth(double w) { width = w; }\n};\nint main() {\n  Box b1;\n  b1.width = 10.0;\n  return 0;\n}\n\nWhy will this code fail to compile?",
          options: [
            "The object `b1` was not dynamically allocated using the `new` operator.",
            "The member data `width` defaults to private access and cannot be accessed directly in `main()`.",
            "The `setWidth` function requires the scope resolution operator to assign `w`.",
            "The dot operator `.` is invalid for static objects in C++."
          ],
          correct: 1,
          explanation: "In C++, if no access specifier is explicitly stated, class members default to `private`. Since `width` is declared before the `public:` label, it is private and cannot be directly assigned via `b1.width` in the `main()` function.",
          optionExplanations: [
            "Why A is wrong — C++ allows static stack allocation (`Box b1;`) without needing the `new` keyword.",
            "Why B is correct — Class members in C++ are private by default, making `b1.width` an illegal access attempt.",
            "Why C is wrong — In-class method definitions do not require the scope resolution operator.",
            "Why D is wrong — The dot operator is precisely the correct tool to access members of a statically allocated object."
          ]
        },
        {
          question: "How does the Java Virtual Machine uniquely track and identify object instances dynamically at runtime, as opposed to C++?",
          options: [
            "Java uses an Identity Hashmap, while C++ relies on the object's physical base memory address.",
            "Java utilizes the scope resolution operator `::`, while C++ uses pointers.",
            "Java dynamically assigns a trailing semicolon, whereas C++ relies on stack allocation.",
            "Java forces all objects to become primitive variables to track their state."
          ],
          correct: 0,
          explanation: "The lectures contrast object identity tracking: C++ identifies objects using their base physical memory address (like an array base address), whereas Java manages identity using an internally generated Identity Hashmap.",
          optionExplanations: [
            "Why A is correct — This explicitly captures the identity tracking difference between the two languages.",
            "Why B is wrong — The scope resolution operator is a C++ feature for defining methods outside classes.",
            "Why C is wrong — Semicolons are syntax rules, completely unrelated to object identity in memory.",
            "Why D is wrong — Objects in Java are reference types, explicitly distinct from primitive variables."
          ]
        },
        {
          question: "What is the specific purpose of the scope resolution operator `::` in C++ class design?",
          options: [
            "It bridges an object instance to its member data within the `main` function.",
            "It allocates dynamic heap memory for derived classes.",
            "It links a member function defined outside the class body to its respective class scope.",
            "It overrides the default private access specifier to make variables public."
          ],
          correct: 2,
          explanation: "In C++, if a developer declares a method inside the class but defines it outside the class braces, the scope resolution operator (`ClassName::methodName`) is required to tell the compiler which class the method belongs to.",
          optionExplanations: [
            "Why A is wrong — The dot operator `.` is used to bridge object instances to member data.",
            "Why B is wrong — Dynamic memory allocation is handled by the `new` keyword.",
            "Why C is correct — `::` explicitly defines the scope of out-of-class method definitions.",
            "Why D is wrong — Access modifiers (`public:`, `private:`) control visibility; `::` cannot bypass them."
          ]
        },
        {
          question: "Consider the real-world modeling of a 'Banking System' versus a 'Bicycle' in OOP. Which statement correctly categorizes them according to the course terminology?",
          options: [
            "Both are tangible objects because they contain member functions.",
            "The Banking System is an intangible object, whereas the Bicycle is a tangible object.",
            "The Bicycle is an abstract base class, whereas the Banking System is an identity hashmap.",
            "Both are intangible objects because they must be dynamically allocated in Java."
          ],
          correct: 1,
          explanation: "Objects that have physical, touchable existence (like a bicycle or pen) are categorized as tangible objects. Logical, conceptual entities (like a banking system or university) are categorized as intangible objects.",
          optionExplanations: [
            "Why A is wrong — A banking system cannot be physically touched, so it is not tangible.",
            "Why B is correct — This perfectly matches the lecture's definition of tangible vs. intangible entities.",
            "Why C is wrong — These are arbitrary mix-ups of OOP terms; a bicycle is a concrete object, not an abstract class.",
            "Why D is wrong — A bicycle is physically tangible, regardless of how its memory is allocated in code."
          ]
        },
        {
          question: "Which of the following is NOT an accurate representation of the 'this' keyword in OOP?",
          options: [
            "In Java, `this` acts as a reference variable to the current invoking object.",
            "In C++, `this` acts as a pointer and is often accessed using the arrow operator `->`.",
            "The `this` keyword is mandatory for statically allocating memory in C++ class definitions.",
            "The `this` keyword helps resolve variable shadowing when parameter names match class member names."
          ],
          correct: 2,
          explanation: "The `this` keyword refers to the current object instance and resolves shadowing (e.g., `this->name = name;`). It has absolutely nothing to do with memory allocation or static allocation; C++ allocates static objects automatically.",
          optionExplanations: [
            "Why A is wrong — This is a true statement; Java uses `this` as a reference variable.",
            "Why B is wrong — This is a true statement; C++ uses `this` as a pointer, accessing members via `->`.",
            "Why C is correct — This is the FALSE statement. `this` does not allocate memory.",
            "Why D is wrong — This is a true statement; resolving naming conflicts (shadowing) is a primary use case for `this`."
          ]
        },
        {
          question: "When creating an object in Java, what error will the compiler throw if a programmer writes `Car myCar;` and immediately attempts to call `myCar.display();`?",
          options: [
            "A syntax error for a missing scope resolution operator.",
            "A compilation error indicating that the variable `myCar` might not have been initialized.",
            "A runtime exception detailing an invalid identity hashmap.",
            "No error; the Java Virtual Machine automatically executes the default constructor."
          ],
          correct: 1,
          explanation: "In Java, object variables act as references and must be explicitly dynamically allocated using the `new` keyword (e.g., `myCar = new Car();`). Attempting to use an uninitialized reference results in a compilation error.",
          optionExplanations: [
            "Why A is wrong — Scope resolution `::` is a C++ concept, not used in Java.",
            "Why B is correct — Java requires explicit instantiation with `new`; otherwise, the reference is uninitialized.",
            "Why C is wrong — The error is caught at compile-time, not runtime.",
            "Why D is wrong — Java does not automatically allocate objects upon declaration like C++ does for static objects."
          ]
        },
        {
          question: "Examine the following Java code snippet:\n\nclass Account {\n  int balance;\n}\npublic class Main {\n  public static void main(String[] args) {\n    Account a1 = new Account();\n    Account a2 = a1;\n  }\n}\n\nWhat is the memory status of objects `a1` and `a2`?",
          options: [
            "They possess two distinct identity hashmaps representing different physical objects.",
            "They share the exact same identity hashmap because `a2` is a reference pointing to the same object as `a1`.",
            "A compilation error occurs because object copying requires the `extends` keyword.",
            "The `new` operator creates a new object for `a2` automatically via deep copy."
          ],
          correct: 1,
          explanation: "In Java, object variables hold references. Because the `new Account()` constructor was only invoked once, only one physical object is created in memory. Assigning `a2 = a1` simply points the `a2` reference to the same identity hashmap as `a1`.",
          optionExplanations: [
            "Why A is wrong — Only one `new` keyword was used, so only one object exists.",
            "Why B is correct — Both references point to the single instantiated object, sharing its identity.",
            "Why C is wrong — Assignment operator `=` correctly copies references; `extends` is for inheritance.",
            "Why D is wrong — `new` was not used for `a2`, so no deep copy or new object creation occurred."
          ]
        },
        {
          question: "How do `public` and `private` access specifiers differ regarding data hiding in C++?",
          options: [
            "Public data can only be accessed by the scope resolution operator, while private data uses the dot operator.",
            "Public data requires dynamic allocation, while private data requires static stack allocation.",
            "Public data can be accessed directly from the `main` driver program, whereas private data is strictly hidden and restricted to class member functions.",
            "Public data allows multiple inheritance, while private data enforces single inheritance."
          ],
          correct: 2,
          explanation: "The core of Encapsulation relies on access modifiers. `public` members are accessible from anywhere, including `main()`. `private` members are hidden from the outside world and can only be modified internally by the class's own member functions.",
          optionExplanations: [
            "Why A is wrong — The dot operator is used for both, provided the caller has the correct access rights.",
            "Why B is wrong — Memory allocation (`new` vs static) is independent of access specifiers.",
            "Why C is correct — This accurately describes the visibility scope defined by public and private modifiers.",
            "Why D is wrong — Access modifiers control visibility, not the structural hierarchy of inheritance."
          ]
        },
        {
          question: "Given a C++ class `Circle` with a member function `void setRadius(double r) { radius = r; }`. If an object `c1` invokes this function via `c1.setRadius(5.0);`, what is acting as the bridge between the object and the method?",
          options: [
            "The `this` reference variable.",
            "The dot operator `.`.",
            "The scope resolution operator `::`.",
            "The base memory address pointer."
          ],
          correct: 1,
          explanation: "The dot operator (`.`) serves as the explicit syntactical bridge that allows an instantiated object (like `c1`) to invoke its member functions or access its member data.",
          optionExplanations: [
            "Why A is wrong — `this` refers to the object internally, but the dot operator is the external bridge used in the call.",
            "Why B is correct — `c1.setRadius(5.0)` utilizes the dot operator to link the object and the function.",
            "Why C is wrong — `::` is for resolving out-of-class definitions, not object instance invocations.",
            "Why D is wrong — While the object has a base address, the syntax bridging them is the dot operator."
          ]
        },
        {
          question: "Which of the following declarations accurately creates a dynamic array of 10 integer objects in Java syntax?",
          options: [
            "int* a = new int;",
            "int a = new int();",
            "int[] a = new int;",
            "Array a = new int(10);"
          ],
          correct: 2,
          explanation: "In Java, dynamic array instantiation strictly uses the syntax `type[] variableName = new type[size];`. C++ uses the pointer syntax `int* a = new int;`.",
          optionExplanations: [
            "Why A is wrong — This is the correct dynamic array syntax for C++, using pointers, which Java does not support.",
            "Why B is wrong — This is an invalid mix of C-style static declaration and Java dynamic instantiation.",
            "Why C is correct — `int[] a = new int;` is the exact proper Java array notation taught in the course.",
            "Why D is wrong — This is entirely invalid syntax in both languages."
          ]
        },
        {
          question: "A developer writes `System.out.println(brand);` inside a Java class method to print member data. What is the exact functional equivalent to execute this in a C++ class method?",
          options: [
            "cout << brand << endl;",
            "Console.write(brand);",
            "System.print.out(brand);",
            "std::out >> brand >> endl;"
          ],
          correct: 0,
          explanation: "The Java standard output stream command is `System.out.println()`. In C++, the exact equivalent for console output followed by a newline is the output stream `cout` combined with `endl`, standardly written as `cout << brand << endl;`.",
          optionExplanations: [
            "Why A is correct — This is the standard valid C++ code for printing variables with a newline.",
            "Why B is wrong — This syntax resembles C#.",
            "Why C is wrong — This is a garbled version of the Java syntax.",
            "Why D is wrong — C++ stream insertion uses `<<`, not the extraction operator `>>`."
          ]
        },
        {
          question: "Which scenario BEST illustrates the OOP concept of an 'Intangible Object'?",
          options: [
            "A `Vehicle` class instantiating a specific physical `Car`.",
            "A memory space defined by an array of 10 integers.",
            "A `University` class instantiating a specific organizational campus `U1`.",
            "A `Pen` object calling a `write()` behavior method."
          ],
          correct: 2,
          explanation: "Intangible objects are conceptual, non-physical entities. The professor explicitly uses 'Banking System' and 'University' as prime examples of modeling intangible entities as objects in code.",
          optionExplanations: [
            "Why A is wrong — A Car is a physical, tangible object.",
            "Why B is wrong — An array is a physical memory data structure, unrelated to the tangible/intangible conceptual analogy.",
            "Why C is correct — A University campus is a logical, intangible organization acting as an object.",
            "Why D is wrong — A Pen is a physical, tangible object."
          ]
        },
        {
          question: "If a Java programmer wants to create an object, why is the `new` keyword considered mandatory unlike in C++?",
          options: [
            "Because Java lacks the dot operator, forcing `new` to act as the member access bridge.",
            "Because Java objects are exclusively dynamic and require heap memory allocation at runtime.",
            "Because Java does not support member functions and uses `new` to generate them.",
            "Because C++ handles dynamic memory through identity hashmaps instead."
          ],
          correct: 1,
          explanation: "In Java, all objects are treated as dynamic references. The `new` keyword is strictly required to allocate heap memory at runtime. C++ allows objects to be statically allocated directly on the stack without `new`.",
          optionExplanations: [
            "Why A is wrong — Java fully utilizes the dot operator for member access.",
            "Why B is correct — Java enforces dynamic runtime memory allocation via `new` for all object instances.",
            "Why C is wrong — Java absolutely supports member functions (methods).",
            "Why D is wrong — C++ uses base memory addresses; Java is the language that uses identity hashmaps."
          ]
        },
        {
          question: "Consider the C++ constructor declaration `Box(double l, double w) : length(l), width(w) {}`. What programming technique is demonstrated by the colon syntax here?",
          options: [
            "Out-of-class definition scope resolution.",
            "Constructor initializer list for member data.",
            "Multiple inheritance declaration.",
            "Dynamic memory allocation for the parameters."
          ],
          correct: 1,
          explanation: "The syntax `: length(l), width(w)` appended to a constructor is known as an initializer list. It directly initializes the class member data `length` and `width` with the passed arguments `l` and `w`.",
          optionExplanations: [
            "Why A is wrong — Out-of-class definitions use the `::` operator, not a single `:`.",
            "Why B is correct — This is the standard C++ constructor initializer list syntax.",
            "Why C is wrong — While `:` is used for inheritance (e.g., `class Box : public Shape`), this snippet is a constructor definition.",
            "Why D is wrong — Memory allocation requires the `new` keyword."
          ]
        },
        {
          question: "Which statement is INCORRECT regarding member data and member functions?",
          options: [
            "Member data defines the static state of an object.",
            "Member functions dictate the functional behavior of an object.",
            "A class encapsulates both member data and member functions into a single blueprint.",
            "Member functions automatically generate the identity hashmap for C++ arrays."
          ],
          correct: 3,
          explanation: "Identity hashmaps are a Java concept used for tracking object identities at runtime. C++ tracks identity using base memory addresses. Furthermore, member functions perform programmed logic; they do not generate memory identifiers.",
          optionExplanations: [
            "Why A is wrong — This is a true statement. Member data = State.",
            "Why B is wrong — This is a true statement. Member functions = Behavior.",
            "Why C is wrong — This is a true statement describing the core of Encapsulation.",
            "Why D is correct — This is the FALSE statement, mixing C++ and Java concepts incorrectly."
          ]
        },
        {
          question: "Examine this C++ code snippet:\n\nclass Demo {\npublic:\n  void show();\n};\nvoid Demo::show() {\n  cout << \"Hello\";\n}\n\nWhat role does `Demo::` serve in this code?",
          options: [
            "It declares `show` as a private member function of `Demo`.",
            "It dynamically allocates memory for the `Demo` class blueprint.",
            "It binds the out-of-class definition of `show()` to the scope of the `Demo` class.",
            "It inherits the properties of the `show` method from a base class."
          ],
          correct: 2,
          explanation: "When a member function is defined outside the class braces in C++, the scope resolution operator `::` must be prefixed with the class name to inform the compiler which class the method belongs to.",
          optionExplanations: [
            "Why A is wrong — The function is declared under `public:`, not private.",
            "Why B is wrong — `::` handles scope, not memory allocation.",
            "Why C is correct — It links the external definition back to the `Demo` blueprint.",
            "Why D is wrong — Inheritance uses the `:` operator in class declarations, not `::` in method definitions."
          ]
        },
        {
          question: "In the context of the C++ `using namespace std;` directive, what is its primary utility when dealing with basic object outputs?",
          options: [
            "It prevents runtime polymorphism from overriding the class definitions.",
            "It dynamically creates an identity hashmap for the `cout` object.",
            "It allows the programmer to write `cout` directly instead of the fully qualified `std::cout`.",
            "It changes the default class access specifier from private to public."
          ],
          correct: 2,
          explanation: "The `std` namespace contains the standard C++ library. Declaring `using namespace std;` allows developers to omit the `std::` prefix when utilizing standard objects like `cout` or `cin`.",
          optionExplanations: [
            "Why A is wrong — Namespaces have no bearing on polymorphism or inheritance logic.",
            "Why B is wrong — Hashmaps are a Java memory concept, irrelevant to C++ namespaces.",
            "Why C is correct — It provides syntactical shortcut access to the standard library scope.",
            "Why D is wrong — Class visibility rules (private/public) are unaffected by global namespaces."
          ]
        },
        {
          question: "In Java, what is the 'Driver Class' conceptually responsible for?",
          options: [
            "Defining the abstract methods that child classes must override.",
            "Encapsulating private variables to ensure strict data hiding.",
            "Serving as the entry point of the program because it contains the `public static void main(String[] args)` method.",
            "Allocating C++ style base memory addresses to circumvent garbage collection."
          ],
          correct: 2,
          explanation: "In Java, the specific class containing the `main` method is termed the 'Driver Class'. It is the execution entry point where objects are instantiated and the core logic is driven.",
          optionExplanations: [
            "Why A is wrong — Abstract base classes define deferred methods, not the driver class.",
            "Why B is wrong — While the driver class can encapsulate data, its primary role is executing the `main` entry point.",
            "Why C is correct — The presence of the `main` method makes it the execution driver.",
            "Why D is wrong — Java does not use C++ memory addressing, and drivers do not bypass memory management."
          ]
        },
        {
          question: "A C++ developer encounters a compilation error reading: `'double Box::width' is private within this context`. What is the most likely cause?",
          options: [
            "They forgot to use the `new` keyword when instantiating the `Box`.",
            "They attempted to access `width` using the dot operator from the `main()` function without a `public:` access specifier above it.",
            "They defined the out-of-class method without the `::` scope resolution operator.",
            "They attempted to track the object's identity using a Java hashmap."
          ],
          correct: 1,
          explanation: "By default, C++ class members are `private`. If a variable is private, any external function (like `main()`) attempting to access it directly via the dot operator (e.g., `b1.width`) will trigger this exact visibility error.",
          optionExplanations: [
            "Why A is wrong — Omitting `new` in C++ simply creates a static stack object, which is perfectly valid.",
            "Why B is correct — Direct external access to private data violates Encapsulation and triggers a compiler error.",
            "Why C is wrong — Missing `::` causes a 'not declared in this scope' error, not a privacy error.",
            "Why D is wrong — This mixes language concepts entirely."
          ]
        },
        {
          question: "When writing object-oriented Java, which keyword is utilized as a reference variable to refer to the current invoking object's instance variables?",
          options: [
            "super",
            "extends",
            "this",
            "new"
          ],
          correct: 2,
          explanation: "In Java, the `this` keyword is a reference variable used to refer to the current object. It is exceptionally useful for resolving variable shadowing, such as `this.name = name;`.",
          optionExplanations: [
            "Why A is wrong — `super` refers to the immediate parent (base) class, not the current invoking object.",
            "Why B is wrong — `extends` is used to declare inheritance.",
            "Why C is correct — `this` resolves to the current object instance executing the method.",
            "Why D is wrong — `new` allocates heap memory for a new object."
          ]
        },
        {
          question: "How do `C++` and `Java` structurally differ when addressing object pointers and references inside member functions?",
          options: [
            "C++ uses `this->` as a pointer dereference, whereas Java uses `this.` as a direct object reference.",
            "C++ requires `this::` as a scope resolution, whereas Java uses the `new` pointer.",
            "Both languages strictly require the `*this` pointer to modify member data.",
            "Java uses the `&` operator to pass references, whereas C++ relies on the Identity Hashmap."
          ],
          correct: 0,
          explanation: "In C++, `this` is a pointer holding the memory address of the current object, so members are accessed via the arrow operator (`this->name`). In Java, `this` is a reference variable, so members are accessed via the dot operator (`this.name`).",
          optionExplanations: [
            "Why A is correct — This accurately describes the syntactical pointer vs reference difference between the languages.",
            "Why B is wrong — C++ uses `->`, not `::`, with the `this` pointer.",
            "Why C is wrong — Java does not utilize pointers or the `*` dereference operator at all.",
            "Why D is wrong — Java handles references automatically without `&`, and hashmaps track identity, not reference passing."
          ]
        },
        {
          question: "Which of the following is NOT an advantage gained by defining class methods outside the class body using the scope resolution operator `::` in C++?",
          options: [
            "It automatically converts private member data into public accessibility.",
            "It keeps the class blueprint clean and readable by separating declarations from complex implementations.",
            "It allows multiple distinct classes to declare identically named functions that are defined externally without collision.",
            "It allows developers to view the abstract structure of the class at a glance."
          ],
          correct: 0,
          explanation: "The scope resolution operator allows external method definition to keep the class declaration clean and readable. However, it does NOT alter access specifiers; private data remains strictly private.",
          optionExplanations: [
            "Why A is correct — This is the FALSE statement. Out-of-class definition does not bypass or alter `private` visibility rules.",
            "Why B is wrong — Separating interface (declaration) from implementation (definition) is a primary advantage.",
            "Why C is wrong — Because definitions are prefixed with `ClassName::`, naming collisions are avoided.",
            "Why D is wrong — Hiding complex logic externally provides a clean abstract view of the class blueprint."
          ]
        },
        {
          question: "Examine this C++ snippet:\n\nint A;\ncout << A;\n\nAccording to Prof. Bala Subramanian, what OOP concept does the output of this array analogize?",
          options: [
            "Dynamic memory allocation via `new`.",
            "Data hiding through encapsulation.",
            "The unique 'identity' of an object represented by its base memory address.",
            "Out-of-class method definitions using scope resolution."
          ],
          correct: 2,
          explanation: "Printing the name of an array in C++ outputs its base memory address. The professor uses this to explain 'Object Identity', stating that just like an array, a C++ object's unique identity is tied to its physical base address in memory.",
          optionExplanations: [
            "Why A is wrong — The array is statically allocated on the stack, not dynamically via `new`.",
            "Why B is wrong — There are no access modifiers or hidden data involved here.",
            "Why C is correct — The base address perfectly mirrors how C++ handles unique object identity.",
            "Why D is wrong — There are no methods or `::` operators in this snippet."
          ]
        },
        {
          question: "In object-oriented design, if a program involves `Vehicle`, `Road`, and `TrafficLight` classes interacting to test congestion, what kind of problem is being modeled?",
          options: [
            "A Banking System",
            "A Traffic Simulation",
            "A Neural Network",
            "A Linked List Data Structure"
          ],
          correct: 1,
          explanation: "The lectures outline specific scenarios for OOP modeling. Creating vehicles, roads, and traffic lights to simulate movement and traffic flow is the definition of a Traffic Simulation problem.",
          optionExplanations: [
            "Why A is wrong — Banking involves Accounts, Customers, and Transactions.",
            "Why B is correct — This perfectly matches the Traffic Simulation scenario provided in the course.",
            "Why C is wrong — Neural networks model Layers, Neurons, and Connections.",
            "Why D is wrong — Linked lists model Nodes and pointers."
          ]
        },
        {
          question: "What is the consequence of failing to provide a visibility access modifier in a standard C++ `class` definition?",
          options: [
            "The compiler defaults to `protected`, allowing only derived classes to access the members.",
            "The compiler defaults all members to `public`, stripping all encapsulation security.",
            "The compiler defaults all members to `private`, enforcing strict data hiding.",
            "The code refuses to compile until an explicit modifier is written."
          ],
          correct: 2,
          explanation: "By default, if no access specifier (`public:`, `private:`, `protected:`) is written at the top of a C++ `class`, the compiler automatically treats all members as `private`.",
          optionExplanations: [
            "Why A is wrong — The default is not `protected`.",
            "Why B is wrong — C++ `structs` default to public, but `classes` default to private.",
            "Why C is correct — Strict data hiding is enforced immediately via the `private` default.",
            "Why D is wrong — The compiler will safely compile the code, it will just restrict external access."
          ]
        },
        {
          question: "Given a Java class `Employee` with `int id;`. Which code accurately creates a dynamic instance and sets the ID using the dot operator?",
          options: [
            "Employee e1; e1.id = 10;",
            "Employee e1 = new Employee(); e1.id = 10;",
            "Employee* e1 = new Employee(); e1->id = 10;",
            "Employee::e1; e1.id = 10;"
          ],
          correct: 1,
          explanation: "Java requires dynamic instantiation using the `new` keyword to allocate heap memory, followed by the dot operator `.` to bridge the reference to the member data.",
          optionExplanations: [
            "Why A is wrong — This lacks the `new` allocation, causing a 'variable might not have been initialized' error.",
            "Why B is correct — `new Employee()` creates the memory, and `e1.id` assigns the state safely.",
            "Why C is wrong — This uses C++ pointer syntax `*` and arrow operators `->`, which Java forbids.",
            "Why D is wrong — This incorrectly uses the C++ scope resolution operator."
          ]
        },
        {
          question: "A developer writes `class Book { public: string title; };` in C++ and `class Book { public String title; }` in Java. What is fundamentally different about how these variables are loaded into physical memory?",
          options: [
            "There is no difference; classes physically consume memory as soon as they are defined in both languages.",
            "C++ loads the class into an Identity Hashmap, whereas Java uses a base memory address.",
            "A class is merely a logical blueprint and consumes zero physical memory for its data members until an object is instantiated.",
            "Java classes are abstract by default, requiring the `extends` keyword to allocate physical memory."
          ],
          correct: 2,
          explanation: "A core concept of OOP is that a Class is merely a logical template or grammar rule. It does not physically consume execution memory for its variables until an object instance is explicitly created from it during runtime.",
          optionExplanations: [
            "Why A is wrong — Classes do not consume memory for variables upon definition, only upon instantiation.",
            "Why B is wrong — This reverses the identity tracking mechanisms (Java=Hashmap, C++=Address).",
            "Why C is correct — The blueprint itself takes no space; only the physical objects generated from it do.",
            "Why D is wrong — Java classes are concrete by default; `extends` is for inheritance, not base allocation."
          ]
        },
        {
          question: "Consider this C++ scenario: You need to return the specific object that invoked a member function. Which syntax accomplishes this?",
          options: [
            "return this;",
            "return &this;",
            "return *this;",
            "return this::object;"
          ],
          correct: 2,
          explanation: "In C++, `this` is a pointer to the current object. To return the actual object instance itself (often used for chaining or passing the object), you must dereference the pointer using the `*` operator, resulting in `return *this;`.",
          optionExplanations: [
            "Why A is wrong — Returning `this` returns the memory address (the pointer), not the object value.",
            "Why B is wrong — This attempts to return the address of the pointer itself, which is invalid logic here.",
            "Why C is correct — Dereferencing the pointer via `*this` yields the physical object instance.",
            "Why D is wrong — The scope resolution operator is not used with the `this` pointer."
          ]
        },
        {
          question: "Which of the following is an INCORRECT description of the Java `System.out.println()` function relative to object state?",
          options: [
            "It can print primitive data types like integers.",
            "It automatically appends a newline character after the output.",
            "It can print an object's identity hashmap if passed an unformatted object reference.",
            "It dynamically assigns memory to private variables."
          ],
          correct: 3,
          explanation: "The `System.out.println()` method is strictly a console output stream function. It has absolutely no capability to allocate dynamic heap memory to variables; memory allocation is the exclusive job of the `new` operator.",
          optionExplanations: [
            "Why A is wrong — This is a true statement; it easily prints ints and floats.",
            "Why B is wrong — This is a true statement; the `ln` stands for 'line', adding a newline.",
            "Why C is wrong — This is a true statement; printing a raw object reference yields its identity location.",
            "Why D is correct — This is the FALSE statement; print streams do not allocate variable memory."
          ]
        },
        {
          question: "If `Account` is an intangible object class, which of the following represents a tangible object class?",
          options: [
            "University",
            "Banking System",
            "Linked List",
            "Chair"
          ],
          correct: 3,
          explanation: "Tangible objects represent physical entities that can be touched, such as a chair, pen, or car. Intangible objects represent conceptual or logical structures like a bank, university, or data structure.",
          optionExplanations: [
            "Why A is wrong — A University is an organizational, intangible concept.",
            "Why B is wrong — A Banking System is a logical, intangible framework.",
            "Why C is wrong — A Linked List is a logical, intangible data structure.",
            "Why D is correct — A Chair is a physical, tangible item in the real world."
          ]
        },
        {
          question: "In C++, a developer writes `Box b1; b1.height = 5.0;`. In Java, a developer writes `Box b1 = new Box(); b1.height = 5.0;`. What structural similarity do both snippets share?",
          options: [
            "Both snippets rely on the Identity Hashmap to allocate memory.",
            "Both snippets utilize the dot operator `.` to bridge the object reference to its member data.",
            "Both snippets fail to compile due to missing scope resolution operators.",
            "Both snippets execute static stack allocations."
          ],
          correct: 1,
          explanation: "Despite the difference in memory allocation (`new` vs static stack), both C++ and Java universally rely on the dot operator (`.`) to bridge the object instance to its internal state (member data) or behavior.",
          optionExplanations: [
            "Why A is wrong — C++ uses base addresses, not hashmaps.",
            "Why B is correct — The dot operator `.` is the universal syntactical bridge in both languages here.",
            "Why C is wrong — Scope resolution `::` is not required for direct member access.",
            "Why D is wrong — Java exclusively uses dynamic heap allocation via `new`, never static stack allocation."
          ]
        },
        {
          question: "Examine this C++ out-of-class definition syntax: `void Car::setSpeed(int s) { speed = s; }`. What would happen if `Car::` was omitted?",
          options: [
            "The compiler would default the method to the `public:` visibility specifier.",
            "The function would be treated as a standard procedural global function, losing access to the `Car` class's private `speed` variable.",
            "The function would automatically trigger runtime polymorphism.",
            "The object identity hashmap would crash due to memory overflow."
          ],
          correct: 1,
          explanation: "Without the `ClassName::` scope resolution operator, the C++ compiler views the definition as an isolated global function (like in C). Consequently, it has no structural link to the `Car` blueprint and cannot access encapsulated members like `speed`.",
          optionExplanations: [
            "Why A is wrong — Omitting the class scope does not change access modifiers; it removes the class context entirely.",
            "Why B is correct — The method becomes a global procedural function disconnected from OOP encapsulation.",
            "Why C is wrong — Polymorphism requires inheritance and overriding, unrelated to basic scope resolution.",
            "Why D is wrong — This is gibberish; scope syntax does not cause hashmap memory overflows."
          ]
        },
        {
          question: "Which of the following scenarios best demonstrates the concept of variable shadowing requiring the `this` keyword?",
          options: [
            "A derived class attempts to override a virtual function from the base class.",
            "A member function parameter `int age` shares the exact same name as the class's private member data `int age`.",
            "Two distinct classes `Apple` and `Orange` both declare a public string named `color`.",
            "A developer forgets to place a semicolon at the end of a C++ class declaration."
          ],
          correct: 1,
          explanation: "Variable shadowing occurs when a local variable (like a function parameter) has the exact same name as a broader class variable. To distinguish them and safely assign the data, the pointer/reference is used (e.g., `this->age = age;`).",
          optionExplanations: [
            "Why A is wrong — Overriding relies on method signatures and the `virtual` keyword, not `this`.",
            "Why B is correct — The `this` keyword explicitly resolves naming collisions between parameters and class fields.",
            "Why C is wrong — Because they are in distinct classes, encapsulation protects them natively without needing `this`.",
            "Why D is wrong — Missing a semicolon causes a raw compilation syntax error."
          ]
        },
        {
          question: "A developer wants to write a Java class `Student` that securely hides the student's `ID` from external manipulation, allowing updates only through a specific `updateID` method. Which access specifier should be applied to the `ID` variable?",
          options: [
            "public",
            "protected",
            "private",
            "default"
          ],
          correct: 2,
          explanation: "To securely hide data from external manipulation (Encapsulation), the `private` access specifier is used. It restricts access strictly to the class's own methods, preventing direct changes like `s1.id = 5;` from the driver class.",
          optionExplanations: [
            "Why A is wrong — `public` exposes the data to all external classes, defeating the security goal.",
            "Why B is wrong — `protected` allows derived classes to manipulate the data, which is wider than strictly the own class's methods.",
            "Why C is correct — `private` perfectly secures the data, enforcing the use of the `updateID` setter method.",
            "Why D is wrong — Java's package-private default allows access from other classes within the same package."
          ]
        },
        {
          question: "Read the C++ Code:\n\nclass Animal {\n  int weight;\npublic:\n  void setWeight(int w);\n};\n\nIf we instantiate `Animal a;`, what prevents `a.weight = 50;` from compiling?",
          options: [
            "The `weight` variable lacks a trailing semicolon in its declaration.",
            "The `Animal` class is an intangible object.",
            "In C++, members defined before an explicit access specifier default to `private`.",
            "The `setWeight` function has not been defined out-of-class yet."
          ],
          correct: 2,
          explanation: "In standard C++ class syntax, any member variables or functions listed before the first access specifier (like `public:`) are automatically treated as `private`. Thus, `weight` is hidden from the `main` program.",
          optionExplanations: [
            "Why A is wrong — The variable declaration `int weight;` correctly has a semicolon.",
            "Why B is wrong — Being tangible or intangible is a conceptual design label, not a compiler rule.",
            "Why C is correct — The C++ default is `private`, preventing direct external assignment.",
            "Why D is wrong — An undefined method causes a linker error if called, but it does not prevent variable assignment."
          ]
        },
        {
          question: "Which of the following represents an exceptional rule about the C++ `this` keyword compared to standard procedural pointers?",
          options: [
            "It acts as an implicit parameter automatically passed when an object's member function is called.",
            "It must be dynamically allocated using `new` inside every method.",
            "It bypasses `private` data security constraints across different classes.",
            "It converts tangible objects into intangible memory addresses."
          ],
          correct: 0,
          explanation: "The `this` pointer is a hidden, implicit argument passed by the compiler to all non-static member functions. It inherently points to the specific object instance that invoked the function.",
          optionExplanations: [
            "Why A is correct — The compiler automatically injects the `this` pointer into member functions to track the invoking object.",
            "Why B is wrong — `this` is managed by the runtime environment and never explicitly allocated with `new`.",
            "Why C is wrong — `this` only accesses members of its own object; it does not hack cross-class security.",
            "Why D is wrong — Tangibility is a real-world modeling concept, not a memory conversion process."
          ]
        },
        {
          question: "When translating traditional procedural logic into Object-Oriented C++, how is the state of a specific `Rectangle` object stored during execution?",
          options: [
            "In a globally accessible procedural flowchart variable.",
            "Inside the blueprint class text file itself.",
            "In memory allocated on the stack (via static declaration) or heap (via `new`), holding unique values for its member data.",
            "In a pure virtual function pointer."
          ],
          correct: 2,
          explanation: "In C++, the physical instance (object) consumes memory during runtime to store its unique state (member data like length and width). This memory is allocated either on the stack (`Rectangle r;`) or the heap (`new Rectangle();`).",
          optionExplanations: [
            "Why A is wrong — OOP actively replaces global variables and flowcharts with encapsulated object memory.",
            "Why B is wrong — The class blueprint consumes no physical execution memory for instances.",
            "Why C is correct — Objects physically represent state in allocated memory spaces.",
            "Why D is wrong — Virtual functions handle polymorphic behavior, not static state storage."
          ]
        },
        {
          question: "What is INCORRECT regarding Java object initialization and memory tracking?",
          options: [
            "Java utilizes the `new` operator to dynamically allocate heap memory for objects.",
            "The `System.out.println(obj);` command will output the object's Identity Hashmap.",
            "Java tracks unique object instances using their physical base memory address.",
            "Instantiating `ClassA obj;` without `new` causes a compile-time initialization error."
          ],
          correct: 2,
          explanation: "Unlike C++, Java explicitly abstracts physical memory management from the developer. Instead of using raw physical base memory addresses, the JVM generates an Identity Hashmap to track unique object identities securely.",
          optionExplanations: [
            "Why A is wrong — This is a true statement describing Java instantiation.",
            "Why B is wrong — This is a true statement describing how to view the hashmap.",
            "Why C is correct — This is the INCORRECT statement. C++ uses physical base addresses; Java uses hashmaps.",
            "Why D is wrong — This is a true statement; Java throws an uninitialized variable error."
          ]
        },
        {
          question: "A Java developer writes `int[] A = new int;` while a C++ developer writes `int* A = new int;`. What underlying OOP feature justifies Java avoiding the `*` symbol?",
          options: [
            "Java strictly enforces static compilation, rendering pointers obsolete.",
            "Java relies entirely on references handled internally by the JVM, completely hiding explicit pointer syntax from the programmer.",
            "Java arrays are primitive data types that do not consume heap memory.",
            "C++ requires the `*` to activate the scope resolution operator."
          ],
          correct: 1,
          explanation: "Java abstracts memory management away from the developer. Instead of using explicit pointers (`*`) like C++, all Java objects and arrays are treated as 'references' securely managed by the Java Virtual Machine (JVM).",
          optionExplanations: [
            "Why A is wrong — Java is highly dynamic, handling memory via garbage collection.",
            "Why B is correct — Java abstracts direct memory addressing into safe references, eliminating the need for `*`.",
            "Why C is wrong — Arrays in Java are full objects allocated dynamically on the heap.",
            "Why D is wrong — The `*` indicates a pointer in C++, not scope resolution (`::`)."
          ]
        },
        {
          question: "Consider a C++ developer defining a method outside a class: `void display() { cout << length; }`. Assuming `length` is a private variable in `class Box`, why will this specific syntax fail?",
          options: [
            "The developer forgot to utilize the `new` operator for the method.",
            "The method lacks the `Box::` scope resolution prefix, making it an isolated global function that cannot access private class data.",
            "The `cout` stream is incompatible with private variables.",
            "C++ requires member functions to be written exclusively inside the class body."
          ],
          correct: 1,
          explanation: "Without the scope resolution operator (`Box::display()`), the compiler treats `display()` as a normal procedural global function. Global functions cannot access the private encapsulated variables of a class.",
          optionExplanations: [
            "Why A is wrong — `new` allocates memory, it does not define functions.",
            "Why B is correct — The `::` prefix bridges the external function back into the security scope of the class.",
            "Why C is wrong — `cout` can print any variable, provided the function calling it has proper access scope.",
            "Why D is wrong — C++ explicitly allows and encourages out-of-class definitions for cleaner code."
          ]
        },
        {
          question: "What is the primary architectural purpose of writing `using namespace std;` in C++ object-oriented programs?",
          options: [
            "To encapsulate all class definitions securely inside a virtual container.",
            "To avoid repeatedly prefixing standard library commands like `cout` with `std::`.",
            "To enforce Java-style identity hashmaps upon C++ dynamic arrays.",
            "To resolve variable shadowing without needing the `this` pointer."
          ],
          correct: 1,
          explanation: "The `std` namespace houses the standard C++ library. The directive `using namespace std;` sets the global scope to check this library, saving developers from typing the verbose `std::cout` and `std::endl` repeatedly.",
          optionExplanations: [
            "Why A is wrong — Namespaces organize code logic but do not act as security encapsulation like `private` classes.",
            "Why B is correct — It is a syntactical shortcut for accessing standard library tools.",
            "Why C is wrong — C++ memory management is unaffected by namespaces.",
            "Why D is wrong — Variable shadowing inside classes is resolved by `this->`, completely separate from global namespaces."
          ]
        },
        {
          question: "If a Java program contains `class Car` with `String brand;` and the driver class instantiates `Car c1;` followed by `c1.brand = \"Ford\";`, what happens during compilation?",
          options: [
            "It prints 'Ford' smoothly due to static variable binding.",
            "It crashes with a compilation error because `c1` is a reference that was never initialized with the `new` operator.",
            "It triggers the default identity hashmap generation.",
            "It implicitly converts `brand` into a protected variable."
          ],
          correct: 1,
          explanation: "In Java, declaring an object reference like `Car c1;` does not allocate memory for the object itself. You must use `c1 = new Car();`. Accessing members of an uninitialized reference throws a compile-time 'variable might not have been initialized' error.",
          optionExplanations: [
            "Why A is wrong — Java does not statically bind objects to the stack like C++.",
            "Why B is correct — Java strictly requires heap memory allocation via `new` to instantiate physical objects.",
            "Why C is wrong — No hashmap can be generated because no physical memory was allocated.",
            "Why D is wrong — Memory errors do not alter class access specifiers."
          ]
        },
        {
          question: "Which of the following is a primary characteristic of a 'Class' as defined in the Object-Oriented paradigm?",
          options: [
            "It acts as a specific, tangible instance occupying physical RAM.",
            "It is a runtime process that deletes obsolete memory references.",
            "It is a logical template or blueprint from which specific objects are instantiated.",
            "It is an identity hashmap assigned by the compiler to prevent security breaches."
          ],
          correct: 2,
          explanation: "A class is explicitly defined in the course as a blueprint, template, or group of similar objects. It is the logical structure (the grammar) that defines what state and behavior its instantiated objects will possess.",
          optionExplanations: [
            "Why A is wrong — An object is the tangible instance in RAM, not the class blueprint.",
            "Why B is wrong — Memory deletion is handled by destructors or Garbage Collectors.",
            "Why C is correct — This matches the fundamental lecture definition of a Class.",
            "Why D is wrong — Hashmaps represent object identities, not the overarching class structure."
          ]
        },
        {
          question: "Examine the following C++ code:\n\nclass Student {\npublic:\n  int id;\n  void setId(int i) {\n    id = i;\n  }\n};\n\nWhat role does the integer `i` serve in this structural block?",
          options: [
            "It acts as the object's identity hashmap.",
            "It is the member data defining the static state of the student.",
            "It is a parameter argument used to pass external data into the class to set its state.",
            "It resolves scope collisions using the `this` pointer."
          ],
          correct: 2,
          explanation: "The variable `i` is an argument parameter of the `setId` member function. Its sole purpose is to capture an external value from the driver program and bridge it into the encapsulated member data `id`.",
          optionExplanations: [
            "Why A is wrong — Identity is handled by memory addresses, not function parameters.",
            "Why B is wrong — `id` is the member data defining the state; `i` is just a temporary passing variable.",
            "Why C is correct — `i` acts as the input vehicle to update the internal state.",
            "Why D is wrong — Shadowing involves identical names. Here, `id` and `i` are distinctly named."
          ]
        },
        {
          question: "Which of the following is NOT true regarding the `this` pointer in C++?",
          options: [
            "It points to the current object instance that invoked the member function.",
            "It is heavily utilized to resolve variable shadowing between arguments and member data.",
            "It automatically forces private member functions to become publicly accessible.",
            "It can be explicitly dereferenced using `*this` to return the whole object."
          ],
          correct: 2,
          explanation: "The `this` pointer is a powerful internal referencing tool, but it has no ability to alter access modifiers. Private functions remain private, and `this` cannot bypass encapsulation security to expose them externally.",
          optionExplanations: [
            "Why A is wrong — This is a true statement defining the core function of `this`.",
            "Why B is wrong — This is a true statement; resolving `this->name = name` is its primary syntax use.",
            "Why C is correct — This statement is FALSE. Access modifiers are rigid and unaffected by pointers.",
            "Why D is wrong — This is a true statement; returning `*this` is a common chaining technique."
          ]
        },
        {
          question: "In C++, if you write `Box b1;` inside the `main` function, how is the memory for this object structurally allocated?",
          options: [
            "It relies on the `extends` keyword to dynamically extract base variables.",
            "It causes an error because the `new` operator was forgotten.",
            "It allocates memory automatically on the call stack for the specific instance's variables.",
            "It relies on an Identity Hashmap to allocate the virtual machine pointers."
          ],
          correct: 2,
          explanation: "Unlike Java, C++ allows for static allocation. Declaring `Box b1;` automatically allocates continuous memory on the program's execution stack to hold the object's unique state (member variables) without requiring the dynamic `new` keyword.",
          optionExplanations: [
            "Why A is wrong — `extends` is Java inheritance syntax, completely unrelated to basic memory allocation.",
            "Why B is wrong — C++ perfectly handles `Box b1;` without `new`.",
            "Why C is correct — Static object declarations allocate physical data memory directly on the stack.",
            "Why D is wrong — Identity hashmaps and JVMs are Java concepts."
          ]
        },
        {
          question: "A Java developer requires a function to print data uniquely tied to an object `bike1`. What operator bridges the object reference to its defined method?",
          options: [
            "The scope resolution operator `::`",
            "The standard dot operator `.`",
            "The stream insertion operator `<<`",
            "The dereference arrow operator `->`"
          ],
          correct: 1,
          explanation: "In both C++ and Java, the dot operator (`.`) serves as the universal syntactical bridge connecting an object instance (like `bike1`) to its encapsulated properties or methods (e.g., `bike1.run()`).",
          optionExplanations: [
            "Why A is wrong — `::` links out-of-class method definitions to the class blueprint in C++.",
            "Why B is correct — The dot operator accesses internal instance members.",
            "Why C is wrong — `<<` is used in C++ `cout` streams.",
            "Why D is wrong — `->` is used for C++ pointers; Java strictly uses the dot operator."
          ]
        },
        {
          question: "How does Object-Oriented Programming (OOP) define 'Behavior'?",
          options: [
            "The unique physical memory address assigned to an instantiated blueprint.",
            "The specific data values, like color or length, stored within an object.",
            "The functionalities, actions, or methods that an object can perform.",
            "The access specifiers determining external visibility."
          ],
          correct: 2,
          explanation: "An object is defined by State, Behavior, and Identity. Behavior dictates what the object can DO—its functionalities, operations, or actions, which are implemented programmatically as member functions or methods.",
          optionExplanations: [
            "Why A is wrong — Memory addresses represent the 'Identity' characteristic.",
            "Why B is wrong — Data values represent the 'State' characteristic.",
            "Why C is correct — Actions and methods perfectly describe object Behavior.",
            "Why D is wrong — Visibility modifiers secure the code, they do not define physical/logical behavior."
          ]
        },
        {
          question: "A class `TrafficLight` contains a string `color`. If `color` is defined to be `private`, which statement is true regarding data hiding?",
          options: [
            "The `main` program can change the color using the `new` operator.",
            "Only member functions strictly defined within the `TrafficLight` class can modify the `color` variable.",
            "Any derived class can manipulate the `color` directly because it defaults to protected status.",
            "The `color` variable requires the `::` operator to be printed."
          ],
          correct: 1,
          explanation: "Data hiding (Encapsulation) utilizing the `private` access specifier ensures that the variable is completely invisible to the outside world. It can only be read or modified internally by the class's own getter and setter member functions.",
          optionExplanations: [
            "Why A is wrong — The `new` operator allocates memory; it cannot bypass private security.",
            "Why B is correct — Private data is strictly secured for internal class method use only.",
            "Why C is wrong — Private data remains hidden even from derived classes (unlike `protected` data).",
            "Why D is wrong — Printing requires getter methods, not the out-of-class `::` scope operator."
          ]
        },
        {
          question: "Which of the following describes the difference in terminating a class definition in C++ versus Java?",
          options: [
            "C++ requires a period `.`, while Java requires a semicolon `;`.",
            "C++ uses closing brackets `]`, while Java uses braces `}`.",
            "C++ requires a semicolon `;` after the closing brace, while Java omits the semicolon.",
            "C++ terminates with the `main` method, while Java terminates with the `driver` variable."
          ],
          correct: 2,
          explanation: "A strict syntactical rule discussed in the lectures is that C++ class definitions must end with `};`. Java class definitions end simply with `}` and no trailing semicolon.",
          optionExplanations: [
            "Why A is wrong — The dot operator accesses members; it does not terminate classes.",
            "Why B is wrong — Both languages wrap class bodies in curly braces `{}`.",
            "Why C is correct — This accurately identifies the specific C++ trailing semicolon requirement.",
            "Why D is wrong — Both programs use `main` as execution entry points, not class terminators."
          ]
        },
        {
          question: "In C++, what causes the output to display a memory base address when a developer executes `int A; cout << A;`?",
          options: [
            "The array acts as an identity hashmap generated dynamically at compile time.",
            "The array represents a primitive variable failing to utilize the dot operator.",
            "The name of the array inherently holds the physical base memory address, serving as a conceptual analogy for unique object identity.",
            "The array triggers an out-of-class definition error."
          ],
          correct: 2,
          explanation: "Prof. Bala Subramanian uses the C++ array as an analogy for Object Identity. Just as printing the array name `A` yields its unique physical memory base address, C++ objects derive their unique identity from their memory location.",
          optionExplanations: [
            "Why A is wrong — Identity Hashmaps are a Java tracking concept, completely separate from C++ arrays.",
            "Why B is wrong — Printing a pointer address is standard C++ behavior, not a failure of the dot operator.",
            "Why C is correct — This explicitly mirrors the lecture's analogy connecting array addresses to object identities.",
            "Why D is wrong — The syntax provided is standard procedural C++ and generates no errors."
          ]
        },
        {
          question: "A student creates a `University` class containing the variable `totalAcreage`. What OOP concept does `totalAcreage` represent?",
          options: [
            "The functional behavior of the system.",
            "The object's runtime identity hashmap.",
            "The object's state or static attribute.",
            "The dynamic scope resolution of the blueprint."
          ],
          correct: 2,
          explanation: "In OOP, static properties, variables, or data values held by an object (like color, weight, or total acreage) constitute the 'State' (Member Data) of that object.",
          optionExplanations: [
            "Why A is wrong — Behavior is defined by methods/actions (e.g., `enrollStudent()`), not static measurements.",
            "Why B is wrong — The hashmap is the JVM's internal object ID, not a custom acreage variable.",
            "Why C is correct — `totalAcreage` is a data member storing a static value, precisely matching the definition of State.",
            "Why D is wrong — Scope resolution `::` is a syntactical tool, not a property of the university model."
          ]
        },
        {
          question: "When writing Java code, what is the functional outcome of the command `System.out.println(obj);` if `obj` is a standard, unformatted object reference?",
          options: [
            "It dynamically assigns a new base memory address to the object.",
            "It extracts all private member data and prints them in an array.",
            "It triggers a compilation error because objects lack primitive string representations.",
            "It outputs the unique Identity Hashmap generated by the Java Virtual Machine for that object."
          ],
          correct: 3,
          explanation: "If you directly print an object reference in Java without overriding its string formatting method, the JVM outputs the object's class name combined with its unique Identity Hashmap (e.g., `Car@732ef`), which tracks its location.",
          optionExplanations: [
            "Why A is wrong — Printing does not allocate or manipulate memory.",
            "Why B is wrong — Printing a raw reference does not magically bypass data hiding to list private variables.",
            "Why C is wrong — The compiler easily accepts this, defaulting to the hashmap output.",
            "Why D is correct — This correctly identifies Java's built-in mechanism for tracking and displaying raw object identity."
          ]
        },
        {
          question: "Which of the following correctly pairs an OOP language with its respective object identity tracking mechanism?",
          options: [
            "Java uses Base Memory Addresses; C++ uses Identity Hashmaps.",
            "Java uses Identity Hashmaps; C++ uses Base Memory Addresses.",
            "Both languages use lambda calculus address routing.",
            "Both languages strictly use the `new` keyword to generate static stack IDs."
          ],
          correct: 1,
          explanation: "C++ tracks objects uniquely using their physical base memory addresses in RAM. Because Java abstracts direct memory access for security, it tracks objects uniquely using an internal, dynamic Identity Hashmap.",
          optionExplanations: [
            "Why A is wrong — This explicitly reverses the distinct tracking mechanisms of the two languages.",
            "Why B is correct — This directly matches the course's explanation of object tracking distinctions.",
            "Why C is wrong — Lambda calculus is a 1930s math theory, not a modern memory tracker.",
            "Why D is wrong — Only Java strictly requires `new`; C++ supports static stack allocation. Furthermore, `new` allocates heap, not stack."
          ]
        },
        {
          question: "What is INCORRECT about out-of-class method definitions in C++?",
          options: [
            "They utilize the scope resolution operator `::`.",
            "They prevent the class body from becoming cluttered with long algorithmic code.",
            "They alter the method's access specifier to `public` automatically.",
            "They require the method to be declared inside the class braces beforehand."
          ],
          correct: 2,
          explanation: "Defining a member function outside the class body (e.g., `void Box::calculate() { ... }`) strictly adheres to whatever access specifier (public, private, protected) the function was originally declared under inside the class blueprint.",
          optionExplanations: [
            "Why A is wrong — This is a true statement; `::` is mandatory.",
            "Why B is wrong — This is a true statement; it is a primary design advantage for readability.",
            "Why C is correct — This is the FALSE statement. Out-of-class definitions never override visibility rules.",
            "Why D is wrong — This is a true statement; the function signature must exist in the class blueprint."
          ]
        },
        {
          question: "If a developer declares `int x;` inside a C++ class without any preceding access specifier label, what happens?",
          options: [
            "The compiler treats `x` as `public`.",
            "The compiler throws a 'missing modifier' syntax error.",
            "The compiler treats `x` as `private`.",
            "The compiler restricts `x` to dynamic memory allocation only."
          ],
          correct: 2,
          explanation: "The default access level for members in a standard C++ `class` is `private`. Any variables or methods listed before the explicit `public:` label will be hidden from the outside program.",
          optionExplanations: [
            "Why A is wrong — C++ `structs` default to public, but `classes` strictly default to private.",
            "Why B is wrong — Standard C++ perfectly accepts classes without written specifiers.",
            "Why C is correct — Data hiding is enforced automatically as the default rule.",
            "Why D is wrong — Visibility has no interaction with dynamic heap allocation."
          ]
        },
        {
          question: "Read this Java scenario: A developer creates `class Bank { int vault; }`. Inside `main`, they write `Bank b1; b1.vault = 5;`. Why does this throw an error?",
          options: [
            "The dot operator `.` is illegal in Java syntax.",
            "The object `b1` is an uninitialized reference lacking dynamic memory allocation via `new`.",
            "The `vault` variable must be declared with `extends`.",
            "The `this` keyword is missing before `b1`."
          ],
          correct: 1,
          explanation: "In Java, declaring `Bank b1;` simply creates an empty reference pointing to nothing. To physically allocate memory for the object on the heap, you must invoke the constructor dynamically using the `new` keyword (`Bank b1 = new Bank();`).",
          optionExplanations: [
            "Why A is wrong — The dot operator is the standard tool for member access in Java.",
            "Why B is correct — Missing the `new` allocation causes an 'uninitialized variable' error.",
            "Why C is wrong — `extends` designates inheritance, not variable initialization.",
            "Why D is wrong — `this` resolves internal shadowing; it is not used in the `main` program driver."
          ]
        },
        {
          question: "Examine this C++ snippet:\n\nclass Dog {\npublic:\n  int age;\n  void setAge(int age) {\n    this->age = age;\n  }\n};\n\nWhat specific naming conflict is the `this->` operator resolving here?",
          options: [
            "Variable Shadowing between the member function's parameter and the class's member data.",
            "Runtime polymorphism overriding the global namespace.",
            "Memory collisions between the Identity Hashmap and the static stack.",
            "Scope resolution errors resulting from multiple inheritance."
          ],
          correct: 0,
          explanation: "Variable shadowing occurs when a local variable (the parameter `int age`) shares the exact same name as a class variable (`int age`). The `this->` pointer explicitly tells the compiler to assign the local parameter value to the class's instance variable.",
          optionExplanations: [
            "Why A is correct — The `this` pointer perfectly resolves identical naming overlaps (shadowing) within scopes.",
            "Why B is wrong — Overriding handles identically named functions across inheritance, not local variables.",
            "Why C is wrong — Hashmaps are Java tracking tools, unrelated to naming collisions.",
            "Why D is wrong — Inheritance collisions are resolved using the `::` scope operator, not `this->`."
          ]
        },
        {
          question: "Which keyword identifies the execution entry point of a Java driver class?",
          options: [
            "public class Driver",
            "new",
            "main",
            "extends"
          ],
          correct: 2,
          explanation: "The `main` method (specifically `public static void main(String[] args)`) serves as the core entry point for execution in both Java and C++. The class encapsulating this method in Java is conceptually referred to as the Driver class.",
          optionExplanations: [
            "Why A is wrong — The class name itself does not initiate execution logic.",
            "Why B is wrong — `new` allocates memory for specific objects.",
            "Why C is correct — The `main` method is the universal execution driver trigger.",
            "Why D is wrong — `extends` denotes class inheritance relationships."
          ]
        },
        {
          question: "What is an 'Object' structurally defined as in OOP?",
          options: [
            "An abstract template containing `public` and `private` labels.",
            "A specific, runtime-instantiated instance of a class blueprint.",
            "A global function capable of performing multiple behaviors simultaneously.",
            "A procedural memory block managed strictly by lambda calculus."
          ],
          correct: 1,
          explanation: "An object is the concrete, physical instance instantiated from a generic class blueprint during runtime. It encapsulates specific state data and executable behaviors.",
          optionExplanations: [
            "Why A is wrong — The template containing labels is the Class, not the Object.",
            "Why B is correct — This accurately matches the fundamental definition of an object instance.",
            "Why C is wrong — Objects replace the paradigm of isolated global procedural functions.",
            "Why D is wrong — Lambda calculus is an early mathematical computing theory, not the structural definition of modern objects."
          ]
        },
        {
          question: "Which of the following is NOT an attribute of the C++ `this` pointer?",
          options: [
            "It allows a member function to return the physical invoking object via `return *this;`.",
            "It is implicitly passed as a hidden argument to all non-static member functions.",
            "It uses the arrow operator `->` to bridge to member variables.",
            "It automatically assigns an Identity Hashmap to static arrays."
          ],
          correct: 3,
          explanation: "Identity Hashmaps are entirely a Java concept used for memory tracking. C++ utilizes base memory addresses and does not generate JVM-style hashmaps, making this statement definitively false.",
          optionExplanations: [
            "Why A is wrong — This is a true capability of the `this` pointer.",
            "Why B is wrong — This is a true structural mechanic of how compilers handle `this`.",
            "Why C is wrong — This is the correct true syntax for accessing members via pointers.",
            "Why D is correct — This is the FALSE statement. Hashmaps do not exist in standard C++ architecture."
          ]
        },
        {
          question: "Consider an object `Bike b1;`. If the program executes `b1.speed = 100;`, what syntactical feature acts as the connector between the object instance and the state variable?",
          options: [
            "The `new` operator.",
            "The identity hashmap.",
            "The scope resolution operator `::`.",
            "The dot operator `.`."
          ],
          correct: 3,
          explanation: "The dot operator (`.`) functions as the fundamental syntax bridge allowing an instantiated object (like `b1`) to access its internal member data (like `speed`) or member functions.",
          optionExplanations: [
            "Why A is wrong — `new` handles memory allocation, not internal variable access.",
            "Why B is wrong — The hashmap is a hidden JVM tracking system.",
            "Why C is wrong — Scope resolution `::` is for defining functions outside the class braces.",
            "Why D is correct — The dot operator explicitly links the object name to the member property."
          ]
        },
        {
          question: "In C++, a developer defines a class `Car`. Later in the code, they write `Car c1;`. When does the physical memory allocation for `c1` occur?",
          options: [
            "At compile time, because classes consume memory immediately upon definition.",
            "At runtime, automatically allocated on the execution stack when the scope containing the declaration is reached.",
            "Memory is never allocated until the `extends` keyword is used.",
            "At runtime, but only if the `new` pointer operator is explicitly called."
          ],
          correct: 1,
          explanation: "Unlike Java, which strictly requires `new` for dynamic heap allocation, standard C++ allows static declaration (`Car c1;`). When the program execution reaches this line at runtime, the object's physical memory is automatically allocated on the call stack.",
          optionExplanations: [
            "Why A is wrong — Classes are merely blueprints; they consume no physical execution memory themselves.",
            "Why B is correct — Stack allocation happens seamlessly at runtime when the execution enters the specific variable scope.",
            "Why C is wrong — `extends` handles inheritance in Java.",
            "Why D is wrong — `new` handles dynamic heap allocation, but stack allocation happens automatically without it."
          ]
        },
        {
          question: "Which of the following is the correct definition of 'Data Hiding' as taught in the lectures?",
          options: [
            "Using the `this` pointer to override variable shadowing.",
            "Utilizing object-oriented flowcharts to conceal procedural logic algorithms.",
            "Applying the `private` access specifier to member data to secure it from external manipulation.",
            "Relying on the Java Virtual Machine to delete memory bases."
          ],
          correct: 2,
          explanation: "Data Hiding (Encapsulation) is achieved by making member data `private`. This acts as a secure capsule, meaning external global functions or driver `main` classes cannot arbitrarily overwrite sensitive variables without using authorized setter methods.",
          optionExplanations: [
            "Why A is wrong — Shadowing resolution handles name collisions, not security.",
            "Why B is wrong — Flowcharts are design tools (OOAD replaces them), entirely unrelated to programmatic data security.",
            "Why C is correct — The `private` specifier is the foundational mechanism for hiding and securing class data.",
            "Why D is wrong — The JVM Garbage Collector cleans memory, it doesn't hide live application data."
          ]
        },
        {
          question: "When writing Java output to the console, what structural hierarchy does the syntax `System.out.println()` represent?",
          options: [
            "A pointer deference invoking dynamic early binding.",
            "An out-of-class scope resolution bridging to an abstract blueprint.",
            "An object-oriented sequence where the `System` class uses its `out` stream object to invoke the `println` method.",
            "A static memory allocation triggering an Identity Hashmap extraction."
          ],
          correct: 2,
          explanation: "The syntax string `System.out.println()` reflects Java's strict object-oriented nature. `System` is the class, `out` is the specific static stream object reference, and `println()` is the member function (method) being invoked via the dot operators.",
          optionExplanations: [
            "Why A is wrong — Java does not utilize pointer dereferencing (`*` or `->`).",
            "Why B is wrong — Out-of-class definitions use C++ `::` scope resolution.",
            "Why C is correct — This explicitly demonstrates the class-to-object-to-method bridging using the dot operator.",
            "Why D is wrong — Console outputs execute operations, they do not dynamically allocate variable memory."
          ]
        },
        {
          question: "If a developer needs to access a `private` integer `balance` from the `main()` function, what is the proper object-oriented approach?",
          options: [
            "Use the scope resolution operator: `b1::balance;`",
            "Temporarily change the `private` keyword to `public` during execution.",
            "Write a `public` getter member function inside the class (e.g., `getBalance()`) and invoke it from `main()`.",
            "Use the `this->` pointer directly from the `main()` function."
          ],
          correct: 2,
          explanation: "Encapsulation secures private data. To safely access it externally, developers must provide `public` member functions (getter/setter methods) inside the class. The external program calls these public functions, which in turn access the hidden private data.",
          optionExplanations: [
            "Why A is wrong — The scope operator does not bypass visibility security.",
            "Why B is wrong — Access modifiers are hardcoded compiler logic; they cannot be toggled at runtime.",
            "Why C is correct — Getters and setters act as the controlled, authorized gateways to private data.",
            "Why D is wrong — `this` is an internal pointer passed inside member functions; it cannot be used in global driver scopes like `main()`."
          ]
        },
        {
          question: "How do tangible objects differ from intangible objects in software design modeling?",
          options: [
            "Tangible objects are physically touchable real-world entities (like a Car), whereas intangible objects are logical frameworks (like a Banking System).",
            "Tangible objects rely on the `new` operator, whereas intangible objects use C++ stack allocation.",
            "Tangible objects use C++ pointers, whereas intangible objects strictly require Java references.",
            "Tangible objects represent member data, whereas intangible objects represent member functions."
          ],
          correct: 0,
          explanation: "In OOP conceptual design, objects can model physical hardware/items (tangible objects like a chair or pen) or complex organizational structures/frameworks (intangible objects like an institute or banking network).",
          optionExplanations: [
            "Why A is correct — This mirrors the professor's exact definitions for entity categorization.",
            "Why B is wrong — Tangibility is a conceptual modeling aspect, entirely independent of memory allocation syntax.",
            "Why C is wrong — Language pointer/reference mechanics have no connection to real-world tangibility.",
            "Why D is wrong — Both forms of objects contain both state (data) and behavior (functions)."
          ]
        },
        {
          question: "Which of the following is NOT true regarding the Java `extends` keyword?",
          options: [
            "It is used to denote that a child subclass is inheriting from a parent superclass.",
            "It acts as the Java equivalent of the C++ colon `:` inheritance operator.",
            "It enables deep code reusability by allowing the subclass access to the superclass's methods.",
            "It triggers out-of-class member function definitions using scope resolution."
          ],
          correct: 3,
          explanation: "The `extends` keyword is Java's inheritance mechanism. Java does not utilize out-of-class definitions or scope resolution operators (`::`); all methods in Java are defined strictly within their respective class braces.",
          optionExplanations: [
            "Why A is wrong — This is a true statement; `extends` declares subclass inheritance.",
            "Why B is wrong — This is a true statement; `:` handles this in C++.",
            "Why C is wrong — This is a true statement; inheriting base properties allows high code reusability.",
            "Why D is correct — This is the FALSE statement. Out-of-class resolution is a C++ feature entirely distinct from `extends`."
          ]
        },
        {
          question: "Examine this C++ syntax:\n\nclass Shape {\n  int width;\n  int height;\n};\n\nIf you execute `Shape s1;`, what data is `s1` able to legally manipulate from the `main` program?",
          options: [
            "Both `width` and `height`.",
            "Only `width`, as it is the first initialized variable.",
            "Only `height`, using the dynamic `new` pointer.",
            "Neither, because both default to the `private` access specifier."
          ],
          correct: 3,
          explanation: "In C++, the default access visibility inside a `class` is `private`. Because neither `public:` nor `protected:` was declared above the variables, both `width` and `height` are completely hidden from the external `main` program.",
          optionExplanations: [
            "Why A is wrong — Access requires public visibility, which is absent here.",
            "Why B is wrong — Variable initialization order does not alter visibility defaults.",
            "Why C is wrong — Memory allocation logic (`new`) does not bypass visibility access constraints.",
            "Why D is correct — The C++ default is strict encapsulation, hiding undeclared visibility members."
          ]
        },
        {
          question: "Which scenario flawlessly resolves the issue of Variable Shadowing in Java?",
          options: [
            "Assigning `age = this.age;` inside a private struct container.",
            "Utilizing `this.age = age;` to differentiate the class instance variable from the method parameter.",
            "Employing `::age = age;` to enforce scope resolution on the integer.",
            "Using the `extends` keyword to push the variable down to an unshadowed child class."
          ],
          correct: 1,
          explanation: "When a method parameter (e.g., `age`) shares the identical name with a class variable (`age`), shadowing occurs. The Java reference `this.age` explicitly points to the class's state variable, allowing safe assignment from the parameter `age`.",
          optionExplanations: [
            "Why A is wrong — `age = this.age;` assigns the object's current state to the temporary parameter, resulting in no actual state update.",
            "Why B is correct — The `this.` prefix acts as a reference bridge to the correct class variable target.",
            "Why C is wrong — Scope resolution `::` is C++ syntax, completely invalid in Java.",
            "Why D is wrong — Inheritance (`extends`) is an architectural feature, not a local variable collision handler."
          ]
        },
        {
          question: "A C++ developer wishes to print the memory address of an instantiated object `Pen p1;`. What operator extracts this information, yielding the unique object identity?",
          options: [
            "The dereference pointer `*`.",
            "The address-of operator `&`.",
            "The scope resolution tool `::`.",
            "The streaming input `>>`."
          ],
          correct: 1,
          explanation: "In C++, an object's unique identity is its physical base memory address. Prefixing the object name with the address-of operator (`&p1`) extracts this memory location, typically output as a hexadecimal format.",
          optionExplanations: [
            "Why A is wrong — The `*` operator dereferences a pointer to get the value, not the address.",
            "Why B is correct — The `&` symbol extracts the physical memory address (Identity) of the object.",
            "Why C is wrong — `::` manages namespace and class scope, not memory addresses.",
            "Why D is wrong — `>>` extracts input from a stream like `cin`."
          ]
        },
        {
          question: "When translating traditional flowchart algorithms into OOP, developers utilize OOAD diagrams to visually structure the code. What does OOAD stand for?",
          options: [
            "Object-Oriented Array Declaration",
            "Object-Oriented Analysis and Design",
            "Overridden Operator Allocation Dispatch",
            "Object Observation and Dynamic Binding"
          ],
          correct: 1,
          explanation: "The lectures explicitly introduce OOAD (Object-Oriented Analysis and Design) as the visual modeling paradigm that replaces traditional procedural flowcharts, providing significant 'Design Advantages' by mapping out classes and interactions.",
          optionExplanations: [
            "Why A is wrong — Arrays are simple data structures, not overarching design philosophies.",
            "Why B is correct — OOAD is the formal industry acronym representing OOP architectural design.",
            "Why C is wrong — This is a garbled mix of unrelated polymorphic and runtime keywords.",
            "Why D is wrong — Dynamic binding executes polymorphism, it is not a visual design framework."
          ]
        },
        {
          question: "Which of the following describes the core functional mechanism of the dot operator `.`?",
          options: [
            "It statically allocates Java hashmap memory during code compilation.",
            "It bridges a specific object instance to its encapsulated state variables and behavioral methods.",
            "It triggers run-time overriding by referencing abstract base classes.",
            "It replaces the need for the `public` access specifier when inside global scope loops."
          ],
          correct: 1,
          explanation: "The dot operator (`.`) serves as the fundamental access bridge in both C++ and Java. It connects a designated object instance (e.g., `s1`) to its internal properties (e.g., `s1.id`) or actions (e.g., `s1.display()`).",
          optionExplanations: [
            "Why A is wrong — Memory allocation requires the `new` keyword, and Java does not allocate objects statically at compile time.",
            "Why B is correct — This perfectly defines the operator's bridging function between instance and member.",
            "Why C is wrong — Overriding is handled internally by JVM/C++ dispatch tables based on inheritance hierarchies, not manually forced by the dot.",
            "Why D is wrong — Access modifiers strictly enforce security; the dot operator cannot bypass a `private` block."
          ]
        }
      ]
    }
  ]
};

