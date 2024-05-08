{
    //
    const logString = (value: unknown) => {
        if (typeof value === "string") {
            console.log(value);
        } else {
            console.log("Input is not a string");

        }
    }

    logString("Hello, TypeScript!")


    //
}