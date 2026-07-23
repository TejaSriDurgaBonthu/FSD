
// 1. String: Storing text
let userName: string = "Alice";

// 2. Number: Storing numeric values (integers or decimals)
let userAge: number = 25;

// 3. Boolean: Storing true/false logic
let isMember: boolean = true;

console.log("Data type of userName is --> " + typeof userName); // Output: string
console.log("Data type of userAge is --> " + typeof userAge);   // Output: number
console.log("Data type of isMember is --> " + typeof isMember); // Output: boolean

// A simple function using these types
function displayUserProfile(
    name: string,
    age: number,
    active: boolean
): void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}

displayUserProfile(userName, userAge, isMember);

// --- WHY THIS MATTERS ---
// If you try to do this, TypeScript will show an error:
// userAge = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.