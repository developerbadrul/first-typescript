{
    //
    interface Student {
        name: string,
        age: number,
        grades: number[]
    }

    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    }

    const calculateAverageGrade = (student: Student): number => {
        if (student.grades.length === 0) {
            return 0
        }


        const sum = student.grades.reduce((total, grade) => total + grade, 0);
        return sum / student.grades.length;
    }


    const averageGradeForBob = calculateAverageGrade(student1);
    console.log(averageGradeForBob);

    //
}