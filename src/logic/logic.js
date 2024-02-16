import "./Styles/stylesheet.css";

class Note {
    constructor(container){
        this.contentContainer = container;
    }
    addNote(noteTitle, description) {
        const html = `
        <div class="note__container">
            <h6 class="note_title">${noteTitle}</h6>
            <p class="note__description">${description}</p>
            <div class="actions">
                <ion-icon id="trash_delete" name="trash-outline"></ion-icon>
            </div>
        </div>
        `
        this.contentContainer.innerHTML += html;
    }
    deleteNote() {
      this.contentContainer.addEventListener("click", event => {
            const element = event.target.parentElement;
            if (event.target.id === "trash_delete") {
                element.parentElement.remove();
            }
      })
    }
}

export {Note as default };