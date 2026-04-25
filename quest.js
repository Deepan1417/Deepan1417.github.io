const COURSE_DATA = {
  courseName: "Fundamentals of Object Oriented Programming (NPTEL – IIT Roorkee)",
  subtitle: "MCQ Question Bank",
  units: [
    {
      name: "Unit 1: Introduction to OOP",
      questions: [
        {
          question: "Who coined the term 'Object-Oriented Programming'?",
          options: [
            "Dennis Ritchie",
            "Alan Kay",
            "Bjarne Stroustrup",
            "James Gosling"
          ],
          correct: 1,
          explanation: "Alan Kay coined the term 'Object-Oriented Programming' around 1966 while working on his PhD in graduate school. His ideas were inspired by Simula and later led to the development of Smalltalk, which is considered the first pure OOP language.",
          optionExplanations: [
            "Dennis Ritchie is credited with creating the C programming language, not coining OOP.",
            "Correct. Alan Kay coined the term 'Object-Oriented Programming' around 1966 during his graduate studies.",
            "Bjarne Stroustrup created C++, the first widely used OOP language, but did not coin the term.",
            "James Gosling created Java, but did not coin the term OOP."
          ]
        },
        {
          question: "Which language is considered the first truly object-oriented language that introduced classes, subclasses, inheritance, and virtual methods?",
          options: [
            "C++",
            "Smalltalk",
            "Simula",
            "COBOL"
          ],
          correct: 2,
          explanation: "Simula, introduced in 1965, is widely regarded as the first object-oriented programming language. It introduced foundational OOP concepts including classes, subclasses, inheritance, and virtual methods, predating C++ and Smalltalk.",
          optionExplanations: [
            "C++ was developed in the 1980s by Bjarne Stroustrup, much later than Simula.",
            "Smalltalk is often called the first pure OOP language but was developed after Simula.",
            "Correct. Simula (1965) introduced classes, subclasses, inheritance, and virtual methods.",
            "COBOL is a procedural language with no connection to OOP history."
          ]
        },
        {
          question: "Which application developed in 1961-62 served as an early inspiration for object-based programming?",
          options: [
            "Simula",
            "Smalltalk",
            "Sketchpad",
            "LISP"
          ],
          correct: 2,
          explanation: "Sketchpad, developed by Ivan Sutherland in 1961-62, was a pioneering graphical interface program that influenced later OOP ideas. It allowed objects to be created and manipulated, inspiring programmers to think about object-based software design.",
          optionExplanations: [
            "Simula came after Sketchpad, in 1965, and was inspired by it among other things.",
            "Smalltalk was developed in the 1970s, much later than Sketchpad.",
            "Correct. Sketchpad (1961-62) served as an early inspiration for building object-based applications.",
            "LISP is a functional programming language and was not related to the object-based inspiration described."
          ]
        },
        {
          question: "In OOP, what are the three characteristics of an object?",
          options: [
            "State, behavior, and identity",
            "Data, function, and class",
            "Public, private, and protected",
            "Constructor, destructor, and method"
          ],
          correct: 0,
          explanation: "Every object in OOP has three key characteristics: State (data/value, e.g., a pen's color), Behavior (functionality, e.g., writing), and Identity (a unique ID used to distinguish the object from others). These three together define what an object is.",
          optionExplanations: [
            "Correct. State (data), behavior (functionality), and identity (unique ID) are the three characteristics.",
            "Data and function are components inside a class, but 'class' itself is not an object characteristic.",
            "Public, private, and protected are access specifiers, not object characteristics.",
            "Constructor and destructor are special methods, not intrinsic characteristics of an object."
          ]
        },
        {
          question: "In OOP, what is the relationship between a class and an object?",
          options: [
            "A class is an instance of an object",
            "An object is a blueprint and a class is an instance",
            "A class is a blueprint and an object is an instance of the class",
            "A class and an object are identical concepts"
          ],
          correct: 2,
          explanation: "A class is a template or blueprint that defines structure (data) and behavior (methods). An object is a concrete instance of a class created at runtime. For example, 'Cylinder' is a class, and each specific cylinder you create is an object.",
          optionExplanations: [
            "This reverses the correct relationship — a class is the blueprint, not the instance.",
            "This is incorrect; an object is the instance (result), not the blueprint.",
            "Correct. A class is the template; objects are runtime instances created from the class.",
            "Class and object are fundamentally different — one is a definition and the other is a runtime entity."
          ]
        },
        {
          question: "Which OOP principle allows a class to reuse the attributes and methods of another class?",
          options: [
            "Encapsulation",
            "Polymorphism",
            "Abstraction",
            "Inheritance"
          ],
          correct: 3,
          explanation: "Inheritance allows a derived class (child) to reuse the member data and functions of a base class (parent). This promotes code reusability — if Class A has functionality that Class B also needs, Class B can simply inherit from Class A instead of rewriting the code.",
          optionExplanations: [
            "Encapsulation bundles data and methods together within a class; it is not about reusing another class.",
            "Polymorphism allows the same entity to take multiple forms; it is not primarily about code reuse.",
            "Abstraction hides implementation details; it does not enable reusing another class's code directly.",
            "Correct. Inheritance enables a derived class to inherit and reuse properties of a base class."
          ]
        },
        {
          question: "Which of the following is NOT an advantage of Object-Oriented Programming?",
          options: [
            "Modularity through classes",
            "Code reusability via inheritance",
            "Faster execution than assembly language",
            "Data security through access specifiers"
          ],
          correct: 2,
          explanation: "OOP's advantages include modularity, reusability, encapsulation, inheritance, abstraction, polymorphism, and design advantages. OOP does not claim to execute faster than low-level languages like assembly — in fact, the abstraction overhead can sometimes reduce performance compared to bare-metal code.",
          optionExplanations: [
            "Modularity through classes is a genuine OOP advantage — programs are divided into manageable class-based modules.",
            "Code reusability via inheritance is a genuine OOP advantage — derived classes can reuse base class logic.",
            "Correct — this is NOT an OOP advantage. Assembly runs closer to hardware and OOP adds abstraction overhead.",
            "Data security through access specifiers (private/protected) is a genuine OOP advantage."
          ]
        },
        {
          question: "Which OOP concept refers to bundling data and the methods that operate on it into a single unit (class)?",
          options: [
            "Abstraction",
            "Polymorphism",
            "Encapsulation",
            "Inheritance"
          ],
          correct: 2,
          explanation: "Encapsulation is the OOP concept of wrapping member data and member functions together inside a class — like a capsule. It also provides data hiding: you control what is accessible from outside the class using access specifiers (public/private/protected).",
          optionExplanations: [
            "Abstraction exposes only essential interfaces and hides internal complexity; it is distinct from bundling.",
            "Polymorphism allows the same entity (function/operator) to behave differently in different contexts.",
            "Correct. Encapsulation bundles member data and member functions inside a class, like a capsule.",
            "Inheritance is about deriving one class from another to reuse its features."
          ]
        },
        {
          question: "What does the acronym OOAD stand for in the context of OOP design advantages?",
          options: [
            "Object-Oriented Algorithm Design",
            "Object-Oriented Analysis and Design",
            "Object-Oriented Application Development",
            "Operator-Oriented Abstraction Diagram"
          ],
          correct: 1,
          explanation: "OOAD stands for Object-Oriented Analysis and Design. It is a software engineering approach that models software using OOP concepts and diagrams (class diagrams, sequence diagrams, etc.) to analyze and design a system before coding — similar to how flowcharts work in procedural programming.",
          optionExplanations: [
            "OOAD does not stand for Object-Oriented Algorithm Design; that is not a standard term.",
            "Correct. OOAD stands for Object-Oriented Analysis and Design, used for modeling OOP systems.",
            "Object-Oriented Application Development is not what OOAD stands for.",
            "Operator-Oriented Abstraction Diagram is a fabricated term not used in OOP."
          ]
        },
        {
          question: "In procedural-oriented programming, the program is structured around _____, while in OOP it is structured around _____.",
          options: [
            "Objects; functions",
            "Functions; objects",
            "Classes; modules",
            "Data; algorithms"
          ],
          correct: 1,
          explanation: "Procedural-Oriented Programming (POP) organizes a program around functions (procedures). Object-Oriented Programming (OOP) organizes it around objects and classes. This is the fundamental paradigm shift between the two approaches.",
          optionExplanations: [
            "This reverses the relationship; procedural focuses on functions and OOP focuses on objects.",
            "Correct. POP is function-centric; OOP is object/class-centric.",
            "Classes and modules are OOP-related but do not correctly describe the POP side of the comparison.",
            "While POP manipulates data through algorithms, the primary structural unit is still the function, not data."
          ]
        },
        {
          question: "Which of the following correctly describes abstraction in OOP?",
          options: [
            "Storing data and functions in a single capsule",
            "A derived class using properties of a base class",
            "Declaring the interface in a base class while hiding implementation in derived classes",
            "A single function behaving differently based on input type"
          ],
          correct: 2,
          explanation: "Abstraction means exposing only essential information (the 'what') while hiding the implementation details (the 'how'). In OOP, an abstract class declares member functions without defining them — derived classes provide the actual definitions. This is analogous to an abstract in a research paper: it summarizes intent without exposing details.",
          optionExplanations: [
            "Storing data and functions in a single capsule describes encapsulation, not abstraction.",
            "A derived class using properties of a base class describes inheritance.",
            "Correct. Abstraction declares behavior in a base class (interface) and lets derived classes implement it.",
            "A function behaving differently based on input type describes polymorphism (function overloading)."
          ]
        },
        {
          question: "The concept of 'poly means many, morph means forms' best describes which OOP principle?",
          options: [
            "Encapsulation",
            "Inheritance",
            "Abstraction",
            "Polymorphism"
          ],
          correct: 3,
          explanation: "Polymorphism literally means 'many forms'. In OOP, a single entity (like a function or operator) can take multiple forms depending on context. For example, an add() function can work for integers, floats, or strings. This is central to both function overloading and method overriding.",
          optionExplanations: [
            "Encapsulation is about bundling data and methods, not about 'many forms'.",
            "Inheritance is about deriving classes, not about something taking multiple forms.",
            "Abstraction is about hiding implementation details, not about multiple forms of an entity.",
            "Correct. Polymorphism (poly = many, morph = forms) allows an entity to take multiple forms."
          ]
        },
        {
          question: "In the context of data maintenance in OOP, if class A and class B both declare a variable 'int a', what happens?",
          options: [
            "A compile error is thrown because variable names must be unique across the program",
            "Both 'a' variables coexist without conflict, each scoped to its respective class",
            "The second declaration overrides the first one globally",
            "The program runs but produces undefined behavior"
          ],
          correct: 1,
          explanation: "Unlike procedural programming where declaring the same variable name twice causes an error, OOP's class scoping allows different classes to have identically named member variables. 'int a' in class A and 'int a' in class B are distinct and fully independent — accessed as A::a and B::a respectively.",
          optionExplanations: [
            "No compile error occurs; class scoping makes each 'a' unique to its class.",
            "Correct. Each class creates its own scope, so 'int a' in class A and in class B are independent.",
            "The second declaration does not override the first; they exist in separate class scopes.",
            "There is no undefined behavior; class-scoped variables with the same name are legal and well-defined in OOP."
          ]
        },
        {
          question: "Mathematical foundations like lambda calculus and the Turing machine were developed in which decade, forming the basis of early programming paradigms?",
          options: [
            "1910s",
            "1920s",
            "1930s",
            "1950s"
          ],
          correct: 2,
          explanation: "In the 1930s, Alan Turing developed the Turing Machine (1936) and Alonzo Church developed lambda calculus — both forming the theoretical foundation of computation and programming paradigms. These mathematical models predated actual computers and OOP by several decades.",
          optionExplanations: [
            "The 1910s predate the formal development of both lambda calculus and the Turing machine.",
            "The 1920s also predate these foundational works; lambda calculus was developed in the 1930s.",
            "Correct. Both lambda calculus and the Turing machine were introduced in the 1930s.",
            "By the 1950s, actual computers already existed and programming languages like FORTRAN were being developed."
          ]
        },
        {
          question: "Which of the following scenarios best demonstrates the 'design advantage' of OOP over procedural programming?",
          options: [
            "Writing a single large function that handles all program logic",
            "Using UML class diagrams to visually represent class relationships and system architecture",
            "Declaring all variables as global to avoid scoping issues",
            "Writing recursive functions to solve problems"
          ],
          correct: 1,
          explanation: "One of OOP's design advantages is OOAD — Object-Oriented Analysis and Design — where diagrams like UML class diagrams, sequence diagrams, etc., visually represent the system. This replaces the simple flowchart of procedural programming and allows more complex systems to be analyzed, communicated, and designed.",
          optionExplanations: [
            "Writing one large function contradicts OOP's modularity principle — it is the anti-pattern OOP avoids.",
            "Correct. UML diagrams in OOAD represent the OOP design advantage over procedural flowcharts.",
            "Declaring all variables as global defeats encapsulation and data security, a key OOP advantage.",
            "Recursion is a technique available in both procedural and OOP paradigms; it is not a design advantage of OOP."
          ]
        }
      ]
    },
    {
      name: "Unit 2: Classes, Objects & Constructors",
      questions: [
        {
          question: "Which of the following is true about a constructor in C++?",
          options: [
            "A constructor can have a return type of void",
            "A constructor is invoked explicitly by the programmer",
            "A constructor has the same name as the class and is invoked automatically at object creation",
            "A constructor can be declared as static"
          ],
          correct: 2,
          explanation: "A constructor is a special member function that has the same name as the class. It is automatically invoked when an object is created — the programmer does not need to call it explicitly. Its purpose is to initialize the data members of the new object.",
          optionExplanations: [
            "Constructors have no return type at all — not even void. This is a key distinction from regular functions.",
            "Constructors are invoked automatically at object creation, not explicitly by the programmer.",
            "Correct. A constructor shares the class name and is automatically called when an object is instantiated.",
            "Static constructors are not valid in C++ — constructors cannot be declared as static members."
          ]
        },
        {
          question: "What is a default constructor?",
          options: [
            "A constructor that takes at least one parameter",
            "A constructor that takes no parameters and initializes members to default values",
            "A constructor that copies values from another object",
            "A constructor that is defined outside the class body"
          ],
          correct: 1,
          explanation: "A default constructor is one that takes no arguments. It initializes member data to default values — for example, setting a book's title and author to 'Unknown' and price to 0. If no constructor is defined, the compiler generates a default one automatically.",
          optionExplanations: [
            "A constructor that takes at least one parameter is called a parameterized constructor, not a default constructor.",
            "Correct. A default constructor takes no parameters and sets members to their default (initial) values.",
            "A constructor that copies values from another object is a copy constructor.",
            "A constructor defined outside the class is still a regular constructor; the location of definition does not determine the type."
          ]
        },
        {
          question: "Consider the C++ syntax: `Example E2(E1);` where E1 is an existing object of class Example. Which constructor is invoked?",
          options: [
            "Default constructor",
            "Parameterized constructor",
            "Copy constructor",
            "Destructor"
          ],
          correct: 2,
          explanation: "When an object is initialized by passing another object of the same class as an argument — like `Example E2(E1)` — the copy constructor is invoked. The copy constructor takes a reference to an existing object (`Example& ob`) and copies its member data into the new object.",
          optionExplanations: [
            "The default constructor takes no arguments; passing an object E1 does not trigger it.",
            "A parameterized constructor takes one or more parameters like int, float, etc. — not an object of the same class.",
            "Correct. Passing an existing object to a new object's constructor invokes the copy constructor.",
            "A destructor is called at the end of an object's lifetime, not during creation."
          ]
        },
        {
          question: "What is the symbol used to define a destructor in C++?",
          options: [
            "! (exclamation mark) before the class name",
            "~ (tilde) before the class name",
            "* (asterisk) before the class name",
            "@ (at sign) before the class name"
          ],
          correct: 1,
          explanation: "In C++, a destructor is defined using a tilde (~) followed by the class name, e.g., `~Employee()`. The destructor is automatically called when the object's scope ends or when `delete` is used, and it deallocates any dynamically allocated memory.",
          optionExplanations: [
            "An exclamation mark (!) is not used for destructors in C++ — it is the logical NOT operator.",
            "Correct. The tilde (~) followed by the class name defines a destructor, e.g., `~Employee()`.",
            "The asterisk (*) is used for pointer declarations and the dereference operator, not destructors.",
            "The at sign (@) has no special meaning in C++ syntax."
          ]
        },
        {
          question: "What is the primary purpose of a destructor in C++?",
          options: [
            "To initialize member variables to default values",
            "To create a copy of an existing object",
            "To deallocate memory and release resources when an object goes out of scope",
            "To overload existing operators for user-defined types"
          ],
          correct: 2,
          explanation: "A destructor is the counterpart to a constructor. While the constructor allocates resources when an object is created, the destructor releases those resources when the object is destroyed (goes out of scope or is explicitly deleted). This prevents memory leaks in C++ programs.",
          optionExplanations: [
            "Initializing member variables is the job of the constructor, not the destructor.",
            "Creating a copy of an existing object is the job of the copy constructor.",
            "Correct. The destructor deallocates memory and frees resources when the object's lifetime ends.",
            "Overloading operators is done through operator overloading functions, not destructors."
          ]
        },
        {
          question: "In C++, a static variable inside a class differs from a regular member variable in that:",
          options: [
            "It is created each time a new object of the class is instantiated",
            "Its scope is limited to the function in which it is declared",
            "It is shared across all instances of the class and persists throughout the program",
            "It can only be of integer type"
          ],
          correct: 2,
          explanation: "A static member variable in a class is shared by all objects of that class — there is only one copy of it in memory. Unlike regular member variables (which are unique per object), a static variable exists for the program's entire lifetime and is shared across all instances.",
          optionExplanations: [
            "A static variable is NOT created for each new object; one copy is shared across all objects.",
            "That describes local variables; class static member variables have class-wide scope.",
            "Correct. A static member variable is shared by all instances of the class and persists throughout execution.",
            "Static member variables can be of any type — int, float, string, etc."
          ]
        },
        {
          question: "In Java, what keyword is used to inherit one class from another?",
          options: [
            "implements",
            "inherits",
            "extends",
            "derives"
          ],
          correct: 2,
          explanation: "In Java, the `extends` keyword is used for class inheritance: `class SubclassName extends SuperclassName`. This is Java's syntax for establishing a parent-child (base-derived) class relationship, equivalent to the `:` syntax in C++.",
          optionExplanations: [
            "`implements` is used in Java to implement an interface, not to inherit from a class.",
            "`inherits` is not a valid Java keyword.",
            "Correct. Java uses `extends` keyword: `class B extends A` to inherit class A into B.",
            "`derives` is not a valid Java keyword; it is an informal term used in explanations."
          ]
        },
        {
          question: "Which of the following best describes what happens when `Time T1;` is written in C++?",
          options: [
            "A class named T1 is defined with a base class Time",
            "An object T1 is instantiated at runtime from the class Time",
            "A function T1 is declared with return type Time",
            "A typedef alias T1 is created for the Time class"
          ],
          correct: 1,
          explanation: "`Time T1;` is the syntax for creating (instantiating) an object called T1 from the class Time. Objects are instantiated at runtime and represent concrete instances of the class blueprint. All members of the Time class can then be accessed through T1.",
          optionExplanations: [
            "This syntax does not define a new class; it creates an object instance.",
            "Correct. `Time T1;` instantiates an object T1 of class Time at runtime.",
            "A function declaration looks like `Time T1()` or `Time T1(args)` — the syntax without parentheses creates an object.",
            "A typedef would be written as `typedef Time T1;` which is different syntax entirely."
          ]
        },
        {
          question: "Which access modifier in C++ allows access only within the class itself?",
          options: [
            "public",
            "protected",
            "private",
            "internal"
          ],
          correct: 2,
          explanation: "The `private` access modifier restricts access to class members so they can only be accessed from within the same class. Even derived classes cannot directly access private members of the base class. This enforces data hiding and encapsulation.",
          optionExplanations: [
            "`public` members are accessible from anywhere — inside the class, derived classes, and external code.",
            "`protected` members are accessible within the class and in derived (child) classes, but not externally.",
            "Correct. `private` members are accessible only within the class itself — not even derived classes can access them.",
            "`internal` is a keyword in C#, not in C++."
          ]
        },
        {
          question: "A class in C++ can contain which of the following?",
          options: [
            "Only member data",
            "Only member functions",
            "Member data, member functions, and constructors",
            "Member data but not constructors"
          ],
          correct: 2,
          explanation: "A C++ class is a complete unit that can contain: (1) Member data (fields/attributes like int id), (2) Member functions (behaviors/methods), (3) Constructors (special functions to initialize objects), (4) Destructors, and (5) Nested classes or blocks. It is more than just data storage.",
          optionExplanations: [
            "A class can hold much more than just member data; restricting it to only data ignores methods and constructors.",
            "A class can hold much more than just member functions; it also needs data members.",
            "Correct. A class can contain member data, member functions, constructors, destructors, and more.",
            "Classes absolutely can have constructors; they are one of the most essential parts of a class."
          ]
        },
        {
          question: "In a C++ class, members are private by default. Which statement about this is correct?",
          options: [
            "Private members can be accessed directly using the dot operator from main()",
            "Private members cannot be accessed by member functions of the same class",
            "Private members can only be accessed by the class's own member functions and friend functions",
            "Private members are inherited as public in derived classes"
          ],
          correct: 2,
          explanation: "By default, all members in a C++ class (not struct) are private. Private members are accessible only within the class's own member functions and by any declared friend functions. They cannot be accessed directly from outside the class or from derived classes.",
          optionExplanations: [
            "Private members cannot be accessed using the dot operator from main() or any external scope.",
            "Private members CAN be accessed by the class's own member functions — that is their primary use.",
            "Correct. Private members are accessible only within the class itself (member functions) and friend functions.",
            "Private members are NOT inherited as public; they are simply inaccessible to derived classes."
          ]
        },
        {
          question: "Which of the following correctly defines a member function outside the class body in C++?",
          options: [
            "ClassName.functionName() { ... }",
            "ClassName -> functionName() { ... }",
            "ClassName :: functionName() { ... }",
            "functionName() extends ClassName { ... }"
          ],
          correct: 2,
          explanation: "In C++, to define a member function outside the class body, you use the scope resolution operator `::`. The syntax is: `ReturnType ClassName::functionName(params) { ... }`. This tells the compiler the function belongs to a specific class.",
          optionExplanations: [
            "`ClassName.functionName()` uses the dot operator, which is for accessing members of an object, not defining functions outside a class.",
            "`ClassName -> functionName()` uses the arrow operator, which is used to access members via a pointer, not for defining functions.",
            "Correct. `ClassName::functionName()` uses the scope resolution operator `::` to define a member function outside the class.",
            "`functionName() extends ClassName` is Java-like syntax and is invalid in C++."
          ]
        },
        {
          question: "In Java, what does the `super` keyword refer to?",
          options: [
            "The static method of the current class",
            "The current class's constructor",
            "An immediate parent class object or its constructor/method",
            "The topmost class in the Java hierarchy"
          ],
          correct: 2,
          explanation: "In Java, `super` is a reference variable that refers to the immediate parent class object. It has three uses: (1) accessing parent class instance variables, (2) calling the parent class constructor via `super()`, and (3) calling parent class methods. The compiler automatically adds `super()` in every class constructor if not explicitly written.",
          optionExplanations: [
            "`super` does not refer to static methods; static methods belong to the class, not an instance.",
            "`this()` is used to call the current class's constructor; `super()` calls the parent class constructor.",
            "Correct. `super` refers to the immediate parent class and can access its variables, constructors, and methods.",
            "The topmost class in Java hierarchy is `Object`, not `super`."
          ]
        },
        {
          question: "Which of the following is true about constructor overloading in C++?",
          options: [
            "A class can have at most two constructors",
            "Overloaded constructors must have different names",
            "A class can have multiple constructors with different parameter lists",
            "Constructor overloading requires the virtual keyword"
          ],
          correct: 2,
          explanation: "Constructor overloading allows a class to have multiple constructors, each with a different parameter list (different number or type of arguments). For example, a class can have a default constructor (no args), a parameterized constructor (one or more args), and a copy constructor. The correct constructor is selected at compile time based on the call.",
          optionExplanations: [
            "A class can have any number of constructors, not just two.",
            "All constructors must have the same name as the class — they differ only in parameter lists.",
            "Correct. Constructor overloading allows multiple constructors differing in their parameter lists.",
            "The `virtual` keyword is for virtual functions (runtime polymorphism), not for constructors."
          ]
        },
        {
          question: "What is the output when two employee objects E1 and E2 are created from class Employee that has a destructor printing 'Destructor invoked'?",
          options: [
            "The destructor message prints once after the program ends",
            "The destructor message prints twice — once for each object when they go out of scope",
            "The destructor message is never printed unless delete is explicitly called",
            "The destructor message prints before the constructor message for each object"
          ],
          correct: 1,
          explanation: "Since two objects (E1 and E2) are created, the destructor is invoked exactly twice — once for each object when they go out of scope (typically before `return 0`). Destructors are called in reverse order of construction (LIFO). This is automatic and does not require the programmer to explicitly call the destructor.",
          optionExplanations: [
            "The destructor prints twice (once per object), not just once.",
            "Correct. With two objects, the destructor runs twice, once per object, as they go out of scope.",
            "For stack-allocated objects, destructors are called automatically — no explicit `delete` is needed.",
            "Constructors run before destructors — objects are created first, then destroyed at end of scope."
          ]
        }
      ]
    },
    {
      name: "Unit 3: Inheritance",
      questions: [
        {
          question: "Which type of inheritance involves a single derived class inheriting from exactly one base class?",
          options: [
            "Multiple inheritance",
            "Multilevel inheritance",
            "Single inheritance",
            "Hierarchical inheritance"
          ],
          correct: 2,
          explanation: "Single (also called Simple) inheritance is the most basic form — one derived class inherits from exactly one base class, forming a simple parent-child relationship. For example, class B inheriting from class A is single inheritance.",
          optionExplanations: [
            "Multiple inheritance involves a derived class inheriting from more than one base class.",
            "Multilevel inheritance involves a chain: class C inherits from B, which inherits from A.",
            "Correct. Single inheritance: one derived class, one base class. Simple A → B relationship.",
            "Hierarchical inheritance involves multiple derived classes all inheriting from one base class."
          ]
        },
        {
          question: "In multilevel inheritance, if class GraduateStudent inherits from Student, and Student inherits from Person, which class is the root base class?",
          options: [
            "GraduateStudent",
            "Student",
            "Person",
            "There is no root base class in multilevel inheritance"
          ],
          correct: 2,
          explanation: "In multilevel inheritance, there is a chain of inheritance. In the chain Person → Student → GraduateStudent, Person is the topmost (root) base class. GraduateStudent inherits from Student, which in turn inherits from Person, so GraduateStudent transitively inherits from Person as well.",
          optionExplanations: [
            "GraduateStudent is the most derived class (the leaf) in the chain, not the root.",
            "Student is an intermediate class — both derived (from Person) and base (for GraduateStudent).",
            "Correct. Person is the root base class in this multilevel chain: Person → Student → GraduateStudent.",
            "Every multilevel chain has a root base class — in this case, Person."
          ]
        },
        {
          question: "What is the 'diamond problem' in multiple inheritance, and in which language does it commonly arise?",
          options: [
            "A name conflict when two base classes have a method with the same name — common in C++",
            "A memory corruption issue when two objects share the same pointer — common in Java",
            "An infinite loop that occurs during object destruction — common in Python",
            "A compile error caused by circular class dependencies — common in all OOP languages"
          ],
          correct: 0,
          explanation: "The 'diamond problem' (also called ambiguity in multiple inheritance) occurs in C++ when a derived class inherits from two classes that both have a method with the same name. The compiler cannot determine which version to use. It is resolved using the scope resolution operator (e.g., ClassA::display()). Java avoids this by not supporting multiple class inheritance.",
          optionExplanations: [
            "Correct. The diamond problem is a name ambiguity when two parent classes share the same method name — resolved via scope resolution in C++.",
            "Memory corruption from shared pointers is a different issue (dangling/double-delete) unrelated to the diamond problem.",
            "Infinite loops in destructors are a separate kind of bug, not the diamond problem.",
            "The diamond problem is specific to C++ (which supports multiple class inheritance); Java prevents it by disallowing multiple class inheritance."
          ]
        },
        {
          question: "Which access specifier should be used for a base class member if you want it accessible in derived classes but NOT from outside the class hierarchy?",
          options: [
            "public",
            "private",
            "protected",
            "friend"
          ],
          correct: 2,
          explanation: "The `protected` access specifier makes a member accessible within the class and in all derived (child) classes, but not from outside the class hierarchy. This strikes a balance between full public access and strict private restriction — ideal for inheritance scenarios.",
          optionExplanations: [
            "`public` members are accessible everywhere — inside, derived classes, AND from external code.",
            "`private` members are not accessible even in derived classes, only within the class itself.",
            "Correct. `protected` is accessible inside the class and its derived classes, but NOT from external code.",
            "`friend` is a relationship specifier for non-member functions/classes, not an access level for inheritance."
          ]
        },
        {
          question: "If a class is inherited with the `private` access modifier in C++, what happens to the public members of the base class?",
          options: [
            "They remain public in the derived class",
            "They become protected in the derived class",
            "They become private in the derived class",
            "They are completely removed from the derived class"
          ],
          correct: 2,
          explanation: "When a class is privately inherited, all public and protected members of the base class become private in the derived class. This means they can only be accessed through the derived class's own member functions — not by objects of the derived class or further derived classes.",
          optionExplanations: [
            "Public members remain public only in public inheritance, not in private inheritance.",
            "Protected members become private in private inheritance; public members also become private.",
            "Correct. With private inheritance, all public and protected base members become private in the derived class.",
            "Members are not removed; they are still inherited but become inaccessible from outside the derived class."
          ]
        },
        {
          question: "Hierarchical inheritance is best described as:",
          options: [
            "A class inheriting from multiple base classes",
            "Multiple derived classes inheriting from a single base class",
            "A chain of inheritance: A → B → C",
            "A combination of single and multiple inheritance"
          ],
          correct: 1,
          explanation: "In hierarchical inheritance, a single base class is the parent of multiple derived classes. For example, class Animal can be the base for Dog, Cat, and Tiger — each inheriting from Animal. This is like a tree with Animal at the root and the animals as children.",
          optionExplanations: [
            "A class inheriting from multiple base classes describes multiple inheritance.",
            "Correct. Hierarchical inheritance: one base class, multiple derived classes (like branches from a trunk).",
            "A chain of inheritance A → B → C describes multilevel inheritance.",
            "A combination of single and multiple inheritance describes hybrid inheritance."
          ]
        },
        {
          question: "Which of the following is a unique feature of multiple inheritance in C++ that is NOT supported in Java for classes?",
          options: [
            "A class can override methods from its parent",
            "A class can inherit from more than one class simultaneously",
            "A class can have a constructor",
            "A class can implement an interface"
          ],
          correct: 1,
          explanation: "C++ supports multiple inheritance — a derived class can inherit from two or more base classes simultaneously (e.g., `class C : public A, public B`). Java does not support multiple inheritance of classes (to avoid the diamond problem), though it allows a class to implement multiple interfaces.",
          optionExplanations: [
            "Method overriding is available in both C++ and Java via virtual functions/method overriding.",
            "Correct. Multiple class inheritance is supported in C++ but NOT for classes in Java.",
            "Both C++ and Java support constructors — this is not unique to C++.",
            "Java (not C++) supports implementing multiple interfaces; this is Java's way to compensate for lack of multiple class inheritance."
          ]
        },
        {
          question: "What is a friend function in C++?",
          options: [
            "A member function that is inherited from a base class",
            "A non-member function that is granted access to private and protected class members",
            "A constructor that initializes members with values from another object",
            "A function that can only access public members of a class"
          ],
          correct: 1,
          explanation: "A friend function in C++ is a function declared inside a class with the `friend` keyword but defined outside the class. It is not a member function, yet it is granted special access to private and protected members of the class. It uses the `friend` keyword in the declaration but not in the definition.",
          optionExplanations: [
            "An inherited member function from a base class is not the same as a friend function.",
            "Correct. A friend function is a non-member function with access to private and protected class data.",
            "A copy constructor copies values from another object; this is not a friend function.",
            "A friend function is specifically given access to private/protected members — the opposite of what option D says."
          ]
        },
        {
          question: "In C++, which of the following about member access in inheritance is INCORRECT?",
          options: [
            "Public members of a public base class remain public in the derived class",
            "Private members of a base class are directly accessible in a derived class",
            "Protected members of a public base class remain protected in the derived class",
            "Private members can be accessed in derived classes via public getter methods"
          ],
          correct: 1,
          explanation: "Private members of a base class are strictly inaccessible in derived classes — this is fundamental to data hiding. While they are technically inherited, they cannot be directly accessed or used by any derived class. They can only be accessed via public or protected methods (getters/setters) provided by the base class.",
          optionExplanations: [
            "This is correct: public base class members remain public in publicly derived classes.",
            "Incorrect. Private base class members are NOT directly accessible in derived classes. This is the wrong statement.",
            "This is correct: protected base class members remain protected in publicly derived classes.",
            "This is correct: private members can be accessed indirectly through public getter methods."
          ]
        },
        {
          question: "Hybrid inheritance is a combination of which types of inheritance?",
          options: [
            "Only single and multiple inheritance",
            "Two or more types of inheritance used together in the same class hierarchy",
            "Multilevel and hierarchical inheritance only",
            "Single and multilevel inheritance only"
          ],
          correct: 1,
          explanation: "Hybrid inheritance combines two or more types of inheritance within the same class hierarchy. For example, combining hierarchical inheritance (one base, multiple derived) with multiple inheritance (one class inheriting from two) creates a hybrid. This can lead to the diamond problem and is handled carefully in C++.",
          optionExplanations: [
            "Hybrid can combine any types, not just single and multiple — multilevel and hierarchical can also be part of it.",
            "Correct. Hybrid inheritance involves mixing two or more inheritance types in the same hierarchy.",
            "Only multilevel and hierarchical is a subset; hybrid inheritance is a broader combination.",
            "Only single and multilevel is too restrictive; hybrid involves any combination of two or more types."
          ]
        },
        {
          question: "In Java's inheritance, the `super()` call inside a constructor is used to:",
          options: [
            "Create a new instance of the parent class",
            "Invoke the immediate parent class's constructor",
            "Override the parent class's method",
            "Access static members of the parent class"
          ],
          correct: 1,
          explanation: "In Java, `super()` inside a constructor explicitly calls the constructor of the immediate parent class. If not written explicitly, the Java compiler automatically adds `super()` as the first statement in every constructor. It is used to ensure parent class members are properly initialized before the child class constructor runs.",
          optionExplanations: [
            "`super()` does not create a new parent class object; it calls the parent's constructor in the context of the child object.",
            "Correct. `super()` calls the immediate parent class's constructor and must be the first statement.",
            "Method overriding uses the `@Override` annotation and the same method signature; `super()` is not for overriding.",
            "Static members are accessed with the class name directly, not via `super()`."
          ]
        },
        {
          question: "What is the primary benefit of using inheritance in OOP?",
          options: [
            "It eliminates the need for constructors",
            "It allows a derived class to reuse code from a base class, promoting modularity",
            "It prevents any subclass from overriding the parent's methods",
            "It allows a class to have multiple instances"
          ],
          correct: 1,
          explanation: "Inheritance promotes code reusability — the most cited advantage. Instead of rewriting shared functionality in multiple classes, a base class defines the common behavior and all derived classes inherit it. This reduces code duplication, improves maintainability, and establishes logical class hierarchies.",
          optionExplanations: [
            "Inheritance does not eliminate constructors; derived classes can have their own constructors.",
            "Correct. The primary benefit is code reuse — derived classes automatically get base class behavior.",
            "Inheritance actually enables method overriding (a key feature), not prevents it.",
            "Creating multiple instances is a basic OOP feature unrelated to inheritance."
          ]
        },
        {
          question: "In C++, when a derived class B inherits from base class A using `class B : public A`, which of the following is true?",
          options: [
            "Private members of A become public in B",
            "Public members of A become public in B, and protected members of A become protected in B",
            "All members of A become private in B",
            "B can access private members of A directly"
          ],
          correct: 1,
          explanation: "With public inheritance (`class B : public A`): public members of A remain public in B, protected members of A remain protected in B, and private members of A remain inaccessible in B. Public inheritance preserves the access levels — it is the most common form of inheritance in OOP.",
          optionExplanations: [
            "Private members of A are never elevated to public — they remain inaccessible in the derived class.",
            "Correct. Public inheritance preserves access levels: public stays public, protected stays protected.",
            "All members becoming private in B describes private inheritance, not public inheritance.",
            "Derived class B cannot access private members of A directly, regardless of inheritance type."
          ]
        },
        {
          question: "Which of the following inheritance scenarios would cause a compile-time ambiguity error in C++ without explicit resolution?",
          options: [
            "class C inherits from class B, and class B inherits from class A",
            "class C inherits from class A and class B, and both A and B have a method display()",
            "class B inherits from class A with public access",
            "class C inherits from class A with private access"
          ],
          correct: 1,
          explanation: "When class C inherits from both A and B (multiple inheritance) and both A and B define a `display()` method, calling `c_obj.display()` causes ambiguity — the compiler cannot determine which `display()` to use. This must be resolved explicitly using the scope resolution operator: `c_obj.A::display()` or `c_obj.B::display()`.",
          optionExplanations: [
            "This is multilevel inheritance — no ambiguity since there is a clear chain.",
            "Correct. Multiple inheritance with same method name in both bases causes ambiguity in C++.",
            "Public single inheritance has no ambiguity issues.",
            "Private single inheritance has no ambiguity issues."
          ]
        },
        {
          question: "In the university case study (Person → Student → GraduateStudent multilevel inheritance), what data does GraduateStudent inherit from Person?",
          options: [
            "Only GraduateStudent's own data (thesis and advisor)",
            "Only Student's data (department, GPA)",
            "Only Person's data (name, age, ID)",
            "Data from all three classes: Person's name/age/ID, Student's department/GPA, and its own members"
          ],
          correct: 3,
          explanation: "In multilevel inheritance, each derived class inherits from all classes above it in the chain. GraduateStudent inherits from Student (which includes department and GPA), and Student inherits from Person (which includes name, age, and ID). So GraduateStudent has access to data from all three levels plus its own thesis/advisor fields.",
          optionExplanations: [
            "GraduateStudent inherits more than just its own thesis/advisor fields — it gets all levels above it.",
            "Student's data is just one level; GraduateStudent also gets Person's data transitively.",
            "Person's data alone is incomplete; GraduateStudent gets Student's and its own data too.",
            "Correct. Multilevel inheritance accumulates all accessible members from every class in the chain."
          ]
        }
      ]
    },
    {
      name: "Unit 4: Polymorphism",
      questions: [
        {
          question: "Which type of polymorphism is resolved at compile time in C++?",
          options: [
            "Runtime polymorphism via virtual functions",
            "Dynamic dispatch via method overriding",
            "Compile-time polymorphism via function overloading",
            "Late binding via pure virtual functions"
          ],
          correct: 2,
          explanation: "Compile-time (static) polymorphism is resolved by the compiler before the program runs. In C++, function overloading achieves this — when functions with the same name differ in the number or type of parameters, the correct version is selected at compile time based on the call signature.",
          optionExplanations: [
            "Virtual functions implement runtime (dynamic) polymorphism, not compile-time.",
            "Dynamic dispatch via method overriding is runtime polymorphism, resolved during execution.",
            "Correct. Function overloading is compile-time (static) polymorphism — resolved by the compiler.",
            "Late binding is another name for runtime polymorphism via virtual functions."
          ]
        },
        {
          question: "What is the key difference between function overloading and function overriding?",
          options: [
            "Overloading occurs in derived classes; overriding occurs in the same class",
            "Overloading changes the function's return type; overriding changes the parameters",
            "Overloading has the same name but different parameters in the same scope; overriding has the same name, same parameters in base and derived classes",
            "Overloading requires the virtual keyword; overriding does not"
          ],
          correct: 2,
          explanation: "Function overloading: same function name but different parameter lists (number/type/order) within the same class or scope — resolved at compile time. Function overriding: same function name AND same parameters in both base and derived class — the derived class provides its own implementation, resolved at runtime using virtual functions.",
          optionExplanations: [
            "This is reversed — overloading is within the same class/scope; overriding involves base and derived classes.",
            "Overloading does not change return type (in C++); overriding preserves the same signature, not different parameters.",
            "Correct. Overloading = same name, different parameters (same scope). Overriding = same name, same parameters (base vs. derived).",
            "Overriding requires the virtual keyword in the base class; overloading does not need virtual."
          ]
        },
        {
          question: "What is Dynamic Method Dispatch (also known as runtime polymorphism) in OOP?",
          options: [
            "Selecting the correct overloaded function at compile time based on parameter types",
            "Calling a function based on the compile-time type of a reference",
            "Resolving a call to an overridden function based on the actual runtime object type",
            "Using the virtual keyword to prevent function overriding"
          ],
          correct: 2,
          explanation: "Dynamic Method Dispatch (runtime polymorphism) resolves which version of an overridden function to call based on the actual type of the object at runtime — not the declared type of the reference. In Java, if an Animal reference points to a Dog object, calling `move()` will invoke Dog's version at runtime. This is also called late binding or upcasting.",
          optionExplanations: [
            "Selecting overloaded functions at compile time describes compile-time polymorphism, not dynamic dispatch.",
            "Runtime polymorphism uses the runtime object type, NOT the compile-time reference type.",
            "Correct. Dynamic Method Dispatch uses the actual runtime object type to call the correct overridden method.",
            "Virtual functions ENABLE method overriding; they don't prevent it."
          ]
        },
        {
          question: "What is operator overloading in C++?",
          options: [
            "Defining new operators not previously available in C++",
            "Providing a user-defined meaning for existing operators applied to user-defined types",
            "Preventing certain operators from being used with a class",
            "Converting one type to another using cast operators"
          ],
          correct: 1,
          explanation: "Operator overloading allows C++ programmers to define custom behavior for existing operators (like +, -, *, ==) when applied to user-defined class objects. For example, you can overload `+` to add two Complex number objects. The operator keyword followed by the operator symbol is used in the definition.",
          optionExplanations: [
            "You cannot define entirely new operators (like ** for power) in C++; only existing operators can be overloaded.",
            "Correct. Operator overloading gives existing operators user-defined meaning for custom types.",
            "Operator overloading extends functionality; it does not block operators from being used.",
            "Type conversion is a separate concept; operator overloading is about defining behavior, not casting."
          ]
        },
        {
          question: "What does the `this` keyword refer to in C++?",
          options: [
            "The base class of the current object",
            "A pointer to the current object that invoked the member function",
            "A keyword to call the parent class constructor",
            "A reference to the next object in a linked structure"
          ],
          correct: 1,
          explanation: "In C++, `this` is an implicit pointer that is automatically passed to every non-static member function. It points to the current object that invoked the function. It is commonly used to resolve variable shadowing (when a parameter has the same name as a member variable), and to return the current object.",
          optionExplanations: [
            "`this` refers to the current object, not its base class. To access base class members, you use the base class name or `super` (Java).",
            "Correct. `this` is an implicit pointer to the current object invoking the member function.",
            "Calling a parent class constructor uses `ClassName(args)` in a derived constructor's initializer list in C++, or `super()` in Java.",
            "`this` has no relation to linked list structures; it simply points to the current object."
          ]
        },
        {
          question: "In Java, which of the following correctly describes method overriding?",
          options: [
            "Defining two methods with the same name but different parameters in the same class",
            "A subclass provides a specific implementation for a method already defined in its superclass, with the same signature",
            "Calling a parent method using the super keyword",
            "Defining a method with a different return type in the subclass"
          ],
          correct: 1,
          explanation: "Method overriding occurs when a subclass defines a method with the exact same name, parameter types, and return type as a method in its superclass. The overriding method replaces the parent's version for that subclass. At runtime, the JVM uses the actual object type (not the reference type) to call the correct version — this is Dynamic Method Dispatch.",
          optionExplanations: [
            "Defining two methods with the same name but different parameters describes method overloading, not overriding.",
            "Correct. Overriding requires the same method signature in both the superclass and subclass.",
            "Calling `super.method()` invokes the parent's method; it is not overriding itself.",
            "Changing the return type without matching the parent's signature is a compile error (not a valid override) in Java."
          ]
        },
        {
          question: "Function overloading in Java can be achieved by changing which of the following?",
          options: [
            "The return type of the function only",
            "The access modifier of the function only",
            "The number or types of parameters",
            "The name of the function"
          ],
          correct: 2,
          explanation: "Java method overloading requires that overloaded methods have the same name but differ in their parameter lists — either in the number of parameters or the types of parameters. Changing only the return type is NOT sufficient for overloading and will cause a compile error if the parameter lists are identical.",
          optionExplanations: [
            "Changing only the return type with the same parameter list is a compile error, not valid overloading.",
            "Changing only the access modifier does not create an overloaded method.",
            "Correct. Overloading requires different parameter lists — different count, types, or order of parameters.",
            "Changing the function name creates a new, different function, not an overloaded one."
          ]
        },
        {
          question: "In Java's runtime polymorphism, if an Animal reference `b` holds a Dog object and both Animal and Dog define `move()`, which version of `move()` is called by `b.move()`?",
          options: [
            "Animal's move() because b is declared as Animal type",
            "Dog's move() because the actual runtime object is Dog",
            "Both versions are called sequentially",
            "A compile error occurs because the types don't match"
          ],
          correct: 1,
          explanation: "This is the classic runtime polymorphism (upcasting) scenario in Java. At compile time, the reference type (Animal) is checked to ensure the method exists. At runtime, the JVM uses the actual object type (Dog) to dispatch the call — so `b.move()` calls Dog's `move()`. This is Dynamic Method Dispatch.",
          optionExplanations: [
            "The declared type (Animal) is used only at compile time for type checking; at runtime, the actual type (Dog) is used.",
            "Correct. The JVM dispatches `b.move()` to Dog's version because the actual object is a Dog at runtime.",
            "Only one version is called — the one matching the runtime object type.",
            "No compile error occurs; assigning a Dog to an Animal reference is valid (upcasting) in Java."
          ]
        },
        {
          question: "Constructor overloading is an example of which type of polymorphism?",
          options: [
            "Runtime polymorphism",
            "Dynamic polymorphism",
            "Compile-time polymorphism",
            "Virtual polymorphism"
          ],
          correct: 2,
          explanation: "Constructor overloading — having multiple constructors with different parameter lists — is resolved at compile time, making it an example of compile-time (static) polymorphism. The compiler selects the appropriate constructor based on the arguments provided when the object is created.",
          optionExplanations: [
            "Runtime polymorphism involves virtual functions and is resolved during execution, not at compile time.",
            "Dynamic polymorphism is another name for runtime polymorphism — same issue as option A.",
            "Correct. Constructor overloading is compile-time polymorphism — the compiler resolves which constructor to use.",
            "'Virtual polymorphism' is not a standard OOP term."
          ]
        },
        {
          question: "Which of the following is true about the `this` pointer in the context of resolving variable shadowing?",
          options: [
            "It is used to access global variables from within a function",
            "It is used to differentiate between a member variable and a local variable with the same name",
            "It is used to call the parent class method",
            "It is used to create new objects within a method"
          ],
          correct: 1,
          explanation: "Variable shadowing occurs when a function parameter or local variable has the same name as a class member variable. `this->name` refers to the member variable, while `name` alone refers to the local/parameter. For example: `this->name = name;` sets the member using the parameter passed to the function.",
          optionExplanations: [
            "`this` refers to the current object, not global variables.",
            "Correct. `this->memberVar = localVar` resolves the ambiguity when they share the same name.",
            "To call a parent class method, you use the parent class name with scope resolution in C++, or `super` in Java.",
            "`this` is a pointer to the current object; it does not create new objects."
          ]
        },
        {
          question: "In C++, to overload the `+` operator for a class Complex, which function signature is correct?",
          options: [
            "Complex operator+(Complex c1, Complex c2)",
            "Complex + operator(Complex c)",
            "Complex operator+(Complex c)",
            "operator Complex+(Complex c)"
          ],
          correct: 2,
          explanation: "In C++, a binary operator overloaded as a member function takes one argument (the right-hand operand). The left-hand operand is the implicit object (`this`). The syntax is: `ReturnType operator+(RightOperand);`. For binary operators as member functions, only one explicit argument is needed.",
          optionExplanations: [
            "Two explicit parameters are used when overloading as a friend/non-member function, not as a member function.",
            "The keyword `operator` must precede the operator symbol; this syntax is incorrect.",
            "Correct. `Complex operator+(Complex c)` correctly overloads + as a member function with one explicit argument.",
            "The syntax is `operator+` not `operator Complex+`; the return type comes before `operator`."
          ]
        },
        {
          question: "Which of the following best describes 'upcasting' in Java?",
          options: [
            "Explicitly casting a subclass object to a superclass reference",
            "Converting a primitive type to its wrapper class",
            "Calling a method with more specific parameters than declared",
            "Promoting an integer to a floating-point number"
          ],
          correct: 0,
          explanation: "Upcasting in Java is assigning a subclass object to a superclass reference, e.g., `Animal b = new Dog();`. This is done implicitly (no explicit cast needed). The reference type is Animal, but the object type is Dog. This enables runtime polymorphism — method calls are dispatched based on the actual object type (Dog).",
          optionExplanations: [
            "Correct. Upcasting is assigning a subclass object to a superclass reference — enabling runtime polymorphism.",
            "Converting a primitive to its wrapper class (e.g., int to Integer) is called autoboxing, not upcasting.",
            "Calling methods with more specific parameters is related to overloading, not upcasting.",
            "Promoting an integer to float is type widening/promotion in arithmetic, not object upcasting."
          ]
        },
        {
          question: "In a Student Management System using method overloading in Java, three `calculateGrade()` methods are defined — one taking a percentage, one a letter, one a GPA. This is possible because:",
          options: [
            "Java allows methods to have different access modifiers with the same name",
            "Java allows multiple methods with the same name provided they have different parameter types or counts",
            "Java automatically selects the method with the smallest number of parameters",
            "Java uses reflection to determine which method to call at runtime"
          ],
          correct: 1,
          explanation: "Java's method overloading allows defining multiple methods with the same name in the same class, as long as their parameter lists differ. In this case, one takes a double (percentage), one takes a char/String (letter grade), and one takes a float (GPA) — three distinct parameter types, making overloading valid.",
          optionExplanations: [
            "Different access modifiers with the same name and same parameters would be a compile error, not overloading.",
            "Correct. Overloading requires differing parameter types or counts — all three calculateGrade() methods qualify.",
            "Java does not automatically select the smallest-parameter method; it selects based on the call's argument types.",
            "Method overloading is resolved at compile time, not at runtime via reflection."
          ]
        },
        {
          question: "Which of the following about polymorphism in C++ is correct?",
          options: [
            "C++ supports only compile-time polymorphism",
            "C++ supports only runtime polymorphism via virtual functions",
            "C++ supports both compile-time polymorphism (overloading) and runtime polymorphism (overriding with virtual)",
            "C++ does not support polymorphism natively"
          ],
          correct: 2,
          explanation: "C++ supports both types of polymorphism: (1) Compile-time (static) polymorphism via function overloading and operator overloading, and (2) Runtime (dynamic) polymorphism via function overriding with virtual functions. Both are core features of C++ and used extensively in OOP design.",
          optionExplanations: [
            "C++ supports both compile-time and runtime polymorphism, not just compile-time.",
            "C++ supports both, not only runtime polymorphism.",
            "Correct. C++ fully supports both compile-time polymorphism (overloading) and runtime polymorphism (virtual overriding).",
            "C++ fully supports polymorphism — it is one of its central OOP features."
          ]
        },
        {
          question: "What will happen in C++ if a derived class overrides a non-virtual function of the base class, and you call it through a base class pointer?",
          options: [
            "The derived class's version will be called (late binding)",
            "The base class's version will be called (early binding)",
            "A compile error will occur because non-virtual functions cannot be overridden",
            "The program will crash at runtime"
          ],
          correct: 1,
          explanation: "Without the `virtual` keyword, C++ uses early (static) binding — the function call is resolved at compile time based on the pointer's declared type (base class), not the actual runtime object type. So even if the pointer holds a derived class object, the base class version of the non-virtual function is called.",
          optionExplanations: [
            "Late binding (calling derived class version) requires the `virtual` keyword in the base class declaration.",
            "Correct. Without `virtual`, C++ uses early binding — base class version is called based on pointer type.",
            "Non-virtual functions can technically be 'overridden' (hidden) in derived classes — it just won't use polymorphism.",
            "No crash occurs; it simply calls the base class version due to early binding."
          ]
        }
      ]
    },
    {
      name: "Unit 5: Encapsulation, Abstraction & Virtual Functions",
      questions: [
        {
          question: "What is the difference between encapsulation and abstraction?",
          options: [
            "Encapsulation is about inheritance; abstraction is about polymorphism",
            "Encapsulation bundles data and methods together and hides internal details; abstraction exposes only essential functionality to the user",
            "Encapsulation is a Java concept; abstraction is a C++ concept",
            "Encapsulation and abstraction are identical OOP concepts with different names"
          ],
          correct: 1,
          explanation: "Encapsulation bundles member data and functions inside a class (like a capsule) and controls access via access specifiers — its focus is on data hiding. Abstraction hides the implementation details and shows only the essential interface to the user — its focus is on reducing complexity. Both work together but serve different purposes.",
          optionExplanations: [
            "Encapsulation is not about inheritance, and abstraction is not about polymorphism.",
            "Correct. Encapsulation = bundling + data hiding. Abstraction = exposing only essential interface, hiding implementation.",
            "Both encapsulation and abstraction are concepts found in C++, Java, and all OOP languages.",
            "They are related but distinct concepts — encapsulation is about packaging, abstraction is about interface."
          ]
        },
        {
          question: "What is a virtual function in C++?",
          options: [
            "A function with no body that must be defined in every derived class",
            "A function declared in the base class that can be overridden in derived classes and is called via base class pointers at runtime",
            "A static function shared by all objects of a class",
            "A function that overloads an operator"
          ],
          correct: 1,
          explanation: "A virtual function is declared in the base class with the `virtual` keyword. Its purpose is to enable runtime polymorphism: when called through a base class pointer or reference, the correct overridden version in the derived class is invoked at runtime (late binding). Virtual functions must be members of a class and cannot be static.",
          optionExplanations: [
            "A function with no body that must be defined in derived classes is a pure virtual function (= 0), not just a virtual function.",
            "Correct. A virtual function enables runtime polymorphism — called via base pointer, dispatches to derived version.",
            "A static function is shared by all objects but is not related to virtual functions.",
            "Operator overloading functions are not virtual functions."
          ]
        },
        {
          question: "What is a pure virtual function in C++, and what type of class must contain it?",
          options: [
            "A function with an empty body `{}` in the base class; a concrete class",
            "A virtual function declared with `= 0` that has no definition; must be in an abstract base class",
            "A function that can only be called from derived classes; a sealed class",
            "A const virtual function that cannot modify data; an interface class"
          ],
          correct: 1,
          explanation: "A pure virtual function is declared with `= 0` in the base class (e.g., `virtual void show() = 0;`) and has no definition. A class containing at least one pure virtual function is an abstract base class (ABC) and cannot be instantiated. Derived classes must override all pure virtual functions to be instantiated.",
          optionExplanations: [
            "An empty body `{}` makes it a normal virtual function with an empty implementation, not a pure virtual function.",
            "Correct. `virtual void func() = 0;` is a pure virtual function. A class with it becomes an abstract base class.",
            "No special 'sealed class' concept applies; the class is called an abstract base class.",
            "const and pure virtual are different concepts; an interface-like class in C++ is an abstract class."
          ]
        },
        {
          question: "Which statement about abstract classes in Java is INCORRECT?",
          options: [
            "An abstract class can have both abstract and non-abstract methods",
            "An abstract class cannot be instantiated directly",
            "An abstract class is declared with the `abstract` keyword",
            "A class must be declared abstract if it has no constructors"
          ],
          correct: 3,
          explanation: "Constructors have no bearing on whether a class needs to be abstract. A class is declared abstract if it contains at least one abstract method (or if you choose to make it abstract for design purposes). Every class in Java can have a constructor, regardless of whether it is abstract. The other three options are correct facts about abstract classes.",
          optionExplanations: [
            "This is correct — an abstract class can mix abstract (no body) and concrete (with body) methods.",
            "This is correct — you cannot do `new AbstractClass()` directly; a subclass must be instantiated.",
            "This is correct — the `abstract` keyword declares an abstract class in Java.",
            "Incorrect. Absence of constructors does not make a class abstract. Constructors are independent of abstractness."
          ]
        },
        {
          question: "Which of the following correctly implements encapsulation in Java for a private age field?",
          options: [
            "public int age; with a public display() method",
            "private int age; with public getAge() and setAge(int age) methods",
            "protected int age; with no getter or setter",
            "static int age; accessible from the class name"
          ],
          correct: 1,
          explanation: "Proper encapsulation requires: (1) making the field private to prevent direct external access, and (2) providing public getter (`getAge()`) and setter (`setAge(int age)`) methods for controlled access and validation. This pattern protects data integrity while still allowing interaction.",
          optionExplanations: [
            "Making age public defeats encapsulation — any code can read or modify it directly.",
            "Correct. `private int age` with `public getAge()` and `setAge()` is the standard encapsulation pattern.",
            "Protected provides only partial protection — derived classes can still access it directly.",
            "Static makes age a class-level variable; it does not provide encapsulation."
          ]
        },
        {
          question: "A virtual function cannot be which of the following in C++?",
          options: [
            "A member function of a class",
            "A function accessed through object pointers",
            "A static member function",
            "A function defined in the base class"
          ],
          correct: 2,
          explanation: "Virtual functions are inherently tied to object instances (they use the vtable pointer of the object to dispatch calls at runtime). Static member functions are not associated with any particular object instance — they belong to the class, not the object. Therefore, static member functions cannot be virtual.",
          optionExplanations: [
            "Virtual functions ARE member functions of a class — that is a basic requirement.",
            "Virtual functions ARE accessed through object pointers — that is how runtime dispatch works.",
            "Correct. Virtual functions CANNOT be static because static functions belong to the class, not instances.",
            "Virtual functions ARE defined in the base class (with the `virtual` keyword) — that is required."
          ]
        },
        {
          question: "In Java, there are 4 access modifiers. Which of the following is the Java-specific access modifier NOT found in C++?",
          options: [
            "private",
            "protected",
            "default (package-private)",
            "public"
          ],
          correct: 2,
          explanation: "Java has four access modifiers: private, default (no keyword — package-level), protected, and public. The 'default' modifier (where no keyword is written) gives package-level access — accessible within the same package but not outside. C++ has no concept of packages, so this modifier has no C++ equivalent.",
          optionExplanations: [
            "private exists in both C++ and Java with the same meaning.",
            "protected exists in both C++ and Java (with slightly different behavior regarding packages in Java).",
            "Correct. The 'default' (package-private) modifier is Java-specific; C++ has no package concept.",
            "public exists in both C++ and Java with the same meaning."
          ]
        },
        {
          question: "What happens if you try to instantiate an abstract class in C++ or Java?",
          options: [
            "The object is created with default values for the pure virtual methods",
            "A runtime error is thrown when the pure virtual method is called",
            "A compile-time error occurs — abstract classes cannot be instantiated",
            "The program runs but ignores calls to the abstract methods"
          ],
          correct: 2,
          explanation: "In both C++ and Java, attempting to instantiate an abstract class (or a class with pure virtual functions) results in a compile-time error. The compiler enforces this constraint because an abstract class is incomplete — it has undefined methods that must be implemented by derived/subclasses.",
          optionExplanations: [
            "Default values cannot substitute for unimplemented pure virtual methods; the compiler rejects instantiation.",
            "The error occurs at compile time, not at runtime when a method is called.",
            "Correct. Attempting to create an instance of an abstract class causes a compile-time error in both C++ and Java.",
            "The compiler does not allow instantiation to occur; it errors out before runtime."
          ]
        },
        {
          question: "In C++, by default, all members of a class (not struct) are:",
          options: [
            "public",
            "protected",
            "private",
            "static"
          ],
          correct: 2,
          explanation: "In C++, class members are private by default (unlike struct, where they are public by default). This means that if you do not specify an access modifier, member data and member functions of a class are accessible only within the class itself. This default supports data hiding and encapsulation.",
          optionExplanations: [
            "Members of a C++ class are NOT public by default. Public is the default for struct.",
            "Protected is not the default for class members in C++.",
            "Correct. C++ class members are private by default, unlike struct members which are public by default.",
            "Static is not an access modifier and is not the default for class members."
          ]
        },
        {
          question: "Which of the following correctly describes the role of getter and setter methods in encapsulation?",
          options: [
            "Getters initialize private fields; setters display them",
            "Getters read private fields; setters modify private fields with optional validation",
            "Both getters and setters are used only for static fields",
            "Getters are public constructors; setters are public destructors"
          ],
          correct: 1,
          explanation: "In encapsulation, getter methods provide controlled read access to private fields (e.g., `getAge()` returns age), and setter methods provide controlled write access with optional validation (e.g., `setAge(int age)` can check `if age > 0` before setting). This pattern protects data integrity.",
          optionExplanations: [
            "Initialization is done by constructors; getters read data, they don't initialize it.",
            "Correct. Getters return the value of private fields; setters set them with possible validation logic.",
            "Getters and setters are used for instance fields; static fields use class-level access.",
            "Getters and setters are regular methods, not constructors or destructors."
          ]
        },
        {
          question: "A class containing at least one pure virtual function in C++ is called:",
          options: [
            "An interface class",
            "A template class",
            "An abstract base class (ABC)",
            "A virtual class"
          ],
          correct: 2,
          explanation: "In C++, when a class contains one or more pure virtual functions (`= 0`), it becomes an Abstract Base Class (ABC). The ABC defines the interface (what derived classes must implement) without providing implementation. It cannot be instantiated, but serves as a blueprint for derived classes.",
          optionExplanations: [
            "While C++ ABCs play a similar role to Java interfaces, the C++ term is 'abstract base class', not 'interface class'.",
            "A template class is a class using template parameters for type generics — unrelated to pure virtual functions.",
            "Correct. A class with at least one pure virtual function is an Abstract Base Class (ABC) in C++.",
            "'Virtual class' is not the standard C++ terminology; the correct term is abstract base class."
          ]
        },
        {
          question: "In the Bank Account encapsulation case study, private fields like accountNumber and balance are protected from direct external modification. This is best justified because:",
          options: [
            "Private fields use less memory than public fields",
            "Direct modification could bypass validation (e.g., setting a negative balance), compromising data integrity",
            "Private fields are inherited by all subclasses automatically",
            "Private fields improve program execution speed"
          ],
          correct: 1,
          explanation: "Making sensitive fields like balance private ensures that all modifications go through setter methods that include validation logic (e.g., checking balance won't go negative, withdrawal won't exceed available balance). Direct public access would allow setting `balance = -1000` without any checks, undermining correctness.",
          optionExplanations: [
            "Access modifiers have no effect on memory usage.",
            "Correct. Private + setters enforce validation, preventing invalid states like negative balances.",
            "Private fields are NOT inherited (accessible) by subclasses — that is the point of private.",
            "Access modifiers have no direct effect on runtime execution speed."
          ]
        },
        {
          question: "Which of the following is true about virtual constructors in C++?",
          options: [
            "Virtual constructors are allowed and recommended for base classes",
            "Virtual constructors can only be used in abstract base classes",
            "Virtual constructors do not exist in C++; constructors cannot be declared virtual",
            "Virtual constructors are the same as copy constructors"
          ],
          correct: 2,
          explanation: "C++ does not allow virtual constructors. The reason is that virtual dispatch requires an object to already exist (with a valid vtable pointer), but a constructor is called during object creation — before the vtable is set up. Therefore, constructors cannot be virtual in C++.",
          optionExplanations: [
            "Virtual constructors are not allowed in C++ — this is a fundamental constraint.",
            "No form of virtual constructor exists in C++, regardless of the class type.",
            "Correct. Virtual constructors do NOT exist in C++; the concept is logically inconsistent with how construction works.",
            "Copy constructors copy data from another object; they are not virtual and unrelated to this concept."
          ]
        },
        {
          question: "What does data abstraction accomplish from the perspective of a user interacting with a class?",
          options: [
            "It forces the user to understand the internal algorithm before using any method",
            "It allows the user to interact with methods without knowing their internal implementation",
            "It automatically generates documentation for all methods",
            "It prevents any data from being accessed outside the class"
          ],
          correct: 1,
          explanation: "Data abstraction hides implementation complexity from the user. A user can call `calculateArea()` without knowing whether it uses Heron's formula or base×height. They only need to know what the method does (the interface), not how it does it (the implementation). This is the essence of abstraction.",
          optionExplanations: [
            "Abstraction is the opposite — it shields users from needing to understand internals.",
            "Correct. Abstraction exposes what methods do (interface), hiding how they do it (implementation).",
            "Documentation generation is the job of tools like Javadoc, not abstraction.",
            "Abstraction is not about preventing all external access; some data/methods are intentionally exposed as the interface."
          ]
        },
        {
          question: "In C++, what happens if a derived class does NOT override a pure virtual function of its abstract base class?",
          options: [
            "The derived class uses the base class's default implementation",
            "The derived class itself becomes abstract and cannot be instantiated",
            "A runtime error is thrown when the function is called",
            "The compiler ignores the pure virtual function requirement"
          ],
          correct: 1,
          explanation: "If a derived class fails to provide an implementation for a pure virtual function inherited from an abstract base class, the derived class itself becomes abstract (it still has an unimplemented pure virtual function). Attempting to instantiate it will result in a compile-time error.",
          optionExplanations: [
            "Pure virtual functions have no base class default implementation — that is what makes them pure.",
            "Correct. An unimplemented pure virtual function makes the derived class abstract too.",
            "The error occurs at compile time (instantiation attempt), not at runtime.",
            "The compiler strictly enforces pure virtual function requirements; it does not ignore them."
          ]
        }
      ]
    },
    {
      name: "Unit 6: Exception Handling & File I/O",
      questions: [
        {
          question: "In Java, which of the following is a checked exception?",
          options: [
            "ArithmeticException",
            "NullPointerException",
            "IOException",
            "ArrayIndexOutOfBoundsException"
          ],
          correct: 2,
          explanation: "Checked exceptions in Java are those that the compiler requires you to handle or declare using `throws`. IOException is a checked exception because file operations can fail in predictable ways. Unchecked exceptions (ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException) extend RuntimeException and do not require explicit handling.",
          optionExplanations: [
            "ArithmeticException (e.g., division by zero) is an unchecked exception extending RuntimeException.",
            "NullPointerException is an unchecked runtime exception — the compiler does not force you to catch it.",
            "Correct. IOException is a checked exception — the compiler forces you to catch or declare it.",
            "ArrayIndexOutOfBoundsException is an unchecked runtime exception."
          ]
        },
        {
          question: "In Java exception handling, what is the purpose of the `finally` block?",
          options: [
            "To catch exceptions not handled by any catch block",
            "To execute code that must always run, regardless of whether an exception occurred",
            "To re-throw a caught exception to the calling method",
            "To define a new custom exception type"
          ],
          correct: 1,
          explanation: "The `finally` block contains code that ALWAYS executes, whether or not an exception was thrown or caught. It is typically used for cleanup operations like closing file streams, database connections, or releasing resources. Even if a `return` statement is executed in the `try` block, `finally` still runs.",
          optionExplanations: [
            "Uncaught exceptions propagate up the call stack; the `finally` block is not for catching them.",
            "Correct. `finally` runs unconditionally — with or without exceptions — ideal for cleanup code.",
            "Re-throwing an exception uses `throw` inside a catch block; `finally` does not re-throw.",
            "Custom exception types are defined by extending Exception; `finally` is not for this."
          ]
        },
        {
          question: "What is the correct C++ syntax to open a file for BOTH reading and writing?",
          options: [
            "std::ifstream file(\"data.txt\");",
            "std::ofstream file(\"data.txt\");",
            "std::fstream file(\"data.txt\", std::ios::in | std::ios::out);",
            "std::ofstream file(\"data.txt\", std::ios::in);"
          ],
          correct: 2,
          explanation: "In C++, `std::fstream` supports both reading and writing. To open a file for both, you specify both `std::ios::in` (input) and `std::ios::out` (output) flags using the bitwise OR operator `|`. `ifstream` is read-only, `ofstream` is write-only.",
          optionExplanations: [
            "`std::ifstream` opens a file for reading only — it cannot write to the file.",
            "`std::ofstream` opens a file for writing only — it cannot read from the file.",
            "Correct. `std::fstream` with `ios::in | ios::out` enables both reading and writing.",
            "`std::ofstream` is for output only; specifying `ios::in` with it does not enable true reading."
          ]
        },
        {
          question: "Which block in Java's try-catch structure is guaranteed to execute even if a return statement is reached inside the try block?",
          options: [
            "The catch block",
            "The throws block",
            "The finally block",
            "The static block"
          ],
          correct: 2,
          explanation: "The `finally` block in Java executes unconditionally — even after a `return` statement in the `try` block. The `return` value is computed first, then `finally` runs, and then the method actually returns. This guarantees resource cleanup code (closing files, etc.) always runs.",
          optionExplanations: [
            "The catch block only executes if an exception is thrown — not guaranteed otherwise.",
            "`throws` is a declaration keyword, not a block of code.",
            "Correct. The `finally` block always executes, even after a `return` — it is the cleanup guarantee.",
            "A static block runs once when the class is loaded; it is unrelated to exception handling."
          ]
        },
        {
          question: "Which of the following about Java's exception hierarchy is correct?",
          options: [
            "All exceptions extend RuntimeException",
            "Checked exceptions extend RuntimeException; unchecked extend Exception",
            "RuntimeException and Error are both subclasses of Throwable; checked exceptions extend Exception but not RuntimeException",
            "IOException extends RuntimeException"
          ],
          correct: 2,
          explanation: "Java's exception hierarchy: Throwable is at the top. It has two subclasses: Error (JVM errors, not meant to be caught) and Exception. Exception has a subclass RuntimeException. Checked exceptions extend Exception but NOT RuntimeException. Unchecked exceptions extend RuntimeException. IOException is a checked exception — it extends Exception directly.",
          optionExplanations: [
            "Not all exceptions extend RuntimeException — checked exceptions extend Exception directly.",
            "This is backwards; unchecked exceptions extend RuntimeException, not the other way.",
            "Correct. Throwable → Exception → RuntimeException (unchecked); Exception directly (checked).",
            "IOException is a checked exception; it extends Exception, NOT RuntimeException."
          ]
        },
        {
          question: "In Java, how does the `synchronized` keyword affect a method like `display(String message)`?",
          options: [
            "It allows multiple threads to execute the method simultaneously",
            "It prevents any thread from ever executing the method more than once",
            "It ensures only one thread can execute the method at a time, blocking others until it completes",
            "It makes the method execute asynchronously in a separate thread"
          ],
          correct: 2,
          explanation: "The `synchronized` keyword in Java acquires a lock (monitor) on the object before executing the method. Only one thread can hold the lock at a time. Other threads attempting to call the synchronized method must wait (block) until the current thread releases the lock. This prevents race conditions in concurrent execution.",
          optionExplanations: [
            "Synchronized does the opposite — it prevents simultaneous execution by serializing access.",
            "Synchronized limits concurrent access to one thread at a time but does not limit total invocations.",
            "Correct. `synchronized` ensures mutual exclusion — only one thread runs the method at any given time.",
            "`synchronized` does not make execution asynchronous; async execution uses threads/futures."
          ]
        },
        {
          question: "In C++ file I/O, `std::ifstream` is used for which purpose?",
          options: [
            "Writing output to a file",
            "Reading input from a file",
            "Both reading and writing a file",
            "Appending data to the end of a file"
          ],
          correct: 1,
          explanation: "`std::ifstream` stands for Input File Stream — it is used for reading data from files. `std::ofstream` (Output File Stream) is for writing to files. `std::fstream` supports both. Using `std::ios::app` with ofstream enables appending to a file.",
          optionExplanations: [
            "Writing to a file uses `std::ofstream`, not `std::ifstream`.",
            "Correct. `std::ifstream` is the Input File Stream, used specifically for reading from files.",
            "For both reading and writing, use `std::fstream` with appropriate flags.",
            "Appending uses `std::ofstream` with `std::ios::app` flag, not `std::ifstream`."
          ]
        },
        {
          question: "What is the difference between `throw` and `throws` in Java?",
          options: [
            "`throw` declares the exception in a method signature; `throws` actually throws the exception",
            "`throw` is used to explicitly throw an exception object; `throws` declares that a method may throw a specific exception",
            "They are interchangeable synonyms in Java",
            "`throw` handles exceptions; `throws` propagates them"
          ],
          correct: 1,
          explanation: "`throw` is used inside method bodies to explicitly throw an exception object (e.g., `throw new IOException(\"File not found\")`). `throws` is used in method signatures to declare that the method may throw certain checked exceptions (e.g., `void readFile() throws IOException`), warning callers to handle it.",
          optionExplanations: [
            "This is the reverse of the correct meanings.",
            "Correct. `throw` = actually throw an exception; `throws` = declare the exception in the method signature.",
            "They are not interchangeable — `throw` is a statement; `throws` is a method declaration keyword.",
            "Neither 'handles' exceptions; `throw` throws and `throws` declares."
          ]
        },
        {
          question: "In Java's multithreading, what is the correct sequence for a thread's lifecycle?",
          options: [
            "New → Running → Blocked → Terminated → Runnable",
            "New → Runnable → Running → Blocked/Waiting → Terminated",
            "Running → New → Runnable → Blocked → Terminated",
            "New → Blocked → Runnable → Running → Terminated"
          ],
          correct: 1,
          explanation: "Java thread lifecycle: (1) New — created but not started; (2) Runnable — start() called, waiting for CPU; (3) Running — actively executing run(); (4) Blocked/Waiting — waiting for a lock, sleep, or I/O; (5) Terminated — run() completed or exception occurred. A thread transitions directly from Running to Terminated when run() completes.",
          optionExplanations: [
            "Terminated cannot come before Runnable — the lifecycle is sequential from New to Terminated.",
            "Correct. New → Runnable → Running → (Blocked/Waiting) → Terminated is the standard Java thread lifecycle.",
            "Running cannot precede New — the thread must be created first.",
            "A New thread does not go to Blocked first; it goes to Runnable after start() is called."
          ]
        },
        {
          question: "Which scenario directly causes a Java thread to transition from Running to Terminated?",
          options: [
            "The join() method is called on the thread",
            "The thread's run() method completes execution without exceptions",
            "The thread enters a synchronized block with lock contention",
            "The sleep() method's timer expires"
          ],
          correct: 1,
          explanation: "A thread transitions directly from Running to Terminated when its `run()` method finishes executing completely — either by reaching the end of the method or by throwing an uncaught exception. `join()` blocks the calling thread (not the target thread). Synchronized contention moves to Blocked. `sleep()` expiry returns the thread to Runnable.",
          optionExplanations: [
            "`join()` blocks the thread that calls it (waiting for another thread to finish), not the joined thread itself.",
            "Correct. Completing `run()` causes a direct Running → Terminated transition.",
            "Lock contention moves the thread from Running to Blocked, not Terminated.",
            "When `sleep()` expires, the thread moves from Waiting to Runnable, not Terminated."
          ]
        },
        {
          question: "In C++, what does `std::async` with `std::launch::async` policy do?",
          options: [
            "Defers execution until the result is explicitly requested",
            "Executes the function in the same thread immediately",
            "Launches the function in a new thread, allowing the caller to continue in parallel",
            "Creates a future that blocks the main thread until the computation ends"
          ],
          correct: 2,
          explanation: "`std::async` with `std::launch::async` launches the provided function in a separate thread immediately, allowing the main thread to continue executing. The result can be retrieved later via `.get()` on the returned `std::future`. With `std::launch::deferred`, execution is postponed until `.get()` is called.",
          optionExplanations: [
            "Deferred execution until `.get()` is called describes the `std::launch::deferred` policy.",
            "Executing in the same thread immediately would not be asynchronous — it describes synchronous execution.",
            "Correct. `std::launch::async` runs the function in a new thread, enabling parallel computation.",
            "The future only blocks when `.get()` is explicitly called, not automatically."
          ]
        },
        {
          question: "In the synchronized Java program with Thread-1 and Thread-2 both accessing a SharedResource's `display()` method, what is the expected output behavior?",
          options: [
            "Thread-1 and Thread-2 interleave their outputs arbitrarily",
            "Thread-2 executes first because it has higher priority",
            "Thread-1 completes its full execution of display() before Thread-2 starts",
            "Both threads execute display() simultaneously in parallel"
          ],
          correct: 2,
          explanation: "The `synchronized` keyword on `display()` ensures mutual exclusion. Only one thread can execute `display()` at a time. Whichever thread acquires the lock first (typically Thread-1 as it starts first) will complete all 3 loop iterations before Thread-2 can begin. The output will be fully sequential — all of one thread's output, then all of the other's.",
          optionExplanations: [
            "Synchronized prevents interleaving — without it, interleaving would occur, but `synchronized` serializes access.",
            "Java threads don't have automatic priority ordering; Thread-1 typically starts first.",
            "Correct. The `synchronized` lock ensures the first thread to acquire it runs fully before the second begins.",
            "Parallel simultaneous execution would only happen without `synchronized` — the keyword prevents this."
          ]
        },
        {
          question: "In the Observer pattern implementation with EarthquakeMonitor, what output is produced when magnitudes 4.2 and 5.8 are set?",
          options: [
            "Alert for 4.2 and alert for 5.8 are both printed",
            "Only the alert for 5.8 is printed because the condition `magnitude > 5.0` is only satisfied then",
            "No output is produced because the observer must be explicitly triggered",
            "A runtime error occurs due to a null reference in the observer list"
          ],
          correct: 1,
          explanation: "The EarthquakeMonitor's `update()` method only prints an alert when `magnitude > 5.0`. For magnitude 4.2, the condition is false (4.2 is not > 5.0), so nothing is printed. For magnitude 5.8, the condition is true, so the alert is printed. Only one alert message is generated.",
          optionExplanations: [
            "Only 5.8 triggers the alert; 4.2 does not satisfy `magnitude > 5.0`.",
            "Correct. Only 5.8 satisfies the `> 5.0` condition, so only one alert is printed.",
            "The observer is correctly attached via `attach()` and is triggered by `setMagnitude()`.",
            "The observer is properly attached; there is no null reference issue in the given code."
          ]
        },
        {
          question: "What is the purpose of using a Runnable interface in Java instead of extending Thread?",
          options: [
            "Runnable provides faster thread execution than Thread",
            "Runnable allows the class to extend another class simultaneously, since Java doesn't support multiple class inheritance",
            "Runnable threads automatically handle synchronization",
            "Runnable threads have higher priority than Thread-based threads"
          ],
          correct: 1,
          explanation: "Since Java doesn't support multiple class inheritance, extending Thread limits a class — it can't extend any other class. Implementing Runnable (an interface) allows the class to still extend another class while also being usable as a thread. This promotes better design — separating the task (Runnable) from the thread mechanism (Thread).",
          optionExplanations: [
            "Runnable vs Thread does not inherently affect execution speed.",
            "Correct. Implementing Runnable frees the class to extend another class, avoiding the single-inheritance limitation.",
            "Runnable does not automatically handle synchronization; synchronized methods/blocks must be used explicitly.",
            "Both Runnable and Thread-based threads have the same default priority."
          ]
        },
        {
          question: "Which of the following correctly starts two threads in C++ using std::thread?",
          options: [
            "thread1.run(); thread2.run();",
            "thread1.start(); thread2.start();",
            "std::thread t1(func1); std::thread t2(func2); t1.join(); t2.join();",
            "thread1.execute(); thread2.execute();"
          ],
          correct: 2,
          explanation: "In C++, threads are created using `std::thread` and a function to run. The threads start automatically upon creation. `join()` must be called to wait for each thread to finish before the program exits (or before the thread object is destroyed). Not joining or detaching before destruction causes program termination.",
          optionExplanations: [
            "`run()` is not a method of `std::thread` in C++.",
            "`start()` is Java's method to begin a thread; C++ threads start automatically on construction.",
            "Correct. `std::thread t1(func1)` starts the thread immediately; `t1.join()` waits for it to finish.",
            "`execute()` is not a standard `std::thread` method in C++."
          ]
        }
      ]
    },
    {
      name: "Unit 7: Templates & Generics",
      questions: [
        {
          question: "What is the primary purpose of templates in C++?",
          options: [
            "To enforce runtime type safety by validating object types",
            "To create reusable code that can work with any data type",
            "To implement runtime polymorphism using virtual functions",
            "To overload operators for user-defined types"
          ],
          correct: 1,
          explanation: "Templates allow you to write code once and use it with any data type. For example, a `swap()` template function can swap integers, floats, strings, or any type without rewriting the function. The compiler generates type-specific code from the template at compile time (a form of compile-time polymorphism).",
          optionExplanations: [
            "Runtime type safety is enforced by other mechanisms (type checks, virtual dispatch); templates work at compile time.",
            "Correct. Templates create type-generic, reusable code — one template works for all compatible types.",
            "Runtime polymorphism uses virtual functions; templates are a compile-time (static) mechanism.",
            "Operator overloading is a separate feature; though templates can use overloaded operators, they serve different purposes."
          ]
        },
        {
          question: "Which of the following is the correct syntax for a template function in C++?",
          options: [
            "generic<T> T add(T a, T b) { return a + b; }",
            "template<typename T> T add(T a, T b) { return a + b; }",
            "function<T> T add(T a, T b) { return a + b; }",
            "template T add(T a, T b) { return a + b; }"
          ],
          correct: 1,
          explanation: "The correct C++ template syntax uses `template<typename T>` (or equivalently `template<class T>`) before the function declaration. This declares T as a type parameter. When called, the compiler deduces T from the argument types and generates the appropriate version automatically.",
          optionExplanations: [
            "`generic<T>` is Java/C# syntax, not C++ template syntax.",
            "Correct. `template<typename T>` is the standard C++ template function declaration.",
            "`function<T>` is not valid C++ template syntax.",
            "`template T` without angle brackets `<>` is invalid C++ syntax."
          ]
        },
        {
          question: "What is the difference between templates in C++ and generics in Java?",
          options: [
            "They are identical — templates and generics are alternative names for the same mechanism",
            "C++ templates generate type-specific code at compile time (code expansion); Java generics use type erasure at runtime",
            "Java generics generate type-specific bytecode; C++ templates use runtime type checking",
            "C++ templates only work with primitive types; Java generics work with all types"
          ],
          correct: 1,
          explanation: "C++ templates use code expansion: the compiler generates separate type-specific code for each instantiation (e.g., separate functions for int, double, etc.). Java generics use type erasure: generic type information is removed at compile time and replaced with Object, with casts inserted. This is a fundamental architectural difference.",
          optionExplanations: [
            "They serve similar purposes but have different underlying mechanisms — they are not identical.",
            "Correct. C++ templates → compile-time code expansion. Java generics → runtime type erasure.",
            "Java generics do NOT generate type-specific bytecode; they erase type info. C++ does not use runtime type checking for templates.",
            "C++ templates work with all types; Java generics primarily work with reference (object) types."
          ]
        },
        {
          question: "In Java Generics, what is a bounded type parameter? For example: `<T extends Number>`",
          options: [
            "A type parameter that can only be used with exactly the Number class",
            "A type parameter restricted to types that are subtypes of Number (Number or its subclasses)",
            "A type parameter bounded to primitive numeric types only",
            "A type parameter that defaults to Number when not specified"
          ],
          correct: 1,
          explanation: "A bounded type parameter `<T extends Number>` restricts T to the Number class and any of its subclasses (Integer, Double, Float, Long, etc.). This allows the generic method to use Number's methods (like `.doubleValue()`) on the parameter. Without the bound, T could be anything and you'd only have Object's methods.",
          optionExplanations: [
            "`extends Number` means Number OR any subclass; it is not limited to exactly Number.",
            "Correct. `<T extends Number>` allows Number and all its subclasses (Integer, Double, Float, etc.).",
            "Java generics cannot be bounded to primitive types; generics only work with reference (object) types.",
            "Generics have no default type parameter; if unspecified, the raw type is used (not recommended)."
          ]
        },
        {
          question: "In Python, which module is used to support type hints and generics similar to Java's generics?",
          options: [
            "from collections import generic",
            "from typing import TypeVar, List, Generic",
            "from types import Generic, Template",
            "import generics"
          ],
          correct: 1,
          explanation: "Python uses the `typing` module for type hints and generic support. `TypeVar` creates type variables (like T in C++/Java), `Generic` is used as a base class for generic classes, and `List[T]`, `Dict[K, V]` etc. enable typed collections. Python generics are primarily for type checkers (like mypy) and documentation, not runtime enforcement.",
          optionExplanations: [
            "`from collections import generic` is not valid Python syntax.",
            "Correct. `from typing import TypeVar, List, Generic` enables generics and type hints in Python.",
            "`from types import Generic` is not valid; types module does not contain Generic.",
            "`import generics` is not a Python standard library module."
          ]
        },
        {
          question: "What does a template class in C++ allow you to do that a regular class does not?",
          options: [
            "Inherit from multiple classes simultaneously",
            "Define a class that can hold and operate on different data types without code duplication",
            "Override virtual functions at compile time",
            "Access private members of other classes"
          ],
          correct: 1,
          explanation: "A template class (e.g., `template<typename T> class Stack`) allows creating a single class definition that works for any data type. For instance, `Stack<int>`, `Stack<double>`, and `Stack<string>` are all generated from the same template. Without templates, you'd need separate classes for each data type.",
          optionExplanations: [
            "Multiple inheritance is available for regular classes and is independent of templates.",
            "Correct. Template classes generalize a class definition to work with any type, eliminating code duplication.",
            "Virtual function overriding is unrelated to templates; it works the same in both.",
            "Templates don't affect access to private members; encapsulation rules still apply."
          ]
        },
        {
          question: "In Java Generics, wildcard types like `List<? extends Number>` are used for:",
          options: [
            "Declaring a list that can change its type parameter at runtime",
            "Accepting a list of Number or any of its subclasses as a method parameter",
            "Creating a list with exactly one element",
            "Restricting a list to only the Number class, not its subclasses"
          ],
          correct: 1,
          explanation: "The wildcard `?` in `List<? extends Number>` means 'a list of some unknown type that extends Number'. This is used in method parameters when you want to accept a List<Integer>, List<Double>, or any List of a Number subtype. It provides flexibility while maintaining type safety.",
          optionExplanations: [
            "Java generics' type parameters don't change at runtime; type erasure removes them.",
            "Correct. `List<? extends Number>` accepts any List whose element type is Number or a subtype.",
            "Wildcards have nothing to do with list size.",
            "`? extends Number` includes Number AND all subclasses — it is not limited to only Number."
          ]
        },
        {
          question: "A generic method in Java `public static <T> void printArray(T[] arr)` can:",
          options: [
            "Only print integer arrays",
            "Print arrays of any reference type (Integer, String, Double, etc.)",
            "Only print arrays of types that implement Comparable",
            "Print both primitive and reference type arrays"
          ],
          correct: 1,
          explanation: "The generic method `<T> void printArray(T[] arr)` accepts an array of any reference type. You can call it with `printArray(intArray)` (Integer[]) or `printArray(stringArray)` (String[]) — the compiler deduces T. Note: Java generics don't work with primitive types (int[], double[]), only their wrapper classes.",
          optionExplanations: [
            "The method works with any reference type, not just Integer.",
            "Correct. The generic parameter T allows any reference type array: String[], Double[], etc.",
            "No Comparable bound is specified, so it works with any reference type, not just Comparable ones.",
            "Java generics require reference types; primitive arrays (int[]) require autoboxing first."
          ]
        },
        {
          question: "In C++, template specialization allows you to:",
          options: [
            "Create templates that work only with one specific type",
            "Provide a specialized implementation of a template for a particular type",
            "Prevent templates from being instantiated with certain types",
            "Convert a template class into a regular class"
          ],
          correct: 1,
          explanation: "Template specialization in C++ lets you define a custom implementation of a template for a specific type. For example, a general `Pair<T, U>` template can have a specialized version for `Pair<char, char>` that behaves differently. The specialized version is used only when the template is instantiated with that specific type.",
          optionExplanations: [
            "A template that works only with one type would defeat the purpose of templates; specialization adds a specific variant.",
            "Correct. Specialization provides a type-specific custom implementation alongside the general template.",
            "Preventing instantiation for certain types uses `static_assert` or SFINAE, not specialization.",
            "Template specialization does not convert a template into a regular class; both exist simultaneously."
          ]
        },
        {
          question: "What is the key advantage of using the `typing` module with generics in Python compared to not using type hints?",
          options: [
            "Python with type hints runs significantly faster at runtime",
            "Type hints allow static analysis tools to detect type errors before runtime and improve code readability",
            "Type hints prevent runtime exceptions from ever occurring",
            "Type hints enable Python to use C++ style templates internally"
          ],
          correct: 1,
          explanation: "Python's type hints (via the `typing` module) are primarily for static analysis tools like mypy and IDEs. They improve code readability by documenting expected types and allow type checkers to catch type-related bugs before running the code. At runtime, Python does not enforce type hints — they are purely advisory.",
          optionExplanations: [
            "Type hints have minimal to no impact on runtime performance — Python doesn't enforce them at runtime.",
            "Correct. Type hints enable static analysis (mypy, IDE warnings) and improve code documentation and readability.",
            "Runtime exceptions can still occur; type hints are not enforced at runtime in standard Python.",
            "Python's generics use the `typing` module, which is Python-native, not C++ templates internally."
          ]
        },
        {
          question: "In C++, a template function `template<typename T> T maximum(T a, T b)` is called with `maximum(3, 4.5)`. What happens?",
          options: [
            "The function correctly returns 4.5 (the double value)",
            "The function returns 4 (the integer value by truncation)",
            "A compile error occurs because the two arguments have different types (T cannot be both int and double)",
            "The function converts both to float and returns 4.5"
          ],
          correct: 2,
          explanation: "When `maximum(3, 4.5)` is called, the compiler tries to deduce T from both arguments — but 3 is int and 4.5 is double. Since T must be a single type, the deduction fails and a compile error occurs. To fix this, you can explicitly specify the type: `maximum<double>(3, 4.5)`, or use two type parameters `<T1, T2>`.",
          optionExplanations: [
            "The compiler cannot automatically resolve the type conflict — it cannot deduce T from mismatched types.",
            "No implicit truncation occurs — the error is at type deduction, not arithmetic.",
            "Correct. With mismatched argument types, T cannot be deduced uniquely, causing a compile error.",
            "No automatic float conversion happens during template type deduction."
          ]
        },
        {
          question: "What does the `GCD` generic method in Java demonstrate about generics that regular methods cannot easily do?",
          options: [
            "It can compute GCD using only bitwise operations",
            "It can work with both Integer and Long inputs using a single method definition by leveraging the bounded type `<T extends Number>`",
            "It automatically selects the fastest GCD algorithm based on input size",
            "It computes GCD without requiring any mathematical operations"
          ],
          correct: 1,
          explanation: "A generic GCD method like `<T extends Number> long gcd(T a, T b)` can accept both Integer and Long (and any other Number subtype) using one method definition. Without generics, you'd need separate `gcdInt()` and `gcdLong()` methods. The bound ensures the method can call `.longValue()` to extract the numeric value.",
          optionExplanations: [
            "The algorithm used inside the method is independent of whether generics are used.",
            "Correct. Using `<T extends Number>`, the method works for Integer, Long, and other Number subtypes with one definition.",
            "Algorithm selection is not related to Java generics.",
            "GCD computation requires mathematical operations (modulo); generics don't remove that."
          ]
        },
        {
          question: "What is a template class with default parameters in C++? For example: `template<typename T = int> class Stack`",
          options: [
            "A template class that only accepts integer types",
            "A template class where T defaults to int if no type argument is provided",
            "A template class with a constructor that takes int parameters",
            "A template class that converts all types to int internally"
          ],
          correct: 1,
          explanation: "A template class with a default type parameter (`template<typename T = int>`) allows the class to be used as `Stack<>` (defaulting to int), `Stack<double>`, `Stack<string>`, etc. The default type is used when the programmer doesn't specify a type argument — similar to default function parameters.",
          optionExplanations: [
            "The default is int, but the template still accepts any type — `Stack<double>` is valid.",
            "Correct. `T = int` means that if no type is specified, T becomes int by default.",
            "A constructor taking int parameters is different from a template type defaulting to int.",
            "No type conversion to int occurs; the default type is only applied when no type is provided."
          ]
        },
        {
          question: "Which of the following is a valid use case for C++ templates that is NOT possible without templates?",
          options: [
            "Creating a class hierarchy using inheritance",
            "Implementing a type-generic Pair<T1, T2> container that stores any two different types",
            "Defining virtual functions for runtime dispatch",
            "Overloading the `+` operator for a specific class"
          ],
          correct: 1,
          explanation: "Without templates, you cannot write a generic Pair class that works for any combination of types. You'd have to write `IntPair`, `StringIntPair`, etc. With `template<typename T1, typename T2> class Pair`, one definition handles `Pair<int, string>`, `Pair<double, double>`, etc. — type-generic containers are the quintessential templates use case.",
          optionExplanations: [
            "Class hierarchies via inheritance are available without templates.",
            "Correct. Templates enable type-generic containers like Pair<T1,T2> that work for any combination of types.",
            "Virtual functions work independently of templates.",
            "Operator overloading is for a specific class and doesn't require templates."
          ]
        },
        {
          question: "In the comparison of C++ templates and Java generics, which of the following statements is CORRECT?",
          options: [
            "Both C++ templates and Java generics use type erasure at runtime",
            "C++ templates increase binary size due to code expansion; Java generics do not due to type erasure",
            "Java generics generate type-specific bytecode for each instantiation",
            "C++ templates require runtime type information (RTTI); Java generics do not"
          ],
          correct: 1,
          explanation: "C++ templates generate separate machine code for each type instantiation (code expansion), which can increase binary size but gives maximum performance and type safety. Java generics use type erasure — only one version of the compiled bytecode exists for all types (using Object internally), with casts inserted by the compiler.",
          optionExplanations: [
            "Only Java uses type erasure; C++ uses code expansion — they have opposite approaches.",
            "Correct. C++ template code expansion increases binary size; Java generics via type erasure generate one shared bytecode.",
            "Java generates one set of bytecode for all type instantiations (due to type erasure), not type-specific versions.",
            "C++ templates are resolved at compile time without runtime type checking; RTTI (dynamic_cast) is a separate mechanism."
          ]
        }
      ]
    },
    {
      name: "Unit 8: Standard Template Library (STL)",
      questions: [
        {
          question: "What are the three main components of the C++ Standard Template Library (STL)?",
          options: [
            "Classes, objects, and functions",
            "Templates, inheritance, and polymorphism",
            "Containers, iterators, and algorithms",
            "Vectors, maps, and lists"
          ],
          correct: 2,
          explanation: "STL has three core components: (1) Containers — data structures that store collections of objects (vector, list, map, set, etc.); (2) Iterators — objects that allow sequential traversal of containers; (3) Algorithms — functions for operations like sorting, searching, transforming. Together they provide a powerful, type-generic programming library.",
          optionExplanations: [
            "Classes, objects, and functions are OOP basics, not the specific STL components.",
            "Templates, inheritance, and polymorphism are OOP/C++ language features, not the STL component taxonomy.",
            "Correct. Containers, iterators, and algorithms are the three pillars of the STL.",
            "Vectors, maps, and lists are specific containers — they are examples within the containers component, not the whole STL."
          ]
        },
        {
          question: "Which STL container would you use for a collection that needs elements in sorted order and no duplicate values?",
          options: [
            "std::vector",
            "std::list",
            "std::set",
            "std::map"
          ],
          correct: 2,
          explanation: "`std::set` is an associative container that stores unique elements in sorted order automatically. Elements are kept in ascending order and duplicate insertion is silently ignored. It uses a balanced binary search tree (typically red-black tree) internally, giving O(log n) for insert, find, and delete.",
          optionExplanations: [
            "`std::vector` is a sequential container — it allows duplicates and does not automatically sort.",
            "`std::list` is a doubly linked list — allows duplicates and has no automatic sorting.",
            "Correct. `std::set` maintains unique elements in sorted order automatically.",
            "`std::map` stores key-value pairs with unique keys in sorted order; it is for pairs, not individual elements."
          ]
        },
        {
          question: "What is the difference between `std::set` and `std::multiset` in C++ STL?",
          options: [
            "set stores integers; multiset stores any type",
            "set allows duplicate elements; multiset does not",
            "set stores only unique elements; multiset allows duplicate elements",
            "set is unordered; multiset is ordered"
          ],
          correct: 2,
          explanation: "`std::set` stores only unique elements — inserting a duplicate has no effect. `std::multiset` allows multiple elements with the same value. Both maintain elements in sorted order. For example, inserting 20 three times into a multiset results in three 20s being stored.",
          optionExplanations: [
            "Both set and multiset are templated and work with any comparable type, not just integers.",
            "This is exactly reversed — set is the one that rejects duplicates.",
            "Correct. set = unique elements sorted; multiset = allows duplicates, also sorted.",
            "Both set and multiset are ordered (sorted); unordered versions are unordered_set and unordered_multiset."
          ]
        },
        {
          question: "Which STL container is best suited for storing key-value pairs with unique keys in sorted key order?",
          options: [
            "std::vector",
            "std::set",
            "std::map",
            "std::deque"
          ],
          correct: 2,
          explanation: "`std::map` is an associative container that stores key-value pairs where keys are unique and maintained in sorted order. It is implemented as a balanced BST. Access is via `map[key]` or `map.find(key)`. For example, `map<string, int>` can store name-age pairs.",
          optionExplanations: [
            "`std::vector` stores sequential elements, not key-value pairs.",
            "`std::set` stores individual unique values, not key-value pairs.",
            "Correct. `std::map` stores unique-key, sorted key-value pairs — ideal for lookups by key.",
            "`std::deque` is a double-ended queue for sequential access, not key-value storage."
          ]
        },
        {
          question: "What is a reverse iterator in C++ STL, and which method creates one?",
          options: [
            "An iterator that skips every other element; created with skip_begin()",
            "An iterator that traverses a container from end to beginning; created with rbegin() and rend()",
            "An iterator that only reads elements; created with cbegin() and cend()",
            "An iterator for bidirectional containers only; created with bidir_begin()"
          ],
          correct: 1,
          explanation: "A reverse iterator allows traversal from the last element to the first. `rbegin()` points to the last element, and `rend()` points just before the first. Incrementing (++) a reverse iterator moves backward in the container. This is useful for processing elements in reverse order without reversing the container.",
          optionExplanations: [
            "No such `skip_begin()` exists in STL; skipping elements uses advance() or step-based loops.",
            "Correct. Reverse iterators traverse backward; `rbegin()` starts at the end, `rend()` is the boundary.",
            "Read-only iterators are const iterators, created with `cbegin()` and `cend()`.",
            "Reverse iterators work with bidirectional and random-access containers; no `bidir_begin()` exists."
          ]
        },
        {
          question: "Which of the following correctly describes `std::find()` as an STL algorithm?",
          options: [
            "It modifies elements in the container to match a target value",
            "It is a non-modifying algorithm that searches for the first occurrence of a value and returns an iterator",
            "It sorts the container and then performs binary search",
            "It removes all occurrences of a specified value from the container"
          ],
          correct: 1,
          explanation: "`std::find()` is a non-modifying algorithm — it searches for a value without changing the container. It returns an iterator to the first element matching the target, or `end()` if not found. Usage: `auto it = std::find(v.begin(), v.end(), 30);`.",
          optionExplanations: [
            "`std::find()` is non-modifying — it does not change any elements.",
            "Correct. `std::find()` is a non-modifying search that returns an iterator to the first match.",
            "Sorting before searching describes `std::binary_search()` or `std::sort()` + `std::binary_search()` combo.",
            "Removing occurrences is done by `std::remove()` followed by `erase()`, not `find()`."
          ]
        },
        {
          question: "What does `std::transform()` do in C++ STL?",
          options: [
            "It converts a container to a different container type",
            "It applies a function to each element and stores the result in an output container",
            "It removes elements that satisfy a condition",
            "It finds and replaces all occurrences of a value"
          ],
          correct: 1,
          explanation: "`std::transform()` applies a user-provided function (or lambda) to each element in a range and writes the results to an output range. For example: `std::transform(v.begin(), v.end(), out.begin(), [](int x){ return x*x; });` squares each element and stores results in `out`. It can also combine two ranges.",
          optionExplanations: [
            "Converting container types is done by range constructors, not `std::transform()`.",
            "Correct. `std::transform()` applies a function element-wise and writes results to an output range.",
            "Removing elements meeting a condition is done by `std::remove_if()` followed by `erase()`.",
            "Finding and replacing all occurrences uses `std::replace()` or `std::replace_if()`."
          ]
        },
        {
          question: "In the Real-Time Stock Tracker case study, why was `std::unordered_map` preferred over `std::map` for storing stock data?",
          options: [
            "unordered_map uses less memory than map for all cases",
            "unordered_map provides O(1) average time complexity for lookups compared to O(log n) for map",
            "unordered_map stores elements in sorted order while map does not",
            "unordered_map prevents duplicate stock symbols automatically"
          ],
          correct: 1,
          explanation: "`std::unordered_map` uses a hash table internally, giving O(1) average time complexity for insert, search, and delete. `std::map` uses a balanced BST giving O(log n). For a real-time stock tracker that needs frequent lookups by stock symbol, O(1) performance is preferred over sorted order. Both prevent duplicate keys.",
          optionExplanations: [
            "Memory usage depends on the hash table's load factor; unordered_map can use more memory than map in some cases.",
            "Correct. unordered_map provides O(1) average lookup vs O(log n) for map — crucial for real-time applications.",
            "unordered_map does NOT store elements in sorted order; that is what map does.",
            "Both map and unordered_map prevent duplicate keys — this is not a differentiating factor."
          ]
        },
        {
          question: "Which of the following is a non-modifying STL algorithm?",
          options: [
            "std::sort()",
            "std::find()",
            "std::copy()",
            "std::remove()"
          ],
          correct: 1,
          explanation: "Non-modifying algorithms traverse containers without changing their elements. `std::find()` searches without modifying. `std::sort()` reorders elements (modifying). `std::copy()` copies elements (modifying the destination). `std::remove()` logically removes elements by shifting (modifying the container).",
          optionExplanations: [
            "`std::sort()` rearranges elements in the container — it is a modifying algorithm.",
            "Correct. `std::find()` searches without modifying any elements — it is a non-modifying algorithm.",
            "`std::copy()` modifies the destination container/range by writing to it.",
            "`std::remove()` shifts elements and logically removes — it modifies the container contents."
          ]
        },
        {
          question: "In C++ STL, what does `pop_back()` do on a `std::vector`?",
          options: [
            "Removes and returns the first element",
            "Removes the last element without returning it",
            "Returns the last element without removing it",
            "Reverses the entire vector"
          ],
          correct: 1,
          explanation: "`pop_back()` removes the last element of a vector, reducing its size by 1. It does NOT return the removed element (unlike stack's `pop` in some languages). To access the last element first, use `back()`. The complementary function `push_back()` adds an element to the end.",
          optionExplanations: [
            "Removing and returning the first element would be `front()` + `erase(begin())` or a deque's `pop_front()`.",
            "Correct. `pop_back()` removes the last element without returning it; the size decreases by 1.",
            "Returning the last element without removing is done by `back()`, not `pop_back()`.",
            "Reversing a vector uses `std::reverse()` from the algorithm library."
          ]
        },
        {
          question: "What does the `std::deque` container support that `std::vector` does not support efficiently?",
          options: [
            "Random access to elements via index",
            "Insertion and deletion at both front and back in O(1) time",
            "Storing elements in sorted order",
            "Preventing duplicate elements"
          ],
          correct: 1,
          explanation: "`std::deque` (double-ended queue) supports O(1) insertion and deletion at BOTH the front (`push_front`, `pop_front`) and the back (`push_back`, `pop_back`). `std::vector` only supports O(1) at the back; front insertions/deletions are O(n) for vector. Both support random access.",
          optionExplanations: [
            "Both deque and vector support O(1) random access via `[]` — this is not unique to deque.",
            "Correct. Deque's key advantage over vector is efficient O(1) insertion/deletion at BOTH ends.",
            "Sorted storage is provided by `std::set` or `std::multiset`, not deque.",
            "Duplicate prevention is provided by `std::set`, not deque."
          ]
        },
        {
          question: "In C++ STL, which algorithm would you use to add 0.5 to every element in a vector and store the results in a new vector?",
          options: [
            "std::replace()",
            "std::for_each()",
            "std::transform()",
            "std::copy_if()"
          ],
          correct: 2,
          explanation: "`std::transform()` is designed for this exact use case: applying a function to each element of a source range and storing results in a destination range. Example: `std::transform(v.begin(), v.end(), result.begin(), [](double x){ return x + 0.5; });`. The source is unchanged; the modified values go into `result`.",
          optionExplanations: [
            "`std::replace()` replaces exact values with a new value — it does not apply arithmetic to every element.",
            "`std::for_each()` applies a function to each element but is typically for side effects, and doesn't write to a new container automatically.",
            "Correct. `std::transform()` applies a function to each element and writes results to a separate output range.",
            "`std::copy_if()` copies elements conditionally based on a predicate but doesn't transform/modify values."
          ]
        },
        {
          question: "What is an insert iterator in C++ STL, and what is its primary use?",
          options: [
            "An iterator that reads elements from a file and inserts them into a container",
            "An iterator that, when written to, inserts elements into a container rather than overwriting existing ones",
            "An iterator that allows inserting at a specific index in a vector",
            "An iterator that merges two sorted containers together"
          ],
          correct: 1,
          explanation: "Insert iterators (`std::back_inserter`, `std::front_inserter`, `std::inserter`) are output iterators that, when you assign to them, call the container's insert function instead of overwriting. This is crucial when using algorithms like `std::transform` with a destination container that needs to grow dynamically rather than write to pre-existing positions.",
          optionExplanations: [
            "Insert iterators work with in-memory containers; reading from files uses stream iterators.",
            "Correct. Insert iterators insert elements into a container when assigned, rather than overwriting.",
            "Random index insertion is done with `std::inserter(container, position)`, but the general concept is as described.",
            "Merging sorted containers uses `std::merge()`, not insert iterators directly."
          ]
        },
        {
          question: "In the Library Management System case study using STL, why was `std::map<int, Book>` chosen to store books by ID?",
          options: [
            "Because map allows duplicate book IDs to handle multiple copies",
            "Because map provides O(log n) search by book ID, which is efficient for large libraries",
            "Because map automatically sorts books alphabetically by title",
            "Because map stores books as a linked list for easy insertion"
          ],
          correct: 1,
          explanation: "A `std::map<int, Book>` (keyed by book ID) provides O(log n) search by ID. This is ideal for looking up a book by its unique ID. Map keys are unique (no duplicate IDs) and automatically sorted by ID. While unordered_map would give O(1), map was chosen for sorted ID browsing and guaranteed O(log n) worst case.",
          optionExplanations: [
            "Map has unique keys — it does not allow duplicate IDs. For multiple copies, you'd need multimap or map with a vector value.",
            "Correct. Map provides O(log n) lookup by key (book ID), suitable for library management.",
            "Map sorts by key (ID), not by title. Sorting by title would require a different key.",
            "Map is implemented as a balanced BST, not a linked list."
          ]
        },
        {
          question: "Which of the following correctly describes the output of `std::sort(v.begin(), v.end())` followed by printing the vector?",
          options: [
            "Elements are sorted in descending order",
            "Elements are sorted in ascending order (smallest to largest)",
            "Elements are sorted by insertion order",
            "Elements are rearranged randomly"
          ],
          correct: 1,
          explanation: "`std::sort()` by default sorts elements in ascending order (using `<` operator). To sort in descending order, you pass `std::greater<int>()` as the comparator: `std::sort(v.begin(), v.end(), std::greater<int>())`. The algorithm has O(n log n) average time complexity (typically introsort).",
          optionExplanations: [
            "Descending sort requires an explicit comparator like `std::greater<T>()`; default is ascending.",
            "Correct. Default `std::sort()` arranges elements in ascending (smallest to largest) order.",
            "Insertion order is the natural order before sorting; sort changes it.",
            "`std::shuffle()` randomizes; `std::sort()` produces a deterministic sorted result."
          ]
        }
      ]
    },
    {
      name: "Unit 9: Design Patterns",
      questions: [
        {
          question: "What is a design pattern in software engineering?",
          options: [
            "A specific algorithm for solving a computational problem",
            "A reusable solution template for commonly occurring problems in software design",
            "A UML diagram showing class relationships",
            "A testing framework for unit tests"
          ],
          correct: 1,
          explanation: "A design pattern is a reusable solution template to a commonly recurring design problem. Patterns are not copy-paste code — they are blueprints that describe how to solve a class of problems. They represent best practices discovered by experienced developers and improve code maintainability, flexibility, and communication.",
          optionExplanations: [
            "Algorithms solve computational problems with specific steps; design patterns solve structural/behavioral design problems.",
            "Correct. Design patterns are templates for solving recurring design problems elegantly and reusably.",
            "UML diagrams may represent a pattern, but the pattern itself is the design concept, not the diagram.",
            "Testing frameworks are development tools; design patterns are architectural/design concepts."
          ]
        },
        {
          question: "Which of the following are the three main categories of design patterns?",
          options: [
            "Structural, behavioral, and functional",
            "Creational, structural, and behavioral",
            "Abstract, concrete, and composite",
            "Singleton, factory, and observer"
          ],
          correct: 1,
          explanation: "Design patterns (as defined in the Gang of Four book) are classified into three categories: (1) Creational — how objects are created (Singleton, Factory, Abstract Factory, Builder, Prototype); (2) Structural — how classes and objects are composed (Decorator, Adapter, Facade, Composite); (3) Behavioral — how objects communicate (Observer, Strategy, Command, Iterator).",
          optionExplanations: [
            "'Functional' is not one of the three GoF design pattern categories.",
            "Correct. The three GoF categories are Creational, Structural, and Behavioral.",
            "Abstract, concrete, and composite are OOP-related terms, not design pattern categories.",
            "Singleton, Factory, and Observer are individual patterns within the categories, not the categories themselves."
          ]
        },
        {
          question: "The Singleton design pattern ensures:",
          options: [
            "A class can have multiple instances for parallel use",
            "A class has only one instance and provides a global access point to it",
            "A class automatically creates new instances when needed",
            "A class instance is shared only between two specific classes"
          ],
          correct: 1,
          explanation: "The Singleton pattern restricts a class to exactly one instance and provides a static method (like `getInstance()`) to access it globally. It is used when exactly one object is needed to coordinate actions — like a configuration manager, logging service, or database connection pool. The constructor is private to prevent external instantiation.",
          optionExplanations: [
            "Singleton prevents multiple instances — it is the opposite of allowing many instances.",
            "Correct. Singleton ensures only one instance and provides a global access point via a static method.",
            "Automatically creating new instances describes Factory or Prototype patterns.",
            "Sharing between two classes describes a more limited access pattern; Singleton is globally accessible."
          ]
        },
        {
          question: "Which design pattern is used when you want to create objects without specifying the exact class to create?",
          options: [
            "Singleton pattern",
            "Observer pattern",
            "Factory pattern",
            "Strategy pattern"
          ],
          correct: 2,
          explanation: "The Factory pattern provides an interface for creating objects while allowing subclasses or methods to determine which class to instantiate. Instead of `new ConcreteClass()`, you call a factory method that returns the appropriate subtype. This decouples client code from concrete class implementations.",
          optionExplanations: [
            "Singleton ensures one instance of a known class; it does not handle creation of unknown subtype objects.",
            "Observer is a behavioral pattern for event notification; it has no role in object creation.",
            "Correct. Factory pattern creates objects via a factory method without specifying the exact concrete class.",
            "Strategy is a behavioral pattern for selecting algorithms at runtime; it is not about object creation."
          ]
        },
        {
          question: "The Observer design pattern is best described as:",
          options: [
            "Creating one instance of a class for global access",
            "A one-to-many relationship where state changes in one object notify all dependent objects",
            "Providing an interface for a subsystem's complex components",
            "Encapsulating a family of algorithms and making them interchangeable"
          ],
          correct: 1,
          explanation: "The Observer pattern defines a one-to-many dependency: when a Subject (publisher) changes state, all registered Observers (subscribers) are notified and updated automatically. This is the foundation of event-driven programming. The earthquake monitoring example (EarthquakeMonitor observing a Subject) is a textbook Observer pattern.",
          optionExplanations: [
            "Creating one global instance describes the Singleton pattern.",
            "Correct. Observer = Subject notifies multiple Observers on state change. Classic publish-subscribe.",
            "Providing an interface for subsystem components describes the Facade pattern.",
            "Encapsulating interchangeable algorithms describes the Strategy pattern."
          ]
        },
        {
          question: "In the Singleton pattern implementation, why is the constructor declared private?",
          options: [
            "To allow derived classes to inherit from Singleton",
            "To prevent any external code from creating multiple instances using `new`",
            "To ensure the Singleton is thread-safe",
            "To make the Singleton accessible from outside the class"
          ],
          correct: 1,
          explanation: "The private constructor is the enforcement mechanism of the Singleton pattern. If the constructor were public, anyone could call `new Singleton()` and create multiple instances, breaking the single-instance guarantee. The private constructor forces all code to use the `getInstance()` method, which controls instance creation.",
          optionExplanations: [
            "A private constructor prevents inheritance, not enables it; Singletons typically cannot be subclassed.",
            "Correct. The private constructor prevents external `new` calls, enforcing the single-instance rule.",
            "Thread-safety is achieved separately (e.g., with synchronized in Java); private constructor alone does not ensure it.",
            "External access is provided through the public static `getInstance()` method, not the constructor."
          ]
        },
        {
          question: "Both Singleton and Factory patterns are classified as which type of design pattern?",
          options: [
            "Structural patterns",
            "Behavioral patterns",
            "Creational patterns",
            "Architectural patterns"
          ],
          correct: 2,
          explanation: "Singleton and Factory are both Creational design patterns — they deal with object creation mechanisms. Creational patterns abstract the instantiation process to make a system independent of how its objects are created, composed, and represented. Other creational patterns include Abstract Factory, Builder, and Prototype.",
          optionExplanations: [
            "Structural patterns (Adapter, Decorator, Facade, Composite) deal with object/class composition, not creation.",
            "Behavioral patterns (Observer, Strategy, Command) deal with communication between objects, not creation.",
            "Correct. Singleton and Factory are both Creational patterns — they control how objects are created.",
            "'Architectural patterns' (MVC, MVP) are a higher-level concept; GoF patterns are divided into the three categories."
          ]
        },
        {
          question: "The Decorator design pattern is classified under which category, and what is its primary purpose?",
          options: [
            "Creational — creating new subclasses of an existing class",
            "Behavioral — notifying objects about state changes",
            "Structural — dynamically adding new behavior/responsibilities to an object without modifying its class",
            "Behavioral — encapsulating algorithms and making them interchangeable"
          ],
          correct: 2,
          explanation: "The Decorator pattern is a structural pattern that attaches additional responsibilities to an object dynamically. It provides a flexible alternative to subclassing for extending functionality. A Decorator wraps an object and adds new behaviors, following the open/closed principle — open for extension, closed for modification.",
          optionExplanations: [
            "Decorator does not create new subclasses; it wraps existing objects. Creation is a separate concern.",
            "Notifying objects about state changes is the Observer pattern's responsibility.",
            "Correct. Decorator (Structural) dynamically adds behavior to objects by wrapping them.",
            "Encapsulating interchangeable algorithms is the Strategy pattern."
          ]
        },
        {
          question: "What is the Adapter design pattern?",
          options: [
            "A pattern that converts the interface of a class into another interface expected by clients",
            "A pattern that provides a simplified interface to a complex subsystem",
            "A pattern that allows an object to take on multiple forms",
            "A pattern that creates a single instance of a class"
          ],
          correct: 0,
          explanation: "The Adapter (Structural) pattern acts as a bridge between two incompatible interfaces. Like a power adapter that lets a 3-pin plug work in a 2-pin socket, it converts the interface of an existing class into the interface that a client expects. This enables classes to work together that couldn't otherwise due to incompatible interfaces.",
          optionExplanations: [
            "Correct. Adapter converts one interface to another, bridging incompatible classes.",
            "Providing a simplified interface to a complex subsystem describes the Facade pattern.",
            "An object taking multiple forms describes polymorphism, not a design pattern.",
            "Creating a single instance describes the Singleton pattern."
          ]
        },
        {
          question: "The Strategy design pattern is best used when:",
          options: [
            "You want to ensure only one object of a class exists",
            "You want to define a family of algorithms and make them interchangeable at runtime",
            "You want to notify multiple objects about state changes in a publisher",
            "You want to add behavior to individual objects without subclassing"
          ],
          correct: 1,
          explanation: "The Strategy pattern defines a family of algorithms, encapsulates each one as a class, and makes them interchangeable. The client can select the algorithm at runtime without changing the context class. For example, a sorting context could use BubbleSort, MergeSort, or QuickSort strategy objects interchangeably.",
          optionExplanations: [
            "Ensuring only one object exists is the Singleton pattern.",
            "Correct. Strategy encapsulates interchangeable algorithms, allowing the client to switch strategies dynamically.",
            "Notifying multiple objects about state changes is the Observer pattern.",
            "Adding behavior to individual objects without subclassing is the Decorator pattern."
          ]
        },
        {
          question: "In the Observer pattern earthquake monitoring example, what is the `Subject` class responsible for?",
          options: [
            "Detecting earthquake magnitude using sensors",
            "Maintaining a list of observers and notifying them when the magnitude changes",
            "Printing the earthquake alert message directly",
            "Computing the average of all recorded magnitudes"
          ],
          correct: 1,
          explanation: "The Subject class in the Observer pattern is the publisher/observable. It maintains a list of Observer objects (`vector<Observer*> observers`), and when its state changes (via `setMagnitude()`), it calls `notify()` which iterates through all observers and calls their `update()` method. The Subject does not print alerts itself — that is the Observer's job.",
          optionExplanations: [
            "The Subject receives the magnitude value; it does not detect it via sensors.",
            "Correct. Subject maintains the observer list and notifies them on state changes via `notify()`.",
            "Printing the alert is done by the EarthquakeMonitor (Observer), not the Subject.",
            "Computing averages is not part of the standard Observer pattern's Subject responsibility."
          ]
        },
        {
          question: "What does the Facade design pattern provide?",
          options: [
            "A way to create objects without specifying their concrete classes",
            "A simplified interface to a complex system of classes or a library",
            "A mechanism to add behavior to objects at runtime",
            "A guarantee that only one instance of a class exists"
          ],
          correct: 1,
          explanation: "The Facade (Structural) pattern provides a simplified, unified interface to a complex subsystem. Instead of clients needing to interact with many low-level classes, the Facade class wraps the complexity and exposes only what the client needs. Like a building's facade (exterior) hides the internal wiring and plumbing.",
          optionExplanations: [
            "Creating objects without specifying concrete classes is the Factory pattern.",
            "Correct. Facade provides a simple interface over a complex subsystem, hiding internal complexity.",
            "Adding behavior at runtime to individual objects is the Decorator pattern.",
            "Ensuring one instance is the Singleton pattern."
          ]
        },
        {
          question: "Why are design patterns considered 'language-agnostic' solutions?",
          options: [
            "Because they can only be implemented in object-oriented languages",
            "Because they describe architectural solutions that can be implemented in any OOP language",
            "Because they eliminate the need for programming language syntax",
            "Because they are written in UML, which is not a programming language"
          ],
          correct: 1,
          explanation: "Design patterns describe general solutions to design problems using OOP concepts (classes, interfaces, inheritance, composition). The same Singleton or Observer pattern can be implemented in C++, Java, Python, C#, etc. The pattern is a concept/template, not tied to any specific language's syntax.",
          optionExplanations: [
            "While most patterns use OOP, they can sometimes be adapted to other paradigms; the concept transcends any one language.",
            "Correct. Design patterns are conceptual blueprints that can be implemented in any OOP language.",
            "Patterns still require programming language syntax for implementation; they just aren't tied to one language.",
            "UML may be used to illustrate patterns, but the patterns themselves are implemented in programming languages."
          ]
        },
        {
          question: "In the Hotel Reservation System case study, which design pattern is applied when Room is a base class and StandardRoom, LuxuryRoom are derived classes each implementing `calculateCost()` differently?",
          options: [
            "Singleton pattern",
            "Observer pattern",
            "Template Method pattern",
            "Factory pattern"
          ],
          correct: 2,
          explanation: "The Template Method pattern defines the skeleton of an algorithm in the base class, deferring some steps to subclasses. In the Hotel Reservation System, Room defines the overall process (checkAvailability → book → calculateCost), but `calculateCost()` is overridden by each room subtype. This fits Template Method.",
          optionExplanations: [
            "Singleton ensures one instance; it has no role in room type differentiation.",
            "Observer manages event notifications; it does not relate to per-subtype cost calculation.",
            "Correct. Template Method defines an algorithm skeleton in the base class with customizable steps in subclasses.",
            "Factory pattern would be used to create room objects without specifying the concrete class; the cost calculation difference is Template Method."
          ]
        },
        {
          question: "Which of the following correctly identifies the 'advantage of using design patterns' mentioned in the course?",
          options: [
            "They reduce code length by 50% in all programs",
            "They eliminate the need for testing by making code bug-free",
            "They provide tested, proven development paradigms that improve communication and code quality",
            "They make all programs run faster by optimizing memory automatically"
          ],
          correct: 2,
          explanation: "The advantages of design patterns include: providing tested/proven solutions to common problems, improving code readability and maintainability, providing a common vocabulary for developers to communicate design decisions, and reducing design iterations. They do NOT guarantee shorter code, bug-free code, or automatic performance improvements.",
          optionExplanations: [
            "Design patterns do not guarantee a fixed reduction in code length.",
            "Design patterns improve design, not eliminate bugs; testing is always required.",
            "Correct. Design patterns offer proven, reusable solutions and a shared vocabulary for better developer communication.",
            "Performance depends on implementation; patterns improve design quality, not necessarily execution speed."
          ]
        }
      ]
    },
    {
      name: "Unit 10: Multithreading & Concurrency",
      questions: [
        {
          question: "What is multithreading in the context of OOP?",
          options: [
            "A program design where multiple classes inherit from one base class",
            "A technique where a program creates multiple threads of execution running concurrently within a single process",
            "A method of implementing multiple constructors in a single class",
            "A way to distribute a program across multiple computers"
          ],
          correct: 1,
          explanation: "Multithreading allows a single program (process) to have multiple threads of execution that run concurrently, sharing the same memory space. Threads are lighter than processes and can execute in parallel on multi-core processors. This enables tasks like UI updates, network I/O, and computations to happen simultaneously.",
          optionExplanations: [
            "Multiple classes inheriting from one base describes hierarchical inheritance, not multithreading.",
            "Correct. Multithreading = concurrent execution of multiple threads within one process sharing memory.",
            "Multiple constructors describe constructor overloading, unrelated to threading.",
            "Distributing across multiple computers describes distributed computing; multithreading is within one process."
          ]
        },
        {
          question: "In Java, which interface must be implemented to create a thread by defining the `run()` method?",
          options: [
            "Thread",
            "Runnable",
            "Callable",
            "Executable"
          ],
          correct: 1,
          explanation: "The `Runnable` interface in Java has one abstract method: `run()`. Classes implementing Runnable define their concurrent task in `run()`. A Runnable object is then passed to a Thread object (`new Thread(runnableObj).start()`). This is preferred over extending Thread when the class needs to extend another class.",
          optionExplanations: [
            "Thread is a class (not an interface) that can be extended; but implementing Runnable is more flexible.",
            "Correct. The `Runnable` interface requires overriding the `run()` method to define thread behavior.",
            "`Callable` is similar to Runnable but can return a result and throw exceptions; it's used with `ExecutorService`.",
            "`Executable` is not a standard Java threading interface."
          ]
        },
        {
          question: "In C++, what must happen to a `std::thread` object before it is destroyed?",
          options: [
            "It must have its priority set to low",
            "It must be joined or detached",
            "It must call the notify() method",
            "It must be garbage collected by the runtime"
          ],
          correct: 1,
          explanation: "In C++, a `std::thread` object must be either `join()`ed (wait for the thread to finish) or `detach()`ed (let it run independently) before the thread object is destroyed. If a joinable thread object is destroyed without joining/detaching, `std::terminate()` is called, crashing the program.",
          optionExplanations: [
            "Thread priority is not a required step before destruction in C++.",
            "Correct. Before destruction, every std::thread must be joined (waited for) or detached (made autonomous).",
            "`notify()` is used with condition variables for thread synchronization; it's not required before destruction.",
            "C++ has no garbage collection; resource management is manual."
          ]
        },
        {
          question: "What is the difference between parallelism and concurrency?",
          options: [
            "They are identical concepts with different names",
            "Concurrency means multiple tasks progress simultaneously on separate cores; parallelism means tasks are interleaved on one core",
            "Concurrency deals with managing multiple tasks that can overlap in time; parallelism is executing multiple tasks literally at the same instant on multiple cores",
            "Parallelism is for I/O tasks; concurrency is for CPU-bound tasks"
          ],
          correct: 2,
          explanation: "Concurrency is about dealing with multiple tasks that CAN overlap in time — not necessarily at the same instant. Parallelism is executing multiple tasks at the exact same time on multiple cores. A single-core machine can be concurrent (context switching) but not parallel. A multi-core machine can be both.",
          optionExplanations: [
            "They are related but distinct concepts with different technical meanings.",
            "This reverses the definitions — concurrency is about overlapping tasks, parallelism is about true simultaneity.",
            "Correct. Concurrency = overlapping management of tasks; Parallelism = true simultaneous execution on multiple cores.",
            "I/O vs CPU distinction is about task types, not the definition of concurrency vs parallelism."
          ]
        },
        {
          question: "What problem does the `synchronized` keyword solve in Java multithreading?",
          options: [
            "Deadlock prevention in circular lock dependencies",
            "Race conditions where multiple threads modify shared data concurrently, causing inconsistent results",
            "Memory leaks from thread objects not being garbage collected",
            "Thread starvation where low-priority threads never get CPU time"
          ],
          correct: 1,
          explanation: "Race conditions occur when multiple threads access and modify shared data concurrently without coordination, leading to unpredictable and incorrect results. The `synchronized` keyword prevents race conditions by ensuring only one thread at a time can execute a synchronized method or block, providing mutual exclusion.",
          optionExplanations: [
            "Deadlock occurs when synchronized blocks are improperly nested and is not solved by synchronized alone — it can even cause it.",
            "Correct. `synchronized` prevents race conditions by serializing access to shared resources.",
            "Memory leaks are unrelated to `synchronized`; thread objects are garbage collected normally when unreferenced.",
            "Thread starvation is a fairness issue addressed by fair locks or priorities, not the `synchronized` keyword."
          ]
        },
        {
          question: "In C++ concurrency, what is the purpose of `std::future` returned by `std::async`?",
          options: [
            "To cancel the asynchronous task before it completes",
            "To retrieve the result of the asynchronous computation when needed",
            "To set the priority of the background thread",
            "To limit the number of threads that can run concurrently"
          ],
          correct: 1,
          explanation: "`std::future<T>` represents a value that will be available in the future — the eventual result of an asynchronous operation. `std::async` returns a `std::future`. Calling `.get()` on the future blocks until the computation completes and returns the result. It provides a clean way to synchronize asynchronous results.",
          optionExplanations: [
            "Cancellation is not directly supported by `std::future` in standard C++.",
            "Correct. `std::future` lets you retrieve the result of an async computation via `.get()` when ready.",
            "Thread priority is system-specific and not controlled by `std::future`.",
            "Limiting concurrent threads is managed by thread pools or semaphores, not `std::future`."
          ]
        },
        {
          question: "What is best practice for multithreading regarding thread-safe data structures?",
          options: [
            "Use global variables for all shared data to ensure all threads can access it",
            "Always use unprotected containers for maximum performance",
            "Protect shared data with synchronization mechanisms like mutex or synchronized methods",
            "Create a separate process for each thread to avoid sharing memory"
          ],
          correct: 2,
          explanation: "Thread-safe data structures must be protected using synchronization mechanisms (mutex in C++, synchronized in Java, locks, etc.) to prevent race conditions. Unprotected shared data is one of the most common sources of concurrent bugs. Thread-local data and immutable objects are also recommended strategies.",
          optionExplanations: [
            "Global variables without synchronization are dangerous in multithreaded environments — they cause race conditions.",
            "Unprotected containers lead to data races and undefined behavior in concurrent code.",
            "Correct. Shared data must be protected with synchronization (mutex, synchronized, atomic) for thread safety.",
            "Separate processes don't share memory and defeat the purpose of multithreading (which shares memory by design)."
          ]
        },
        {
          question: "In Java, what happens when `Thread.sleep(100)` is called inside a thread?",
          options: [
            "The thread is permanently stopped",
            "The thread releases its locks and enters a Waiting state for 100 milliseconds",
            "The thread enters a Waiting state for 100ms but does NOT release any held locks",
            "The thread is immediately terminated after 100ms"
          ],
          correct: 2,
          explanation: "`Thread.sleep(ms)` puts the thread in a Timed Waiting state for the specified duration, after which it returns to Runnable. Crucially, `sleep()` does NOT release any synchronized locks held by the thread. This is different from `wait()`, which does release the lock. After sleep expires, the thread is eligible to run again.",
          optionExplanations: [
            "`sleep()` is temporary; the thread wakes up after the duration, not permanently stopped.",
            "Unlike `wait()`, `sleep()` does NOT release locks — this is a critical distinction.",
            "Correct. `sleep()` pauses the thread for the specified time without releasing held locks.",
            "The thread resumes after 100ms, it is not terminated."
          ]
        },
        {
          question: "Which of the following Java code correctly starts two threads for objects t1 and t2 that implement Runnable?",
          options: [
            "t1.run(); t2.run();",
            "new Thread(t1).start(); new Thread(t2).start();",
            "t1.start(); t2.start();",
            "Thread.start(t1); Thread.start(t2);"
          ],
          correct: 1,
          explanation: "Since t1 and t2 implement Runnable (not extend Thread), they must be wrapped in Thread objects and `start()` must be called. `t1.run()` would execute run() sequentially in the current thread (no concurrency). `t1.start()` is invalid since t1 is a Runnable, not a Thread. `Thread.start()` is not a static method.",
          optionExplanations: [
            "Calling `run()` directly executes sequentially in the current thread — no new thread is created.",
            "Correct. Wrapping Runnable objects in `new Thread()` and calling `start()` creates concurrent threads.",
            "t1 and t2 are Runnable objects, not Thread objects; they don't have a `start()` method.",
            "`Thread.start()` is not a static method; it must be called on an instance: `thread.start()`."
          ]
        },
        {
          question: "What is a deadlock in multithreading, and how does it occur?",
          options: [
            "A thread that runs too fast and finishes before others can join",
            "A situation where two or more threads are each waiting for a resource held by the other, causing all to wait indefinitely",
            "A condition where all threads are running simultaneously without synchronization",
            "A scenario where a thread runs forever because its run() method has an infinite loop"
          ],
          correct: 1,
          explanation: "Deadlock is a classic concurrency problem where Thread A holds Lock 1 and waits for Lock 2, while Thread B holds Lock 2 and waits for Lock 1 — a circular dependency. Neither can proceed, causing both threads (and potentially the program) to freeze indefinitely. Prevention strategies include lock ordering and timeouts.",
          optionExplanations: [
            "A fast-finishing thread simply completes; it doesn't cause a deadlock.",
            "Correct. Deadlock is the mutual waiting cycle — Thread A waits for B's resource while B waits for A's.",
            "Threads running without synchronization describes a race condition, not deadlock.",
            "An infinite loop causes an infinite loop problem (liveness failure), not a deadlock."
          ]
        },
        {
          question: "In the context of Java threading, what does the `join()` method do?",
          options: [
            "Starts the thread execution",
            "Causes the calling thread to wait until the joined thread completes execution",
            "Merges two threads into a single thread",
            "Sets the priority of the thread to maximum"
          ],
          correct: 1,
          explanation: "`join()` is called by one thread (the caller) on another thread object. It causes the calling thread to pause and wait until the joined thread finishes its execution. For example, in the main thread: `thread1.join()` causes main to wait for thread1 to finish before continuing. This is essential for thread synchronization.",
          optionExplanations: [
            "Starting thread execution uses `start()`, not `join()`.",
            "Correct. `join()` makes the calling thread wait for the target thread to complete.",
            "Threads cannot be merged into one; `join()` just waits for completion.",
            "Priority is set with `setPriority()`; `join()` has nothing to do with priority."
          ]
        },
        {
          question: "What is the advantage of using `std::async` with the deferred launch policy (`std::launch::deferred`)?",
          options: [
            "The function runs immediately in a new thread",
            "The function executes lazily — only when the result is explicitly requested via `.get()`",
            "The function runs at the highest priority among all threads",
            "The function is executed in parallel with the main thread"
          ],
          correct: 1,
          explanation: "`std::launch::deferred` implements lazy evaluation — the function is NOT started until `.get()` is called on the future. This is useful when you want to defer computation until the result is actually needed, potentially avoiding the computation entirely if `.get()` is never called. It runs in the calling thread, not a new thread.",
          optionExplanations: [
            "Immediately running in a new thread describes `std::launch::async`, not deferred.",
            "Correct. Deferred means lazy execution — the function only runs when explicitly requested via `.get()`.",
            "Launch policies don't affect priority; priority is OS-scheduler dependent.",
            "Deferred execution runs in the calling thread (not parallel); `std::launch::async` uses a separate thread."
          ]
        },
        {
          question: "Which of the following is a best practice for multithreaded programming?",
          options: [
            "Share as much mutable data as possible between threads to reduce memory usage",
            "Minimize shared state; prefer immutable data or thread-local storage",
            "Use as many threads as possible to maximize CPU utilization",
            "Always use synchronized methods on all methods of every class"
          ],
          correct: 1,
          explanation: "The safest multithreading approach minimizes shared mutable state. If data is immutable (read-only) or thread-local (each thread has its own copy), no synchronization is needed. Over-sharing mutable state requires complex locking that's error-prone. Using excessive threads causes context-switching overhead, not better performance.",
          optionExplanations: [
            "Sharing mutable data requires synchronization; more sharing = more complexity and risk of bugs.",
            "Correct. Minimize shared mutable state; use immutable or thread-local data wherever possible.",
            "Too many threads cause context-switching overhead; optimal thread count depends on cores and task type.",
            "Synchronizing everything causes performance bottlenecks and potential deadlocks; it should be targeted."
          ]
        },
        {
          question: "In the Java synchronized example with Thread-1 and Thread-2 sharing SharedResource, which thread will typically execute its `display()` first?",
          options: [
            "Thread-2 always executes first due to higher default priority",
            "Thread-1 typically executes first since it is started first, though the OS scheduler ultimately decides",
            "Both threads always execute simultaneously regardless of synchronization",
            "The thread with the shorter message executes first"
          ],
          correct: 1,
          explanation: "Thread-1 is started before Thread-2 (`t1.start()` before `t2.start()`), so it typically acquires the synchronized lock first and executes its `display()` method completely. However, thread scheduling is ultimately determined by the OS and JVM — 'typically' is the correct qualifier. There's no absolute guarantee without explicit ordering mechanisms.",
          optionExplanations: [
            "Java threads don't have inherent priority ordering; both start with the same default priority (5).",
            "Correct. Thread-1 starts first and typically acquires the lock first, but OS scheduling is the ultimate arbiter.",
            "Synchronized prevents simultaneous execution; only one runs at a time.",
            "Message length has no effect on thread scheduling or lock acquisition."
          ]
        },
        {
          question: "What is the key characteristic that distinguishes a thread from a process?",
          options: [
            "Threads have their own separate memory space; processes share memory",
            "Threads within the same process share the same memory space; processes have separate memory spaces",
            "Threads can run on multiple computers; processes cannot",
            "Threads require more system resources than processes"
          ],
          correct: 1,
          explanation: "Threads within the same process share the same memory space (heap, global variables), which enables efficient communication but requires synchronization to avoid race conditions. Processes have independent memory spaces — communication between processes requires IPC (inter-process communication). Threads are lighter (less resource overhead) than processes.",
          optionExplanations: [
            "This is the reverse; threads share memory, processes have separate spaces.",
            "Correct. Threads share the process's memory space; processes have separate, isolated memory spaces.",
            "Distributed computing allows code on multiple machines; this is not a thread vs process distinction.",
            "Threads require LESS system resources than processes — creating a thread is lighter than creating a process."
          ]
        }
      ]
    },
    {
      name: "Unit 11: Networking, GUI & Advanced Topics",
      questions: [
        {
          question: "What is a socket in the context of network programming?",
          options: [
            "A physical hardware connector on a network card",
            "An endpoint for two-way communication between client and server programs over a network",
            "A Java class for creating graphical user interfaces",
            "A STL container for storing network packets"
          ],
          correct: 1,
          explanation: "A socket is a software abstraction representing one endpoint of a two-way network communication channel. Every socket is associated with an IP address and port number. Sockets allow client-server communication — the server creates a listening socket, and a client connects to it. The OS provides socket APIs in both C++ and Java.",
          optionExplanations: [
            "Physical network connectors are hardware; sockets are software abstractions.",
            "Correct. A socket is the endpoint for bidirectional network communication, identified by IP + port.",
            "Java Swing is for GUI; sockets are for network communication.",
            "STL containers store data structures in memory; they have no network functionality."
          ]
        },
        {
          question: "What does the server program call to start accepting client connections on a specific port?",
          options: [
            "connect()",
            "listen() / ServerSocket.accept() (in Java) / accept() (in C++)",
            "send()",
            "open()"
          ],
          correct: 1,
          explanation: "After creating a socket and binding it to a port, the server calls `listen()` to start accepting incoming connection requests. In C++, `accept()` blocks until a client connects and returns a new socket for that connection. In Java, `ServerSocket.accept()` does the same. The client uses `connect()` to initiate the connection.",
          optionExplanations: [
            "`connect()` is called by the CLIENT to connect to the server, not by the server.",
            "Correct. The server calls `listen()` (to queue connections) and then `accept()` (to accept each one).",
            "`send()` or `write()` transmits data after a connection is established, not to initiate it.",
            "`open()` is typically used for file operations, not specifically network connections."
          ]
        },
        {
          question: "What is the difference between TCP and UDP in network programming?",
          options: [
            "TCP is for local area networks; UDP is for wide area networks",
            "TCP is connection-oriented, reliable, and ordered; UDP is connectionless, faster but unreliable",
            "TCP uses sockets; UDP does not use sockets",
            "TCP is used in C++; UDP is used in Java"
          ],
          correct: 1,
          explanation: "TCP (Transmission Control Protocol) is connection-oriented — it establishes a connection, guarantees ordered delivery, and handles error correction. It is used when reliability matters (file transfer, web, email). UDP (User Datagram Protocol) is connectionless and faster — no guarantee of delivery or order. Used for video streaming, gaming, DNS where speed > reliability.",
          optionExplanations: [
            "Both TCP and UDP work over LAN and WAN; the distinction is about reliability, not scope.",
            "Correct. TCP = reliable, ordered, connection-oriented. UDP = fast, connectionless, unreliable.",
            "Both TCP and UDP use sockets for communication.",
            "Both C++ and Java support both TCP and UDP sockets."
          ]
        },
        {
          question: "In Java's Swing library, which method adds an event listener to a button to handle click events?",
          options: [
            "button.onClick()",
            "button.addActionListener()",
            "button.setEventHandler()",
            "button.handleEvent()"
          ],
          correct: 1,
          explanation: "In Java Swing, `addActionListener()` registers an `ActionListener` to a button component. When the button is clicked, the listener's `actionPerformed()` method is called. This is the foundation of event-driven GUI programming in Java — components fire events, and listeners handle them.",
          optionExplanations: [
            "`button.onClick()` is JavaScript syntax for browser button events, not Java Swing.",
            "Correct. `button.addActionListener(listener)` registers the handler for button click events in Swing.",
            "`setEventHandler()` is not a standard Swing method name.",
            "`handleEvent()` was used in old AWT; Swing uses ActionListener and `addActionListener()`."
          ]
        },
        {
          question: "What is event-driven programming in the context of GUI development?",
          options: [
            "A paradigm where the program runs a fixed sequence of operations from top to bottom",
            "A paradigm where program flow is determined by user actions (events) like button clicks, key presses, etc.",
            "A paradigm where events are generated by the CPU every millisecond",
            "A paradigm exclusive to server-side programming"
          ],
          correct: 1,
          explanation: "Event-driven programming is a paradigm where the flow of execution is determined by events — user actions (mouse click, key press, window resize), sensor inputs, or messages from other programs. Instead of sequential execution, the program waits for events and responds through registered event handlers/listeners. All GUI frameworks (Swing, Qt, wxWidgets) use this paradigm.",
          optionExplanations: [
            "Fixed top-to-bottom execution describes procedural/sequential programming.",
            "Correct. Event-driven programming responds to user-triggered or system-generated events via listeners.",
            "CPU-generated millisecond events describe polling/interrupt-driven programming, not user-event-driven.",
            "Event-driven programming is used on both client (GUI) and server sides (event loops in Node.js, etc.)."
          ]
        },
        {
          question: "In a multithreaded Java server, what is the best practice for handling multiple clients simultaneously?",
          options: [
            "Process all clients sequentially in a single thread",
            "Use a separate thread for each client connection",
            "Use only one synchronized method to handle all clients",
            "Store all client requests in a queue and process them every 10 seconds"
          ],
          correct: 1,
          explanation: "A multithreaded server creates a new thread for each client connection. When `ServerSocket.accept()` returns a new client socket, the server spawns a thread to handle that client, while the main thread returns to `accept()` waiting for the next client. This allows multiple clients to be served concurrently.",
          optionExplanations: [
            "Sequential processing means each client must wait for all previous clients to finish — poor scalability.",
            "Correct. Spawning a new thread per client allows concurrent handling of multiple connections.",
            "A single synchronized method would serialize all clients, defeating the purpose of multithreading.",
            "A 10-second polling delay introduces unacceptable latency for real-time client communication."
          ]
        },
        {
          question: "Which Python library is used for basic socket-based network communication, as covered in the course?",
          options: [
            "import networking",
            "import socket",
            "import network",
            "from io import socket"
          ],
          correct: 1,
          explanation: "Python's built-in `socket` module provides access to the BSD socket interface. You use `import socket` to create TCP or UDP sockets, bind servers to ports, connect clients, and send/receive data. It is Python's low-level networking library, analogous to C's socket API.",
          optionExplanations: [
            "`import networking` is not a Python standard library module.",
            "Correct. Python's built-in `socket` module is used for low-level network programming.",
            "`import network` is not Python's standard networking module (it may exist in MicroPython for IoT).",
            "`from io import socket` is invalid syntax for importing the socket module."
          ]
        },
        {
          question: "What is the OSI model, and how many layers does it have?",
          options: [
            "Object Serialization Interface — 5 layers for data conversion",
            "Open Systems Interconnection — 7 layers describing network communication protocols",
            "Object Stream Interface — 4 layers for socket programming",
            "Open Socket Interface — 3 layers for client-server communication"
          ],
          correct: 1,
          explanation: "The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes network communication into 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. Socket programming primarily operates at the Transport layer (Layer 4) using TCP or UDP, with application data at Layer 7.",
          optionExplanations: [
            "OSI does not stand for Object Serialization Interface and does not have 5 layers.",
            "Correct. OSI (Open Systems Interconnection) has 7 layers for standardizing network communication.",
            "Object Stream Interface is not a network model.",
            "Open Socket Interface is not a standard network model; OSI has 7 layers, not 3."
          ]
        },
        {
          question: "In asynchronous networking with Java NIO (Non-blocking I/O), what is the key advantage over traditional blocking I/O?",
          options: [
            "NIO uses TCP while traditional I/O uses UDP",
            "NIO allows a single thread to manage multiple channels without blocking, improving scalability",
            "NIO automatically compresses network data for faster transmission",
            "NIO provides encryption for all network communication"
          ],
          correct: 1,
          explanation: "Traditional Java I/O (ServerSocket) uses blocking operations — a thread blocks waiting for I/O. With many clients, you need many threads. Java NIO uses non-blocking channels and a `Selector` that allows one thread to monitor multiple channels, only processing those that have data ready. This dramatically improves scalability for high-traffic servers.",
          optionExplanations: [
            "Both traditional I/O and NIO support TCP and UDP.",
            "Correct. NIO's non-blocking I/O lets one thread manage many connections via a Selector, improving scalability.",
            "NIO does not provide automatic data compression.",
            "Encryption is handled by SSL/TLS (e.g., Java's SSLSocket), not NIO itself."
          ]
        },
        {
          question: "What is the purpose of `server.bind(('localhost', 8080))` in Python socket programming?",
          options: [
            "To connect the server to a remote host at address localhost:8080",
            "To associate the server socket with a specific network address and port to listen on",
            "To encrypt all communications on port 8080",
            "To create a new socket for each connection on port 8080"
          ],
          correct: 1,
          explanation: "`server.bind((host, port))` assigns a local address and port number to the server socket. Once bound, `server.listen()` can be called to start accepting connections. Without binding, the socket has no fixed address for clients to connect to. `('localhost', 8080)` means the server listens only on the local machine on port 8080.",
          optionExplanations: [
            "Connecting to a remote host is the CLIENT's `connect()` call; `bind()` is for the server's local address.",
            "Correct. `bind()` associates the server socket with a specific local IP and port for incoming connections.",
            "`bind()` has no encryption functionality; encryption requires SSL/TLS libraries.",
            "New sockets per connection are created by `accept()`, not `bind()`."
          ]
        },
        {
          question: "In the Java Swing GUI library, what class is typically used as the main window container?",
          options: [
            "JButton",
            "JLabel",
            "JFrame",
            "JPanel"
          ],
          correct: 2,
          explanation: "`JFrame` is the top-level window container in Java Swing. It provides the window border, title bar, and the close/minimize/maximize buttons. All other Swing components (JButton, JLabel, JTextField, etc.) are added to the frame's content pane. `JPanel` is a generic container used inside a JFrame for grouping components.",
          optionExplanations: [
            "`JButton` is a button component, not a window container.",
            "`JLabel` is a text/image display component, not a window container.",
            "Correct. `JFrame` is the main window (top-level container) in Java Swing applications.",
            "`JPanel` is a mid-level container for grouping components within a JFrame, not the main window itself."
          ]
        },
        {
          question: "Which of the following best describes broadcasting in network programming?",
          options: [
            "Sending a message to one specific recipient",
            "Sending a message to all devices on a network segment simultaneously",
            "Encrypting a message before transmission",
            "Compressing data before sending over the network"
          ],
          correct: 1,
          explanation: "Broadcasting sends a message to ALL devices on a network segment (subnet) simultaneously using a broadcast address (e.g., 255.255.255.255 for limited broadcast). It contrasts with unicast (one-to-one) and multicast (one-to-group). UDP is typically used for broadcasting; TCP does not support broadcast.",
          optionExplanations: [
            "Sending to one specific recipient is unicast communication.",
            "Correct. Broadcasting sends to all devices on a network segment simultaneously.",
            "Encryption is a security operation, not a network addressing/delivery concept.",
            "Compression is a data optimization technique, not a network delivery concept."
          ]
        },
        {
          question: "In the Online Shopping Cart case study, what OOP concept is demonstrated when a null product is added, triggering `Caught exception: Cannot add null product`?",
          options: [
            "Inheritance — the null value inherits from Product",
            "Exception handling — throwing and catching a custom exception for invalid operations",
            "Polymorphism — the null product takes a different form",
            "Encapsulation — the null check is hidden inside a private method"
          ],
          correct: 1,
          explanation: "This demonstrates exception handling — the `addProduct()` method validates its input and throws a custom exception (like `IllegalArgumentException`) when null is passed. The calling code catches this exception and handles it gracefully. This is the proper OOP way to handle invalid inputs rather than crashing or producing incorrect results.",
          optionExplanations: [
            "Null is not an instance of Product; no inheritance is involved.",
            "Correct. Throwing a custom exception on null input and catching it demonstrates exception handling.",
            "Polymorphism involves multiple forms of an object; null is not a polymorphic form of Product.",
            "While the check might be inside a method, the primary concept demonstrated is exception handling, not encapsulation."
          ]
        },
        {
          question: "What HTTP response code indicates a successful request in basic HTTP communication?",
          options: [
            "404",
            "500",
            "200",
            "301"
          ],
          correct: 2,
          explanation: "HTTP status code 200 (OK) indicates the request was successful and the server returned the requested content. 404 means Not Found, 500 means Internal Server Error, and 301 means Moved Permanently (redirect). In socket-based HTTP communication, parsing the response line for '200 OK' confirms success.",
          optionExplanations: [
            "404 means the requested resource was not found on the server.",
            "500 means the server encountered an internal error while processing the request.",
            "Correct. 200 OK means the HTTP request was processed successfully.",
            "301 Moved Permanently is a redirect response; the resource has moved to a new URL."
          ]
        },
        {
          question: "In the Mathematical Computation Framework case study, which OOP principle is demonstrated by having separate MatrixOperations, EquationSolver, and Statistics classes?",
          options: [
            "Polymorphism — each class solves the same problem in a different way",
            "Single Responsibility Principle / Modularity — each class has a distinct, focused responsibility",
            "Inheritance — all three classes inherit from a common math base class",
            "Encapsulation — all math operations are hidden in a single class"
          ],
          correct: 1,
          explanation: "Separating concerns into MatrixOperations (matrix math), EquationSolver (equations), and Statistics (statistical computations) follows the Single Responsibility Principle — each class has one clear purpose. This is a design principle closely tied to OOP modularity, making the framework easier to maintain, test, and extend.",
          optionExplanations: [
            "Polymorphism would apply if they all had a common interface solving a shared problem differently.",
            "Correct. Each class has a distinct responsibility — this is modularity / Single Responsibility Principle.",
            "Not necessarily — the case study describes separate independent classes, not an inheritance hierarchy.",
            "Encapsulation applies within each class; the concept described here is about division of responsibility."
          ]
        }
      ]
    },
    {
      name: "Unit 12: Comprehensive Review & PYQ-Style Questions",
      questions: [
        {
          question: "Which of the following best describes dynamic polymorphism?",
          options: [
            "Function overloading",
            "Operator overloading",
            "Method overriding with virtual functions",
            "Constructor overloading"
          ],
          correct: 2,
          explanation: "Dynamic polymorphism (runtime polymorphism) is achieved through method overriding combined with virtual functions. The correct overridden version is selected at runtime based on the actual object type (not the reference type). This is also known as late binding or Dynamic Method Dispatch. All of the other options are compile-time (static) polymorphism.",
          optionExplanations: [
            "Function overloading is resolved at compile time — it is static/compile-time polymorphism.",
            "Operator overloading is also compile-time polymorphism — the correct version is chosen at compile time.",
            "Correct. Method overriding with virtual functions achieves runtime (dynamic) polymorphism.",
            "Constructor overloading is compile-time polymorphism — the constructor is selected at compile time."
          ]
        },
        {
          question: "Which of the following best describes data hiding?",
          options: [
            "Using access specifiers to restrict access to class members",
            "Declaring all attributes as public",
            "Avoiding the use of constructors",
            "Using only static methods in a class"
          ],
          correct: 0,
          explanation: "Data hiding is the practice of restricting access to class internals using access specifiers (`private`, `protected`, `public`). By making data members private and providing public getter/setter methods, the class controls how its data is read and modified, preventing unauthorized or invalid access.",
          optionExplanations: [
            "Correct. Data hiding uses access specifiers to restrict who can access class members.",
            "Declaring all attributes as public is the OPPOSITE of data hiding — it exposes everything.",
            "Avoiding constructors has nothing to do with data hiding.",
            "Using only static methods does not constitute data hiding; access control is still needed."
          ]
        },
        {
          question: "Consider: a base class pointer `Base* ptr = new Derived();` where `show()` is a virtual function. What does `ptr->show()` call?",
          options: [
            "Base::show() because ptr is of type Base*",
            "Derived::show() because the actual object is of type Derived",
            "Both Base::show() and Derived::show() in sequence",
            "A compile error because Derived is assigned to Base*"
          ],
          correct: 1,
          explanation: "When a virtual function is called through a base class pointer, C++ uses the virtual function table (vtable) to dispatch the call to the actual object's type at runtime. Since the actual object is `Derived`, `Derived::show()` is called. This is the fundamental mechanism of C++ runtime polymorphism.",
          optionExplanations: [
            "Without `virtual`, Base::show() would be called (static binding). With `virtual`, the actual object's type governs.",
            "Correct. Virtual dispatch calls the Derived version because the actual object is of type Derived.",
            "Only one version is called — the one matching the runtime object type.",
            "Assigning a derived class pointer to a base class pointer is valid (upcasting) and requires no cast."
          ]
        },
        {
          question: "In C++, templates provide which of the following advantages over macros for generic programming?",
          options: [
            "Templates are processed at runtime; macros are processed at compile time",
            "Templates provide type safety and proper scoping; macros are simple text substitution without type checking",
            "Templates execute faster than macros in all cases",
            "Macros support type parameters; templates do not"
          ],
          correct: 1,
          explanation: "C++ macros are preprocessor text substitutions with no type checking — they can cause subtle bugs. Templates, while also processed at compile time, are type-safe, respect C++ scoping rules, participate in overload resolution, and work correctly with the debugger. Templates are the recommended alternative to macros for generic code.",
          optionExplanations: [
            "Both templates and macros are processed at compile time, not runtime.",
            "Correct. Templates are type-safe with proper scoping; macros are untyped text substitution.",
            "Performance depends on the specific use case; templates can be faster, equal, or slower than macros.",
            "Macros do NOT support type parameters in the way templates do; `#define MAX(a,b)` is untyped."
          ]
        },
        {
          question: "Which of the following correctly describes the difference between `std::map` and `std::unordered_map`?",
          options: [
            "map allows duplicate keys; unordered_map does not",
            "map is sorted by key in O(log n); unordered_map uses hashing for O(1) average lookup",
            "unordered_map maintains key order; map does not",
            "map uses linked lists; unordered_map uses arrays"
          ],
          correct: 1,
          explanation: "`std::map` is implemented as a balanced BST (red-black tree), keeping keys in sorted order and giving O(log n) for all operations. `std::unordered_map` uses a hash table, giving O(1) average complexity for lookups but no ordering. Choose map when you need sorted keys; unordered_map when you need fast lookups.",
          optionExplanations: [
            "Neither map nor unordered_map allows duplicate keys; for duplicates use multimap/unordered_multimap.",
            "Correct. map = sorted O(log n) BST; unordered_map = unsorted O(1) hash table.",
            "unordered_map does NOT maintain order; map maintains sorted key order.",
            "map uses a BST; unordered_map uses a hash table — neither uses a simple linked list or array directly."
          ]
        },
        {
          question: "In Java, which of the following is a checked exception?",
          options: [
            "ArithmeticException",
            "IOException",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException"
          ],
          correct: 1,
          explanation: "Checked exceptions extend `Exception` but NOT `RuntimeException`. They must be handled with `try-catch` or declared with `throws`. `IOException` is a classic checked exception — file/network operations can fail predictably, so the programmer must acknowledge this. The other three are unchecked runtime exceptions that the compiler does not force you to handle.",
          optionExplanations: [
            "ArithmeticException extends RuntimeException — it is an unchecked exception.",
            "Correct. IOException extends Exception (not RuntimeException) — it is a checked exception.",
            "NullPointerException extends RuntimeException — unchecked.",
            "ArrayIndexOutOfBoundsException extends RuntimeException — unchecked."
          ]
        },
        {
          question: "In C++, the scope resolution operator `::` is used for which purposes?",
          options: [
            "Only for defining constructors outside a class",
            "For defining member functions outside a class, accessing static members, and resolving namespace ambiguity",
            "Only for resolving ambiguity in multiple inheritance",
            "For creating pointers to class members"
          ],
          correct: 1,
          explanation: "The scope resolution operator `::` has multiple uses in C++: (1) Defining member functions outside the class body (`Class::method()`); (2) Accessing static class members (`Class::staticMember`); (3) Resolving namespace scope (`std::cout`); (4) Resolving ambiguity in multiple inheritance (`A::method()` vs `B::method()`).",
          optionExplanations: [
            "`::` is used for more than just constructors — it applies to all member functions and static members.",
            "Correct. `::` is multi-purpose: member function definition, static access, namespace resolution, ambiguity resolution.",
            "While it can resolve inheritance ambiguity, that is just one of several uses.",
            "Pointers to class members use a different syntax (`Class::*`) but `::` alone is broader."
          ]
        },
        {
          question: "Which design pattern would be most appropriate for implementing a logging system that should have exactly one logger throughout the entire application?",
          options: [
            "Observer pattern",
            "Factory pattern",
            "Singleton pattern",
            "Decorator pattern"
          ],
          correct: 2,
          explanation: "The Singleton pattern is ideal for a logger because: (1) Only one logger instance should exist (to avoid inconsistent log outputs), (2) It needs global access from any part of the application, and (3) The private constructor ensures no accidental creation of additional loggers. This is one of the most common real-world Singleton applications.",
          optionExplanations: [
            "Observer handles event notifications with multiple subscribers; it doesn't control the number of instances.",
            "Factory creates objects but doesn't restrict their count; multiple loggers could be created.",
            "Correct. Singleton ensures exactly one logger instance with global access — ideal for logging.",
            "Decorator adds behavior to existing objects; it doesn't control instance count."
          ]
        },
        {
          question: "A pure virtual function in C++ can be identified by which syntax?",
          options: [
            "virtual void func() { }",
            "void func() = 0;",
            "virtual void func() = 0;",
            "abstract void func();"
          ],
          correct: 2,
          explanation: "A pure virtual function has two requirements: (1) the `virtual` keyword in the base class, and (2) the `= 0` suffix in the declaration. Together: `virtual void func() = 0;`. This makes the class abstract. A function with just `virtual void func() {}` is a regular virtual function with an empty body — not pure virtual.",
          optionExplanations: [
            "`virtual void func() { }` is a regular virtual function with an empty implementation — NOT pure virtual.",
            "`void func() = 0;` is missing the `virtual` keyword — this is invalid syntax in C++.",
            "Correct. `virtual void func() = 0;` — both `virtual` and `= 0` are required for a pure virtual function.",
            "`abstract void func();` is Java syntax; C++ uses `virtual` + `= 0`, not the `abstract` keyword."
          ]
        },
        {
          question: "Consider this C++ code: `template<typename T> T swap(T& a, T& b){ T temp = a; a = b; b = temp; }`. What is true about this template function?",
          options: [
            "It only works for integer types",
            "It works for any type that supports copy assignment, instantiated at compile time for each used type",
            "It requires the types to implement an interface",
            "It creates one single version at runtime that works for all types"
          ],
          correct: 1,
          explanation: "This template swap function works for any type T that supports copy assignment (which covers all primitive types, std::string, user-defined classes with copy assignment, etc.). The compiler generates a specific version for each unique type T at compile time. C++ templates use compile-time code generation, not runtime type checking.",
          optionExplanations: [
            "The template T is not limited to integers; it works for float, string, user-defined types, etc.",
            "Correct. Template works for any copy-assignable type; the compiler generates type-specific code at compile time.",
            "C++ templates don't require implementing interfaces (unlike Java bounded generics); the type just needs to support the operations used.",
            "C++ templates generate MULTIPLE compile-time versions — one per type used. They don't create a single runtime version."
          ]
        },
        {
          question: "What is the output when the following C++ code runs: `class A { public: virtual void print() { cout << \"A\"; } }; class B : public A { public: void print() override { cout << \"B\"; } }; A* p = new B(); p->print();`",
          options: [
            "A",
            "B",
            "AB",
            "Compile error"
          ],
          correct: 1,
          explanation: "Since `print()` is declared `virtual` in class A and `p` holds a `B` object, virtual dispatch applies at runtime. The vtable for the `B` object points to `B::print()`, so `p->print()` calls `B::print()`, outputting 'B'. This demonstrates runtime polymorphism — the pointer type (A*) is irrelevant; the actual object type (B) determines the call.",
          optionExplanations: [
            "'A' would be the output only if `print()` were NOT virtual in A (static binding).",
            "Correct. Virtual dispatch selects B::print() because the actual object is of type B.",
            "Only one version is called — B::print(). The output is a single 'B'.",
            "This is valid C++ code demonstrating polymorphism; no compile error occurs."
          ]
        },
        {
          question: "Which of the following correctly differentiates between the three access specifiers in C++ regarding derived classes?",
          options: [
            "Public members are accessible everywhere; private members are accessible in derived classes; protected members are only accessible in the class itself",
            "Public members are accessible everywhere; private members are accessible only within the class; protected members are accessible within the class and derived classes",
            "All members are accessible everywhere regardless of the specifier in derived classes",
            "Private and protected members are both accessible in derived classes; public members are not"
          ],
          correct: 1,
          explanation: "The three access specifiers: Public — accessible anywhere (within class, derived classes, external). Protected — accessible within the class and its derived classes, but NOT from outside. Private — accessible only within the class itself, NOT in derived classes, NOT externally. This is a fundamental and frequently tested concept.",
          optionExplanations: [
            "This incorrectly swaps private and protected — private is class-only, protected includes derived classes.",
            "Correct. Public = anywhere; private = class only; protected = class + derived classes.",
            "Access specifiers strictly limit accessibility — they are not ignored in derived classes.",
            "Private members are NOT accessible in derived classes; that is the key difference between private and protected."
          ]
        },
        {
          question: "What is the purpose of the `extends` keyword in Java, and how does it differ from `implements`?",
          options: [
            "Both extend and implements do the same thing in Java",
            "`extends` is for class inheritance (one at a time); `implements` is for implementing interfaces (multiple allowed)",
            "`extends` is for implementing interfaces; `implements` is for class inheritance",
            "`extends` is used for abstract classes; `implements` is used for concrete classes"
          ],
          correct: 1,
          explanation: "In Java: `extends` creates a class-to-class (or interface-to-interface) inheritance — a class can `extend` only ONE class (single inheritance). `implements` creates a class-to-interface relationship — a class can `implement` MULTIPLE interfaces. Java uses this design to gain the benefits of multiple inheritance (via interfaces) while avoiding the diamond problem.",
          optionExplanations: [
            "They are distinct: `extends` = class/interface inheritance; `implements` = interface implementation.",
            "Correct. `extends` for one class parent; `implements` for one or more interfaces.",
            "These are swapped — `extends` is for class inheritance, `implements` is for interfaces.",
            "Both abstract and concrete classes use `extends` for inheritance; `implements` is for interfaces regardless."
          ]
        },
        {
          question: "In the context of the STL algorithm `std::transform`, which of the following correctly adds 0.5 to each magnitude in `std::vector<double> magnitudes` and stores results in `adjusted`?",
          options: [
            "std::replace(magnitudes.begin(), magnitudes.end(), 6.0, 6.5);",
            "std::transform(magnitudes.begin(), magnitudes.end(), adjusted.begin(), [](double mag){ return mag + 0.5; });",
            "adjusted = std::transform(magnitudes.begin(), magnitudes.end(), [](double mag){ return mag + 0.5; });",
            "std::replace_if(magnitudes.begin(), magnitudes.end(), [](double m){ return m >= 5.0; }, 5.5);"
          ],
          correct: 1,
          explanation: "`std::transform` requires: input range begin/end, output range begin (the destination), and a unary function (lambda). It applies the function to each element and writes to the output. `adjusted` must be pre-sized. This is exactly what the NPTEL Assignment 12 tested. Option C is syntactically invalid (transform doesn't return a container).",
          optionExplanations: [
            "`std::replace` replaces specific values, not applies arithmetic to all elements.",
            "Correct. `std::transform` with a lambda `return mag + 0.5` applies the operation and writes to `adjusted`.",
            "`std::transform` does not return a container; the result is written to the provided output iterator.",
            "`std::replace_if` replaces values satisfying a predicate with a fixed value — does not add 0.5 to each."
          ]
        },
        {
          question: "Which of the following correctly summarizes when to use a default constructor versus a parameterized constructor?",
          options: [
            "Default constructors are for C++; parameterized constructors are for Java",
            "Default constructors initialize with preset values (useful for default state); parameterized constructors initialize with user-provided values",
            "Default constructors are always generated by the compiler; parameterized constructors never are",
            "Both constructors always exist in every class; the programmer cannot control which is called"
          ],
          correct: 1,
          explanation: "Default constructors initialize objects with fixed default values (e.g., id=0, name='Unknown') — useful when you want a safe initial state without user input. Parameterized constructors accept arguments and initialize members with specific user-provided values. Both can coexist (constructor overloading) in the same class.",
          optionExplanations: [
            "Both types are available in both C++ and Java — this is a language-agnostic concept.",
            "Correct. Default = preset initialization; parameterized = user-specified initialization.",
            "The compiler generates a default constructor ONLY if no constructor is defined by the programmer. Parameterized constructors must always be written by the programmer.",
            "Constructors are chosen based on the object creation call and its arguments; the programmer has full control."
          ]
        }
      ]
    }
  ]
};