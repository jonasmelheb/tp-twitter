
function modify (id) { 
    let touiteContent = document.getElementById(id);
    let touiteText = touiteContent.textContent;
    console.log(touiteText);
    if (touiteContent.classList.contains('unset')) {
        console.log(touiteText);
        touiteContent.innerHTML = touiteText;
        touiteContent.classList.remove('unset');
        touiteContent.classList.add('set');
    } else if (touiteContent.classList.contains('set')) {        
        touiteContent.classList.remove('set');
        touiteContent.classList.add('unset');
        let form = document.createElement('form');
        let formBtn = document.createElement('input');
        let textarea = document.createElement('textarea');
        textarea.setAttribute('name','touiteText');
        textarea.value = touiteText;
        formBtn.setAttribute('type','submit');
        formBtn.setAttribute('value','Modify');
        formBtn.setAttribute('class','bt-touite');
        form.setAttribute('method','post');
        form.setAttribute('class','touite-update-form');
        form.setAttribute('action',`/touites/form/update/${id}`);
        touiteContent.appendChild(form);
        form.appendChild(textarea);
        form.appendChild(formBtn);        
    }
}

// function modify (id){
    
// }