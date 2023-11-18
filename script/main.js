function addQuestion() {
    // Preventing the default form submit action
    event.preventDefault();

    // Incrementing the question number
    const questionNumber = document.querySelectorAll('.container.mt-5').length + 1;

    // Creating a new section element
    const newSection = document.createElement('section');
    newSection.className = 'container mt-5';
    newSection.id = 'main-content';

    // Creating a div for the row
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    // Creating a div for the column
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-12';

    // Creating the question header
    const questionHeader = document.createElement('h3');
    questionHeader.textContent = `Question ${questionNumber-1}`;

    // Adding a line break
    colDiv.appendChild(document.createElement('br'));

    // Creating the form
    const form = document.createElement('form');
    form.id = `createKahootForm-${questionNumber}`; // Unique ID for each form

    // Creating the question input field
    const questionGroupDiv = document.createElement('div');
    questionGroupDiv.className = 'form-group';
    const questionInput = document.createElement('input');
    questionInput.className = 'form-control';
    questionInput.placeholder = `Question ${questionNumber}`;
    questionInput.required = true;
    questionInput.type = 'text';
    questionGroupDiv.appendChild(questionInput);

    // Adding the question input field to the form
    form.appendChild(questionGroupDiv);

    // Creating the grid for answers
    const gridDiv = document.createElement('div');
    gridDiv.style.display = 'grid';
    gridDiv.style.gridTemplateColumns = '1fr 1fr';
    gridDiv.style.gap = '30px';

    // Creating and adding answer inputs
    for (let i = 1; i <= 4; i++) {
        const answerGroupDiv = document.createElement('div');
        answerGroupDiv.className = 'form-group';
        const answerInput = document.createElement('input');
        answerInput.className = 'form-control';
        answerInput.placeholder = `Answer ${i}`;
        answerInput.required = true;
        answerInput.type = 'text';
        answerGroupDiv.appendChild(answerInput);
        gridDiv.appendChild(answerGroupDiv);
    }

    // Adding the grid to the form
    form.appendChild(gridDiv);

    // Append everything to the main div
    colDiv.appendChild(questionHeader);
    colDiv.appendChild(form);
    rowDiv.appendChild(colDiv);
    newSection.appendChild(rowDiv);

    // Appending the new section after the last existing section
    const mainContent = document.getElementById('main-content');
    mainContent.insertBefore(newSection, mainContent.firstChild);
}
