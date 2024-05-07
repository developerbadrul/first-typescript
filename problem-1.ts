{
    //
    type MyValue<T> = T;

    const repeatString = (firstValue: MyValue<string>, secondValue: MyValue<number>): MyValue<string> => {
        return firstValue.repeat(secondValue)
    }

    const result = repeatString("Hello!", 3)

    console.log(result);

    //
}