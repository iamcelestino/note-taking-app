import Note from "./logic/logic";

const form = document.querySelector("form");
const addNoteFormBox = document.querySelector('.addNote__form')
const contentContainer = document.querySelector(".content__container");
const errorMessageBox = document.querySelector('.empty__error');
const closeMessage = document.querySelector('.close__message')
const addBtn = document.querySelector(".add__note");

const note = new Note(contentContainer);

form.addEventListener("submit", event  => {
    event.preventDefault()
    const title = form.title.value;
    const noteDescription = form.noteDescription.value;
    if (noteDescription.length === 0) {
       errorMessageBox.classList.add('active');
    }
    else {
        note.addNote(title, noteDescription)
        form.reset();
        addNoteFormBox.classList.remove('active');
    }
    // note.upateColor(noteColors);
});

note.deleteNote();

closeMessage.addEventListener('click', () => {
    errorMessageBox.classList.remove('active');
});

addBtn.addEventListener('click', () => {
    addNoteFormBox.classList.add('active');
});

note.upateColor(document.querySelector(".note__colors"));

