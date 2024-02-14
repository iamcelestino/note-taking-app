import Note from "./logic/logic";

const form = document.querySelector("form");
const noteContainer = (document.querySelector(".note__container"));



form.addEventListener("submit", event  => {
    event.preventDefault()
    const title = form.title.value;
    const noteDescription = form.noteDescription.value;
    const note = new Note(noteContainer, title, noteDescription);
    note.addNote();
})