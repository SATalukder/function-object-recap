function gradeSystem(marks) {
    if (marks >= 80) {
        console.log("Yes, you got A+");
    }
    else if (marks >= 70 && marks < 80) {
        console.log("Yes, you got A");
    }
    else if (marks >= 65 && marks < 70) {
        console.log("Yes, you got A-");
    }
    else if (marks >= 60 && marks < 65) {
        console.log("Yes, you got B");
    }
    else if (marks >= 50 && marks < 60) {
        console.log("Yes, you got C");
    }
    else {
        console.log("Oh No, you got F");
    }
}

const mark = 70;
gradeSystem(mark);

function findGrade(marks) {
    switch (marks) {
        case 80:
            console.log("Yes, you got A+");
            break;
        case 70:
            console.log("Yes, you got A");
            break;
        case 65:
            console.log("Yes, you got A-");
            break;

        case 60:
            console.log("Yes, you got B");
            break;

        case 50:
            console.log("Yes, you got c");
            break;
        default:
            console.log("Oh No, you got F");

    }
}

findGrade(mark);
