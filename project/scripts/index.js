let titles = document.querySelectorAll('.title');
let blocks = document.querySelectorAll('.block');
let wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', classToggle, false);

function classToggle(event) {
  if (!event.target.classList.contains('title')) {
    return;
  }
  currentBlockClassList = event.target.parentNode.classList;
  isContainsClass = currentBlockClassList.contains('active-block');
  blocks.forEach(block => {
    block.classList.remove('active-block');
  });
  if (!isContainsClass) {
    currentBlockClassList.add('active-block');
  }
}
