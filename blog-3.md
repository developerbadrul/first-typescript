### 3. Why Are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases

Type Guards are essential for ensuring type safety and preventing runtime errors in TypeScript applications. 


Typeof Type Guards: Typeof Type Guards check the type of a variable at runtime using the typeof operator.

example:

const logString = (value: unknown) => {
        if (typeof value === "string") {
            console.log(value);
        } else {
            console.log("Input is not a string");

        }
    }

    logString("Hello, TypeScript!")


instanceof: Checks if an object is an instance of a given constructor function or class. 

example: 

// Example: Instanceof Type Guard

exemlpe use in class

if (pet instanceof Bird) {
    pet.fly();
}

