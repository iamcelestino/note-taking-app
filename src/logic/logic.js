import "./Styles/stylesheet.css";

class Note {
    constructor(container){
        this.contentContainer = container;
    }
    addNote(noteText) {
        const html = `
        <div class="note__container">
            <p class="note__description">${noteText}</p>
            <div class="actions">
                <ion-icon id="trash_delete" name="trash-outline"></ion-icon>
            </div>
        </div>
        `
        localStorage.setItem('html', html);
        this.contentContainer.innerHTML += localStorage.getItem('html');
    }
    setNoteColor(noteColors) {
        noteColors.addEventListener('click', event  => {
            const color = event.target.className;

            switch(color) {

                case 'bg-coral':
                    this.contentContainer.classList.add('bg-coral');
                break;

                case 'bg-aqua':
                    this.contentContainer.classList.add('bg-aqua');
                    break;

                case 'bg-green':
                    this.contentContainer.classList.add('bg-green');
                    break;

                case 'bg-yellow':
                    this.contentContainer.classList.add('bg-yellow');
                    break;
    
                default:
                    this.contentContainer.classList.add('bg-coral');
                    break;
            }

        })
    }
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