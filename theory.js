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
    }
  ]
};

