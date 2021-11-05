document.addEventListener('DOMContentLoaded',e=>{

  //use event delegation to delete any number of delete buttons
  const uolist = document.querySelector('#book-list ul');

  uolist.addEventListener('click',e =>{
    if(e.target.className == 'delete'){
      const li=e.target.parentElement;
      uolist.removeChild(li);
    }
  });

  //add Books
  const addForm = document.forms['add-book'];

  addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

  //create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  //add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  uolist.appendChild(li);
  });

  //hide box
  const hideBox = document.querySelector('#hide');

  hideBox.addEventListener('change',e=>{
    if(hideBox.checked){
      uolist.style.display = 'none';
    }

    else{
      uolist.style.display = 'initial';
    }
  })

  //search-box filter'
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup',e=>{
    const term = e.target.value.toLowerCase();
    const books = uolist.getElementsByTagName("li");
    Array.from(books).forEach(book=>{
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().search(term) != -1){
        book.style.display = 'block';
      }
      else{
        book.style.display = 'none';
      }
    });
  });

  //tabbed Content
const tabs = document.querySelector('#tabbed-content .tabs');
const panels = document.querySelectorAll('#tabbed-content .panel');

tabs.addEventListener('click', e => {
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
            if(panel == targetPanel){
              panel.classList.add('active');
            }else{
              panel.classList.remove('active');
            }
          });
        }
      });

});
