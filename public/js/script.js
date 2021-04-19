
function modify (id) { 
    let touiteContent = document.getElementById(id);
    let touiteText = touiteContent.firstChild;
    console.log(touiteText);
    if (touiteContent.classList.contains('unset')) {
        touiteContent.classList.remove('unset');
        touiteContent.classList.add('set');
        touiteContent.removeChild(touiteContent.lastChild);
        touiteText.classList.remove('hide')
        touiteText.classList.add('show')
    } else if (touiteContent.classList.contains('set')) {        
        touiteContent.classList.remove('set');
        touiteContent.classList.add('unset');
        touiteText.classList.remove('show')
        touiteText.classList.add('hide')
        let form = document.createElement('form');
        let formBtn = document.createElement('input');
        let textarea = document.createElement('textarea');
        textarea.setAttribute('name','touiteText');
        textarea.value = touiteText.textContent;
        formBtn.setAttribute('type','submit');
        formBtn.setAttribute('value','Modify');
        formBtn.setAttribute('class','bt-touite');
        form.setAttribute('method','post');
        form.setAttribute('class','touite-form');
        form.setAttribute('action',`/touites/form/update/${id}`);
        touiteContent.appendChild(form);
        form.appendChild(textarea);
        form.appendChild(formBtn);                    
    }
}

// function modify (id){
    
// }