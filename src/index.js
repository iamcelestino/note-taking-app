import Note from "./logic/logic";

const form = document.querySelector("form");
const addNoteFormBox = document.querySelector('.addNote__form')
const contentContainer = document.querySelector(".content__container");
const noteColors = document.querySelector(".note__colors");
const noteContainer = document.querySelector('.note__container')
const errorMessageBox = document.querySelector('.empty__error');
const closeMessage = document.querySelector('.close__message')
const addBtn = document.querySelector(".add__note");

const note = new Note(contentContainer);

form.addEventListener("submit", event  => {

    event.preventDefault()
    const noteText = form.noteDescription.value;

    if (noteDescription.length === 0) {
       errorMessageBox.classList.add('active');
    }
    else {
        note.addNote(noteText);
       
        form.reset();
        addNoteFormBox.classList.remove('active');
    }
});

note.setNoteColor(noteColors);
note.deleteNote();

closeMessage.addEventListener('click', () => {
    errorMessageBox.classList.remove('active');
});

addBtn.addEventListener('click', () => {
    addNoteFormBox.classList.add('active');
});


