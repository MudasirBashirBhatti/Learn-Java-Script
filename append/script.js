let btn = document.querySelectorAll('button');
let body = document.querySelector('body');
let parent = document.querySelector('.parent');
for (item of btn) {
    item.addEventListener('click', (e) => {
        let click = e.target;
        if(click.textContent == 'create'){
          const createElm =  document.createElement('div');
          createElm.classList.add('parent');
          createElm.innerHTML = `
          <div class="h1">Note Taking App</div>
        <textarea></textarea>`
         body.appendChild(createElm);
        }
    })
}