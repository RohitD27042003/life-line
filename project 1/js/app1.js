console.log('magic Notes aap project prectice number 22');
showNotes();
//if user adds a note it to the localstorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }

    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);

    showNotes();

})

//function to show element from localstorage

function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notes = [];
    }

    else {
        notesobj = JSON.parse(notes)
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` 
        <div class="notecard mx-2 card" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title">${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-primary">Delete Note</a>
        </div>
      </div> `;



    });

    let notesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show!Use "Add a Node"section above to add notes`;
    }
}


//function to deleate a note

function deleteNote(index) {
   // console.log('I am deleting', index)

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notes = [];
    }

    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputval = search.value.toLowerCase();

    //console.log('Input event fired', inputval);

    let notecard = document.getElementsByClassName('notecard');

    Array.from(notecard).forEach(function (element) {

        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inputval)) {

            element.style.display = "block";

        }

        else {
            element.style.display = "none";
        }



        //console.log(cardTxt);

    })

})



