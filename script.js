const titleInput = document.querySelector(".note-title");
const textArea = document.querySelector(".text-area");
const addButton = document.querySelector(".submit-btn");
const notesContainer = document.querySelector(".notes-container");

function validnotes() {
    if (titleInput.value.trim() === "" || textArea.value.trim() === "") {
        alert("Please enter both title and note text");
        return false;
    }
    return true;
}

addButton.addEventListener("click", function () {
    if (validnotes()) {
        // Create Note Card
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");

        // Delete Button with SVG
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.setAttribute("aria-label", "Delete note");

        deleteBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke="currentColor"
           class="trash-icon">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 
                 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 
                 011 1v1H9V4a1 1 0 011-1z" />
      </svg>
    `;

        // Title
        const title = document.createElement("h3");
        title.textContent = titleInput.value;

        // Content
        const content = document.createElement("p");
        content.textContent = textArea.value;

        // Append
        noteCard.appendChild(deleteBtn);
        noteCard.appendChild(title);
        noteCard.appendChild(content);
        notesContainer.appendChild(noteCard);

        // Clear inputs
        titleInput.value = "";
        textArea.value = "";

        // Delete note on click
        deleteBtn.addEventListener("click", () => {
            noteCard.remove();
        });
    }
});




