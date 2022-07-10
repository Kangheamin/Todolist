const addBtn = document.querySelector('.footer_button');
const input = document.querySelector('.footer_input');
const items = document.querySelector('.items');
const form = document.querySelector('.new_form');

form.addEventListener('submit' ,(event) => {
    event.preventDefault();
    onAdd();
});


function onAdd(){
    const text = input.value;
    
    if ( text === ''){
        input.focus();
      return;
    }

    const item = creatadd(text);
    items.appendChild(item);
    //새로 추가된 아이템으로 이동 스크롤링
    item.scrollIntoView({block:'center'});

    input.value = '';
    input.focus();
}

addBtn.addEventListener('click',()=>{
    onAdd();
});

let id = 0; //UUID 
function creatadd(text){
     const li = document.createElement('li');
     li.setAttribute('class','item_row');
     li.setAttribute('data-id', id);
     li.innerHTML= `
           <div class="item">
             <span class="item_name">${text}</span>
            <button class="item_delete"}>
            <i class="fas fa-trash-alt" data-id=${id}></i>
          </button>
         </div>
         <div class="item_divider" data-id=${id}></div>`
         id++;
         return li;
    // const div = document.createElement('div');
    // div.setAttribute('class','item');

    // const span = document.createElement('span');
    // span.setAttribute('class','item_name');
    // span.innerHTML = text;

    // const button = document.createElement('button');
    // button.setAttribute('class','item_delect');
    // button.innerHTML = '<i class="fas fa-trash-alt"></i>'
    // button.addEventListener('click',()=>{
    //     items.removeChild(li);
    // });

    // const divider = document.createElement('div');
    // divider.setAttribute('class', 'item_divider');

    // div.appendChild(span);
    // div.appendChild(button);
    // li.appendChild(div);
    // li.appendChild(divider);

     
};

items.addEventListener('click', event => {
   const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`li[data-id="${id}"]`);
        toBeDeleted.remove();
    }
    
});