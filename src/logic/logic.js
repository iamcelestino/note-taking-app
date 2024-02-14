import "./Styles/stylesheet.css";

class Note {
    constructor(noteContainer, noteTitle, noteDescription){
        this.noteContainer = noteContainer;
        this.title = noteTitle;
        this.description = noteDescription;
    }
    addNote() {
        const html = `
        <h6 class="note_title">${this.title}</h6>
        <p class="note__description">${this.description}</p>
        <div class="actions">
            <ion-icon name="trash-outline"></ion-icon>
            <ion-icon name="create-outline"></ion-icon>
        </div>
        `
        this.noteContainer.innerHTML += html;
    }
}

export {Note as default };