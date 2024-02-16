import "./Styles/stylesheet.css";

class Note {
    constructor(container){
        this.contentContainer = container;
    }
    addNote(noteTitle, description) {
        localStorage.setItem('title', noteTitle)
        localStorage.setItem ('noteDescription', description);
        const html = `
        <div class="note__container">
            <h6 class="note_title">${localStorage.getItem('title')}</h6>
            <p class="note__description">${localStorage.getItem('noteDescription')}</p>
            <div class="actions">
                <ion-icon id="trash_delete" name="trash-outline"></ion-icon>
            </div>
        </div>
        `
        this.contentContainer.innerHTML += html;;
    }
    // upateColor(noteColors) {
    //     noteColors.addEventListener("click", event => {
    //         if (event.target.className === "bg-coral") {
    //            Array.from(this.contentContainer.children).forEach(item => {
    //                 if (item.className === "note__container") {
    //                     this.contentContainer.childNodes[3].classList.add('bg-coral');
    //                 }
    //            })
    //         }
    //     });
    // }
    deleteNote() {
      this.contentContainer.addEventListener("click", event => {
            const element = event.target.parentElement;
            if (event.target.id === "trash_delete") {
                element.parentElement.remove();
            }
      });
    }
}

export {Note as default };