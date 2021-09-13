const notes = 
[
    {
        course: "Educacion Fisica",
        note:10,
        credits:2
    },
    {
        course: "Programacion",
        note:8,
        credits:5
    },
    {
        course: "Finanzas Personales",
        note:7,
        credits:5
    }
];

const notesWithCredits = notes.map(function(noteObject){
    return noteObject.note * noteObject.credits;
});

const sumOfNotesWithCredits = notesWithCredits.reduce(function(sum = 0, newVal){
    return sum + newVal;
});

const credits = notes.map(function(noteObject){
    return noteObject.credits;
});

const sumOfCredits = credits.reduce(function(sum = 0, newVal){
    return sum + newVal;
});

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredits / sumOfCredits;