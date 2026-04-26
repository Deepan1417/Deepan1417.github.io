const THEORY_DATA = {
  courseName: "Fundamentals of Object Oriented Programming",
  units: [
    {
      unit: 12,
      name: "Unit 12: Advanced Topics — Multithreading and Case Studies",
      topics: [
        {
          id: 1,
          title: "Multithreading Basics: Process, Thread & Concurrency",
          parts: {
            definition: "A Process is an independent executing program with its own isolated memory space. A Thread is a lightweight sub-process that shares the same memory and resources within that process. Concurrency is managing multiple tasks via rapid context switching, while Parallelism is executing multiple tasks literally simultaneously on multiple physical cores.",
            whyNeeded: [
              "Maximizes CPU utilization by preventing idle time.",
              "Ensures application responsiveness (e.g., keeping UI active while downloading data in the background).",
              "Enables heavy mathematical computations to be distributed across multiple CPU cores."
            ],
            intuition: "A Process is like an isolated house with its own resources. Threads are the rooms inside that house sharing the same plumbing and electricity. Concurrency is one chef rapidly switching between stirring soup and chopping veggies. Parallelism is two chefs working in the kitchen at the exact same time.",
            compileRuntime: "Multithreading behavior, thread scheduling, and context switching are entirely managed by the operating system's CPU scheduler at runtime.",
            memoryModel: "Processes have separate, isolated memory blocks. Threads share the exact same heap memory and data segments of their parent process, but maintain their own individual execution stacks.",
            commonMistakes: [
              "Confusing concurrency (the illusion of simultaneity via fast switching) with parallelism (actual simultaneous hardware execution).",
              "Assuming multithreading always speeds up execution (creating thousands of threads causes 'context-switching hell', which degrades performance).",
              "Failing to realize threads share memory, leading to accidental data corruption."
            ],
            mcqTrapZone: [
              {
                q: "Does concurrency require a multi-core processor?",
                a: "No. Concurrency handles multiple tasks through context-switching on a single core. Parallelism requires multiple physical cores."
              },
              {
                q: "What is the architectural difference between a process and a thread?",
                a: "A process has isolated memory; threads share the memory of their parent process."
              }
            ],
            miniQuiz: [
              "What is the primary difference between a process and a thread?",
              "Why is thread creation considered more 'lightweight' than process creation?",
              "How does concurrency differ from parallelism?"
            ],
            memoryTrick: "Process = Property (Isolated house). Thread = Tenant (Shares the house's resources)."
          }
        },
        {
          id: 2,
          title: "Thread Lifecycle & Instantiation",
          parts: {
            definition: "The thread lifecycle consists of distinct states: New (created but not started), Runnable (ready and waiting for CPU time), Running (actively executing), Blocked/Waiting (paused for a resource), and Terminated (execution complete).",
            whyNeeded: [
              "Provides a structured mechanism for the OS to manage and prioritize CPU time.",
              "Allows developers to monitor thread states and gracefully terminate background tasks.",
              "Prevents system crashes by managing how threads pause and resume safely."
            ],
            intuition: "Think of an actor in a play. New = hired but waiting offstage. Runnable = standing in the wings ready to enter. Running = acting on stage. Blocked = waiting for a prop. Terminated = role is finished and going home.",
            syntax: {
              cpp: "/* C++ Thread Creation */\n#include <thread>\nvoid myTask() { /* code */ }\nstd::thread t1(myTask);\nt1.join(); // Main thread waits for t1 to finish",
              java: "/* Java Thread Creation */\nThread t = new Thread(new Runnable() {\n  public void run() { /* code */ }\n});\nt.start(); // Transitions thread to Runnable state"
            },
            compileRuntime: "The state transitions (Runnable to Running to Blocked) are highly unpredictable and evaluated dynamically at runtime by the JVM or OS scheduler.",
            commonMistakes: [
              "Calling run() directly instead of start() in Java (run() executes sequentially in the main thread, defeating multithreading).",
              "Forgetting to call join() or detach() on a C++ std::thread before it goes out of scope, causing a runtime crash.",
              "Creating a new thread for every minor task instead of using a Thread Pool."
            ],
            mcqTrapZone: [
              {
                q: "In Java, what happens if you call thread.run() instead of thread.start()?",
                a: "The run() method executes normally but sequentially on the current main thread; no new background thread is created."
              },
              {
                q: "In C++, how do you guarantee the main program waits for thread t1 to finish?",
                a: "By explicitly calling t1.join()."
              }
            ],
            miniQuiz: [
              "What does the 'Runnable' state signify in a thread's lifecycle?",
              "What is the role of the start() method in Java?",
              "Why is a Thread Pool preferred over manually creating hundreds of new threads?"
            ],
            memoryTrick: "Don't just RUN, you must START the race (use start(), not run() to spawn threads)."
          }
        },
        {
          id: 3,
          title: "Synchronization & Race Conditions",
          parts: {
            definition: "A Race Condition occurs when multiple threads concurrently read and modify shared data, causing corruption. Synchronization solves this by enforcing mutual exclusion, ensuring only one thread accesses a critical section at a time.",
            whyNeeded: [
              "Prevents silent data corruption when multiple threads overwrite shared memory.",
              "Ensures thread-safe operations in critical systems like banking and inventory.",
              "Guarantees sequential consistency in parallel task execution."
            ],
            intuition: "A Race Condition is two people trying to withdraw the last $100 from a joint bank account at the exact same millisecond. Synchronization is the bank teller putting a 'Lock' on the account while dealing with the first person.",
            syntax: {
              cpp: "/* C++ Mutex & Lock Guard */\n#include <mutex>\nstd::mutex mtx;\nvoid safeIncrement() {\n  std::lock_guard<std::mutex> lock(mtx); // RAII locking\n  shared_counter++;\n}",
              java: "/* Java Synchronized Method */\npublic synchronized void safeIncrement() {\n  // Implicit monitor lock acquired\n  shared_counter++;\n}"
            },
            memoryModel: "When a thread acquires a lock (Mutex/Monitor), other threads reaching that code block are pushed into the Blocked state in memory until the lock is released.",
            commonMistakes: [
              "Forgetting to unlock a manually locked Mutex, causing the program to freeze.",
              "Using synchronization everywhere, which destroys concurrency and forces the program to run sequentially (lock contention).",
              "Assuming basic operations like count++ are thread-safe (they require multiple CPU cycles: read, increment, write)."
            ],
            mcqTrapZone: [
              {
                q: "Why is std::lock_guard preferred over mtx.lock() and mtx.unlock() in C++?",
                a: "lock_guard uses RAII; it automatically releases the lock when it goes out of scope, even if an exception is thrown, preventing permanent deadlocks."
              },
              {
                q: "Is standard HashMap thread-safe in Java?",
                a: "No. You must use ConcurrentHashMap to safely modify map data across multiple threads."
              }
            ],
            miniQuiz: [
              "What happens at the CPU level that causes a race condition during a simple count++ operation?",
              "What does the 'synchronized' keyword achieve in Java?",
              "How does a Mutex differ from an Atomic Variable?"
            ],
            memoryTrick: "Mutex = MUTual EXclusion. Only one VIP allowed in the room at a time."
          }
        },
        {
          id: 4,
          title: "Deadlocks & Semaphores",
          parts: {
            definition: "A Deadlock is a system freeze where two or more threads wait indefinitely for resources held by each other. A Semaphore is a synchronization tool that uses a counter to allow a strictly limited number of threads to access a shared resource.",
            whyNeeded: [
              "Understanding deadlocks is crucial for writing non-freezing, robust concurrent applications.",
              "Semaphores act as bouncers, managing resources with limited capacity (like database connection pools).",
              "Deadlock prevention strategies guarantee application uptime."
            ],
            intuition: "Deadlock is two people eating dinner; Person A has the knife, Person B has the fork, and neither will eat until they get the other tool. A Semaphore is a parking lot with exactly 3 spaces; the gate only opens if the counter shows a space is free.",
            compileRuntime: "Deadlocks are purely runtime logic failures and cannot be natively predicted or prevented by standard compilers.",
            commonMistakes: [
              "Acquiring multiple locks in different sequence orders across different threads (guarantees circular wait).",
              "Using a Mutex when a Semaphore was needed for a multi-capacity resource.",
              "Failing to implement timeout mechanisms for lock acquisitions."
            ],
            mcqTrapZone: [
              {
                q: "Which condition is an absolute requirement for a Deadlock to occur?",
                a: "Circular Wait (Thread A waits for B, Thread B waits for A) combined with Hold-and-Wait."
              },
              {
                q: "How does a Semaphore differ from a Mutex?",
                a: "A Mutex restricts access to exactly 1 thread. A Semaphore restricts access to 'N' threads based on its initialized counter limit."
              }
            ],
            miniQuiz: [
              "What is Circular Wait in the context of multithreading?",
              "How can enforcing a strict locking order prevent deadlocks?",
              "What happens if a thread calls acquire() on a Semaphore that currently has 0 permits?"
            ],
            memoryTrick: "Mutex = 1 Toilet Key. Semaphore = 3 Parking Spaces. Deadlock = 2 cars blocking each other in a 1-way alley."
          }
        },
        {
          id: 5,
          title: "Network Programming, Sockets & HTTP",
          parts: {
            definition: "Network Programming uses Sockets as endpoints for two-way communication between applications. HTTP is a stateless, application-layer protocol running over TCP, utilizing methods like GET and POST for RESTful API communication.",
            whyNeeded: [
              "Enables distributed systems, client-server architectures, and microservices.",
              "Sockets are the lowest-level foundation of all internet traffic (web browsers, multiplayer games).",
              "REST APIs standardize how different applications format and exchange data globally."
            ],
            intuition: "A Socket is like a telephone handset. 'bind()' is assigning a phone number to that handset. 'listen()' is turning the ringer on. 'accept()' is picking up the phone when it rings. 'connect()' is dialing someone else's number.",
            syntax: {
              cpp: "/* C++ Server Socket Lifecycle */\nint server_fd = socket(AF_INET, SOCK_STREAM, 0);\nbind(server_fd, (struct sockaddr*)&address, sizeof(address));\nlisten(server_fd, 3);\nint new_socket = accept(server_fd, ...);",
              java: "/* Java NIO Async Networking */\nServerSocketChannel server = ServerSocketChannel.open();\nserver.bind(new InetSocketAddress(8080));\nserver.configureBlocking(false); // Non-blocking mode",
              python: "# Python Client Socket\nimport socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.connect(('localhost', 8080))\ns.sendall(b'Hello Server!')"
            },
            memoryModel: "Sockets maintain internal OS-level memory buffers. 'recv()' extracts bytes from this incoming network card buffer into the application's RAM.",
            commonMistakes: [
              "Calling accept() before calling bind() and listen() on a server socket.",
              "Assuming HTTP remembers user data automatically (it is stateless; sessions require external handling like cookies).",
              "Using blocking I/O (java.io) for thousands of connections instead of non-blocking multiplexed I/O (java.nio Selectors)."
            ],
            mcqTrapZone: [
              {
                q: "What does the listen(1) integer argument specifically enforce in a server socket?",
                a: "It defines the backlog queue length—the maximum number of pending client connections the OS will hold before rejecting new clients."
              },
              {
                q: "What does HTTP being a 'stateless' protocol mean?",
                a: "Each request-response cycle is completely independent; the server retains no memory of previous requests."
              }
            ],
            miniQuiz: [
              "What is the exact sequence of standard library calls to initialize a C++ server socket?",
              "In Java, what is the difference between ServerSocket and Socket?",
              "In REST API principles, which HTTP methods map to Read and Create?"
            ],
            memoryTrick: "Server sequence: S-B-L-A (Socket, Bind, Listen, Accept). Client sequence: S-C (Socket, Connect)."
          }
        },
        {
          id: 6,
          title: "Case Studies: End-to-End OOP Applications",
          parts: {
            definition: "Case studies demonstrate the practical integration of core OOP principles (Inheritance, Polymorphism, Encapsulation) combined with advanced features (File I/O, Generics, Exceptions) to architect complete, modular, real-world systems.",
            whyNeeded: [
              "Bridges the gap between learning isolated syntax and designing large-scale software architectures.",
              "Demonstrates how to decouple complex logic using abstract classes and interfaces.",
              "Shows how to persist runtime memory states securely to hard drives via File I/O and Serialization."
            ],
            intuition: "Learning OOP syntax is like learning how to use a hammer, nails, and a saw. Case studies are the architectural blueprints showing how to combine those tools to build a functioning, sturdy house.",
            compileRuntime: "Architectural choices like Polymorphism resolve method calls dynamically at runtime, while Generics/Templates enforce strict type safety at compile time.",
            commonMistakes: [
              "Hardcoding complex logic with massive if-else statements instead of delegating behavior via Polymorphism.",
              "Failing to use memory-safe features (like std::shared_ptr in C++) when objects share lifecycles, leading to memory leaks.",
              "Writing tightly coupled code where the main function handles data parsing instead of creating modular, encapsulated classes."
            ],
            mcqTrapZone: [
              {
                q: "In the Hotel Reservation Case Study, how was memory for the Room objects safely managed?",
                a: "By using std::shared_ptr<Room>, which automates garbage collection via reference counting, preventing leaks when reservations are canceled."
              },
              {
                q: "In the Employee Payroll Java Case Study, how was dynamic salary calculation handled for different employee types?",
                a: "By utilizing Polymorphism; an abstract calculateSalary() method in the base class was uniquely overridden by Permanent, Contract, and Intern derived classes."
              }
            ],
            miniQuiz: [
              "How does the Java 'instanceof' keyword help when parsing generalized polymorphic arrays?",
              "What is the primary architectural benefit of saving object states via Serialization vs manual comma-separated text files?",
              "Why was std::unordered_map chosen over std::map for the Real-Time Stock Tracker case study?"
            ],
            memoryTrick: "Modularity = Many Classes. Extensibility = Inheritance/Polymorphism. Persistence = File I/O & Serialization.",
            compareTable: {
              headers: ["Case Study", "Core OOP Concept Used", "Data Persistence Strategy", "Advanced Feature Showcased"],
              rows: [
                ["Hotel Reservation (C++)", "Polymorphism (Dynamic room pricing)", "File handling (txt output)", "std::shared_ptr for memory safety"],
                ["Shopping Cart (Java)", "Inheritance (Product hierarchies)", "BufferedWriter (receipt export)", "Custom Exceptions (Null checks)"],
                ["Employee Payroll (Java)", "Interfaces (100% Abstraction)", "Serialization (Byte streaming)", "instanceof runtime type checking"],
                ["Image Classification (Python)", "Modularity (Encapsulated classes)", "File handling (predictions.txt)", "Integration with Pre-trained AI models"]
              ]
            }
          }
        }
      ]
    },
    {
      unit: 10,
      name: "Unit 10: Standard Template Library (STL)",
      topics: [
        {
          id: 1,
          title: "STL Containers: Sequence, Associative & Unordered",
          parts: {
            definition: "Containers are data structures that manage collections of objects. Sequence containers (vector, list, deque) store data linearly. Associative containers (set, map) store data in sorted trees using keys. Unordered containers (unordered_set, unordered_map) use hash tables for fast, randomized access.",
            whyNeeded: [
              "Eliminates the need to manually write complex data structures like linked lists or Red-Black trees from scratch.",
              "Provides highly optimized, memory-safe memory allocation dynamically.",
              "Offers uniform interfaces (like .size(), .empty()) across wildly different underlying data architectures."
            ],
            intuition: "A Vector is like a stack of plates (fast at the end). A List is a scavenger hunt where each clue points to the next (fast insertion anywhere). A Map is a dictionary organized alphabetically. An Unordered Map is a valet parking system using a ticket stub (hash) to instantly grab your car.",
            syntax: {
              cpp: "/* Sequence Container */\nstd::vector<int> v = {10, 20, 30};\n\n/* Associative Container */\nstd::set<int> s;\ns.insert(40); // Auto-sorts, rejects duplicates\n\n/* Unordered Container */\nstd::unordered_map<std::string, int> umap;\numap[\"Alice\"] = 25; // O(1) hash access",
              java: "/* Java equivalents (Collections Framework) */\nArrayList<Integer> list = new ArrayList<>();\nTreeSet<Integer> set = new TreeSet<>();\nHashMap<String, Integer> map = new HashMap<>();",
              python: "# Python equivalents\nmy_list = [10, 20, 30]\nmy_set = {10, 20, 30}\nmy_dict = {\"Alice\": 25}"
            },
            compileRuntime: "Templates for containers are instantiated at compile time, providing strict type safety. Dynamic memory expansion (like a vector doubling in capacity) occurs at runtime.",
            memoryModel: "Vectors use contiguous heap blocks. Lists allocate scattered nodes connected by dual pointers (prev/next). Sets/Maps build balanced binary trees in memory. Unordered Maps allocate an array of 'buckets' mapping to hash codes.",
            commonMistakes: [
              "Trying to use the index operator [] on a std::list (lists do not support direct access by index).",
              "Assuming an unordered_map will print its elements in the order they were inserted.",
              "Inserting duplicate keys into a std::set or std::map and expecting them to be stored (duplicates are ignored unless using multiset/multimap)."
            ],
            mcqTrapZone: [
              {
                q: "Which of the following is an associative container in STL?",
                a: "std::set. (Vectors, deques, and lists are sequence containers)."
              },
              {
                q: "Which container allows bidirectional iterators but does NOT support direct access by index?",
                a: "std::list (Doubly linked list)."
              }
            ],
            miniQuiz: [
              "What is the primary difference between std::set and std::multiset?",
              "Why might you choose an unordered_map over a standard map?",
              "Which sequence container allows fast insertion at both the front and the back?"
            ],
            memoryTrick: "Sequence = Straight line. Associative = Alphabetical (Tree). Unordered = Unpredictable (Hash).",
            compareTable: {
              headers: ["Feature", "Vector", "List", "Deque"],
              rows: [
                ["Memory Layout", "Contiguous block", "Scattered nodes", "Chunked arrays"],
                ["Random Access (v)", "Supported (O(1))", "Not supported", "Supported (O(1))"],
                ["Push/Pop Front", "Very slow (O(n))", "Very fast (O(1))", "Very fast (O(1))"]
              ]
            }
          }
        },
        {
          id: 2,
          title: "Iterators: Forward, Reverse & Inserters",
          parts: {
            definition: "Iterators are objects that act like pointers, allowing programs to safely traverse containers. They bridge the gap between containers and algorithms without exposing the container's internal memory layout.",
            whyNeeded: [
              "Provides a universal syntax (++it, *it) to loop through any container, whether it's an array or a complex tree.",
              "Establishes safe boundaries (begin and end) to prevent out-of-bounds memory crashes.",
              "Allows algorithms to operate generically on partial ranges of data."
            ],
            intuition: "An iterator is a digital cursor. begin() puts the cursor on the first letter. end() puts the cursor immediately AFTER the last letter (the blinking space). reverse_iterator reads the text right-to-left.",
            syntax: {
              cpp: "std::vector<int> vec = {10, 20, 30};\n\n/* Forward Iterator */\nfor(auto it = vec.begin(); it != vec.end(); ++it) {\n    std::cout << *it << \" \";\n}\n\n/* Reverse Iterator */\nfor(auto rit = vec.rbegin(); rit != vec.rend(); ++rit) {\n    std::cout << *rit << \" \";\n}",
              java: "/* Java Iterator */\nIterator<Integer> it = list.iterator();\nwhile(it.hasNext()) {\n    System.out.println(it.next());\n}"
            },
            compileRuntime: "Iterator types are deduced at compile-time (often heavily relying on the 'auto' keyword). Dereferencing an invalid iterator triggers a fatal runtime segmentation fault.",
            memoryModel: "Iterators wrap raw memory pointers. .end() acts as a strict memory boundary marker pointing to an invalid address exactly one step past the final valid element.",
            commonMistakes: [
              "Dereferencing the .end() iterator expecting the last element.",
              "Using arithmetic (it + 5) on a list iterator (lists only support stepping one-by-one via ++ or --).",
              "Thinking ++rit on a reverse iterator moves it to the right (it actually moves it backward toward the start of the container)."
            ],
            mcqTrapZone: [
              {
                q: "What does the rend() function return in an STL container?",
                a: "A reverse iterator pointing to the theoretical element BEFORE the first element."
              },
              {
                q: "If an element is not found using std::find, what does the function return?",
                a: "It returns the container's .end() iterator as a failure flag."
              }
            ],
            miniQuiz: [
              "What is the difference between begin() and rbegin()?",
              "Why must you use the * operator with an iterator to get its value?",
              "What happens if you run std::advance(it, 2) on a vector iterator?"
            ],
            memoryTrick: "begin() is the first bite. end() is the empty plate. rbegin() eats dessert first."
          }
        },
        {
          id: 3,
          title: "STL Algorithms",
          parts: {
            definition: "STL Algorithms are global, generic functions (like sort, find, count) that process sequences of data. They are heavily decoupled from containers and rely exclusively on iterators to access the data.",
            whyNeeded: [
              "Prevents developers from manually rewriting standard sorting or searching logic.",
              "Highly optimized by compiler engineers for maximum performance.",
              "Works uniformly across wildly different data structures via iterator abstraction."
            ],
            intuition: "If containers are cooking pots, and data is the food, Algorithms are the chefs. The chef (std::sort) doesn't care if the food is in a pan (vector) or a bowl (deque)—as long as the waiter (iterator) hands them the ingredients.",
            syntax: {
              cpp: "#include <algorithm>\nstd::vector<int> v = {40, 10, 30, 20};\n\n/* Modifying: Sorting */\nstd::sort(v.begin(), v.end());\n\n/* Non-Modifying: Find */\nauto it = std::find(v.begin(), v.end(), 30);\nif(it != v.end()) std::cout << \"Found: \" << *it;\n\n/* Modifying: Transform */\nstd::transform(v.begin(), v.end(), v.begin(), [](int x){ return x + 5; });"
            },
            compileRuntime: "Algorithms compile down to highly optimized loop structures. Custom comparator logic (like Lambda functions) is evaluated and inlined at compile-time.",
            memoryModel: "Non-modifying algorithms (find, count) only read values without shifting memory. Modifying algorithms (sort, replace, partition) actively shuffle or overwrite memory blocks within the container.",
            commonMistakes: [
              "Trying to use std::sort() on a std::list. (Lists don't support random access; you must use the list's member function list.sort()).",
              "Forgetting to capture variables properly when passing Lambda functions to algorithms.",
              "Not checking if an algorithm returned .end() before dereferencing the iterator."
            ],
            mcqTrapZone: [
              {
                q: "Which of the following is a non-modifying algorithm in STL?",
                a: "std::find() (Algorithms like sort, replace, and remove are modifying)."
              },
              {
                q: "What does the std::partition() algorithm do?",
                a: "It reorders elements so that those satisfying a specific condition come before those that do not."
              }
            ],
            miniQuiz: [
              "What is the default sorting order of std::sort?",
              "How does std::count differ from std::find?",
              "Why can't you use std::sort on a std::list?"
            ],
            memoryTrick: "Algorithms are verbs. Containers are nouns. Iterators are the grammar connecting them."
          }
        }
      ]
    },
    {
      unit: 11,
      name: "Unit 11: Design Patterns",
      topics: [
        {
          id: 1,
          title: "Creational Patterns: Singleton & Factory",
          parts: {
            definition: "Creational patterns abstract the object instantiation process. Singleton guarantees a class has exactly one instance and provides global access to it. Factory defines an interface for creating objects, but lets subclasses decide which concrete class to instantiate.",
            whyNeeded: [
              "Singleton manages shared global resources (like a database connection or logger) without wasting memory on duplicates.",
              "Factory decouples client code from knowing the exact classes being instantiated, enhancing code flexibility.",
              "Provides centralized control over the 'new' keyword."
            ],
            intuition: "Singleton is an office printer: everyone sends print jobs to the exact same physical machine. Factory is a coffee shop: you ask the barista for a 'Latte', and the barista handles the complex creation steps without you caring how it's done.",
            syntax: {
              cpp: "/* Singleton Pattern */\nclass Singleton {\nprivate:\n    static Singleton* instance;\n    Singleton() {} // Private Constructor\npublic:\n    static Singleton* getInstance() {\n        if (!instance) instance = new Singleton();\n        return instance;\n    }\n};\nSingleton* Singleton::instance = nullptr;",
              java: "/* Factory Pattern Snippet */\nProduct p = ProductFactory.createProduct(\"Electronics\");"
            },
            compileRuntime: "Factory relies heavily on runtime polymorphism—returning base class pointers that point to newly minted derived objects in dynamic memory.",
            memoryModel: "Singleton uses a static pointer that lives in the global data segment. Factory dynamically allocates memory on the heap (using 'new') and passes the pointer back to the client.",
            commonMistakes: [
              "Failing to implement thread-safety locks in a Singleton's getInstance() method, causing race conditions that create two instances.",
              "Forgetting to make the Singleton's constructor private, allowing clients to accidentally bypass the pattern.",
              "Creating massive if-else chains inside the client code instead of moving that logic into a Factory."
            ],
            mcqTrapZone: [
              {
                q: "What is the primary purpose of the Singleton pattern?",
                a: "To restrict a class to a single instance and provide global access to it."
              },
              {
                q: "Is the Factory pattern a structural or creational pattern?",
                a: "Creational. It creates objects without exposing instantiation logic."
              }
            ],
            miniQuiz: [
              "Why must the constructor of a Singleton be private?",
              "What does the Factory pattern return to the client?",
              "What happens if two threads call a naive Singleton's getInstance() simultaneously?"
            ],
            memoryTrick: "Singleton = SINGLE instance. Factory = Manufactures objects blindly for the client."
          }
        },
        {
          id: 2,
          title: "Behavioral Patterns: Observer",
          parts: {
            definition: "The Observer pattern establishes a one-to-many relationship where a central 'Subject' automatically notifies a list of registered 'Observers' whenever its internal state changes.",
            whyNeeded: [
              "Decouples publishers from subscribers (the subject doesn't need to know the specific concrete classes of its observers).",
              "Creates reactive, event-driven architectures (like UI buttons or live stock tickers).",
              "Eliminates the need for observers to constantly poll the subject asking 'Did you update yet?'"
            ],
            intuition: "It's like a YouTube subscription. The YouTuber (Subject) uploads a video. YouTube iterates through the subscriber list (Observers) and automatically pushes a notification to everyone's phone.",
            syntax: {
              cpp: "class Observer {\npublic: virtual void update(float temp) = 0;\n};\n\nclass Subject {\n    std::vector<Observer*> observers;\npublic:\n    void attach(Observer* o) { observers.push_back(o); }\n    void notify(float temp) {\n        for(auto o : observers) o->update(temp);\n    }\n};"
            },
            compileRuntime: "Observers register at runtime. Notifications use dynamic dispatch (virtual function calls) to trigger the specific update() logic of each unique observer at runtime.",
            memoryModel: "The Subject stores pointers/references to the Observers in a dynamic array (vector/list). If an observer is deleted from memory without detaching from the subject, the subject will hold a dangerous dangling pointer.",
            commonMistakes: [
              "Dangling Pointers: Destroying an observer object without calling subject.detach(), leading to segmentation faults during the next notification loop.",
              "Creating an infinite notification loop if an observer's update() method accidentally triggers another state change in the subject."
            ],
            mcqTrapZone: [
              {
                q: "Which of the following correctly implements the notify() method in a Subject?",
                a: "Iterating through the internal list of observers and calling their update() method."
              },
              {
                q: "What type of relationship does the Observer pattern form?",
                a: "A one-to-many dependency."
              }
            ],
            miniQuiz: [
              "What is the role of the 'attach' method?",
              "How does the subject communicate with the observers?",
              "Why is the Observer pattern considered a Behavioral pattern?"
            ],
            memoryTrick: "Subject = The Newsletter. Observers = The Mailing List."
          }
        },
        {
          id: 3,
          title: "Structural Patterns: Adapter, Decorator, Composite, Proxy",
          parts: {
            definition: "Structural patterns organize relationships between entities. Adapter bridges incompatible interfaces. Decorator dynamically wraps objects to add behavior. Composite builds part-whole tree hierarchies. Proxy controls or delays access to a heavy object.",
            whyNeeded: [
              "Adapter integrates legacy code with modern APIs.",
              "Decorator prevents a massive explosion of rigid subclasses by allowing modular, stackable features.",
              "Composite allows clients to treat individual files and entire nested folders with the exact same logic.",
              "Proxy saves memory by deferring the instantiation of heavy objects until the exact moment they are needed (Lazy Loading)."
            ],
            intuition: "Adapter = Travel plug converter. Decorator = Adding layers of clothing (jacket over shirt). Composite = A Russian nesting doll of files and folders. Proxy = A bouncer checking VIP lists before letting you into the real club.",
            syntax: {
              cpp: "/* Adapter Example */\nclass PrinterAdapter : public ModernPrinterInterface {\nprivate:\n    OldPrinter* oldPrinter;\npublic:\n    PrinterAdapter(OldPrinter* p) : oldPrinter(p) {}\n    void print() override { oldPrinter->legacyPrint(); }\n};"
            },
            compileRuntime: "Decorators and Adapters are wired together at runtime through composition (passing object pointers into constructors).",
            memoryModel: "Decorator relies on an object wrapping another object inside it via a pointer. Proxy holds a null pointer until requested, then allocates heap memory for the Real Subject.",
            commonMistakes: [
              "Confusing Decorator with Inheritance (Decorator wraps objects at runtime; inheritance rigidly locks them at compile-time).",
              "Using Proxy when a simple direct instantiation is cheap and fast, adding unnecessary architectural overhead."
            ],
            mcqTrapZone: [
              {
                q: "Which statement is true about the Adapter pattern?",
                a: "It allows a legacy object (like oldPrinter) to be used directly without any modifications to its original class."
              },
              {
                q: "What is the primary purpose of the Proxy pattern?",
                a: "To provide a surrogate or placeholder for another object to control access and defer instantiation."
              }
            ],
            miniQuiz: [
              "Which pattern would you use to add a scrollbar to a window dynamically?",
              "How does the Composite pattern treat leaf nodes vs branch nodes?",
              "What is the difference between Adapter and Proxy?"
            ],
            memoryTrick: "Adapter translates. Decorator dresses up. Composite branches. Proxy guards."
          }
        }
      ]
    }
  ]
};