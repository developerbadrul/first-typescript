{
    //
    const reverseArray = <T>(value: T[]): T[] => {
        const reversedArray: T[] = [];
        
        for (let i = value.length - 1; i >= 0; i--) {
            reversedArray.push(value[i]);
        }
        return reversedArray;
    }

    const result = reverseArray([10, 20, 30])

    console.log(result);

    //
}