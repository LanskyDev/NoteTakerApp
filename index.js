const noteForm = $("#noteForm");
const noteTextarea = $("#noteTextarea");
const submitButton = $("#submitButton");
const notesContainer = $("#notesContainer");

const notesArray = [];

noteForm.on("submit", (e) => {
    e.preventDefault();
    const newNote = {
        id: 0,
        text: noteTextarea.val(),
        title: "Note 0",
    }
    notesArray.push(newNote);

    showNotes();
});


function showNotes() {

   notesContainer.children(':not(h2)').remove();

    notesArray.forEach((note, index) => {

        note.id = index;
        note.title = `Note ${++index}`

        const noteDiv = $("<div>");
            noteDiv.addClass('small-note');

        const noteTitle = $("<h3>").text(note.title);
        const noteTextSubstr = $("<p>").text(`${note.text.substr(0,15)}...`);
        const openModalBtn = $("<button>").text("See More");
            openModalBtn.addClass("btn btn-open");

            openModalBtn.on("click", () => {
                showMore(note.text);
            })

        notesContainer.append(noteDiv);
        noteDiv.append(noteTitle, noteTextSubstr, openModalBtn);
    })

    console.log(notesArray);
}

function showMore(noteText) {

    const modal = $("<section>").addClass("modal");
    const overlay = $("<div>").addClass("overlay");
    const closeModalBtn = $("<button>X</button>").addClass("btn btn-close");
    const noteModalText = $("<p>").addClass("modal-text").text(`${noteText}`);


    modal.append(closeModalBtn, noteModalText);
    notesContainer.append(modal, overlay);

    closeModalBtn.on("click", () => {
       closeModal();
    });

    overlay.on("click", () => {
        closeModal();
    })

}


function closeModal(){
    $(".modal, .overlay").remove();
}