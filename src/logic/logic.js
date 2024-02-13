import "./Styles/stylesheet.css";

class Note {
    constructor(noteContainer, noteTitle, noteDescription){
        this.noteContainer = noteContainer;
        this.title = noteTitle;
        this.description = noteDescription;
    }
    addNote() {
        console.log(this.noteContainer)
    }
}

export {Note as default };