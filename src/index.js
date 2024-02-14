import Note from "./logic/logic";

const form = document.querySelector("form");
const contentContainer = document.querySelector(".content__container");
const note = new Note(contentContainer);



form.addEventListener("submit", event  => {
    event.preventDefault()
    const title = form.title.value;
    const noteDescription = form.noteDescription.value;
    note.addNote(title, noteDescription);
    form.reset();
});

note.deleteNote();
