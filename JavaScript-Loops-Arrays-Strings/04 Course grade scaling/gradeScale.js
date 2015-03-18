'use strict';

/*
 You are given a JSON string containing an array of Students (Objects).Your task is to:

 scale their scores upwards by increasing them with 10%.
 After that you should add a field that shows whether the student has passed or failed the exam(passed exam means 100 or more points at the exam).
 Finally you should filter out only the students that have passed the exam and print them out sorted alphabetically.
 */

function gradeFilter(input) {
    input.forEach(function (obj) {
        //increasing them with 10%.
        obj.score = obj.score + (obj.score / 10);
        //add a field that shows whether the student has passed or failed the exam
        obj.hasPassed = obj.score >= 100;
    });
    //filter out only the students that have passed the exam
    input = input.filter(function (student) {
        return student.hasPassed;
    });
    //print them out sorted alphabetically.
    var output = input.sort(function(student1, student2) {
       return student1.name > student2.name;
    });
    console.log(output);
}

gradeFilter([
        {
            'name': 'Пешо',
            'score': 91
        },
        {
            'name': 'Лилия',
            'score': 290
        },
        {
            'name': 'Алекс',
            'score': 343
        },
        {
            'name': 'Габриела',
            'score': 400
        },
        {
            'name': 'Жичка',
            'score': 70
        }
    ]
);