import Note from "./logic/logic";

const form = document.querySelector("form");



form.addEventListener("submit", event  => {
    event.preventDefault()
    const title = form.title.value;
    const noteDescription = form.noteDescription.value;
    const note = new Note(title, noteDescription);
    note.addNote();
})