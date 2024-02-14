import "./Styles/stylesheet.css";

class Note {
    constructor(container){
        this.contentContainer = container;
    }
    addNote(note, description) {
        const html = `
        <div class="note__container">
            <h6 class="note_title">${note}</h6>
            <p class="note__description">${description}</p>
            <div class="actions">
                <ion-icon id="trash_delete" name="trash-outline"></ion-icon>
                <ion-icon name="create-outline"></ion-icon>
            </div>
        </div>
        `
        this.contentContainer.innerHTML += html;
    }
    deleteNote() {
      this.contentContainer.addEventListener("click", event => {
            const element = event.target.parentElement.parentElement;
            if (event.target.id === "trash_delete") {
                element.remove();
            }
      })
    }
}

export {Note as default };