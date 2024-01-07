const tabsButtons = document.querySelectorAll('.profile-menu-button');
const tabsItems = document.querySelectorAll('.tab-item');

tabsButtons.forEach(onTabClick);

function onTabClick(btn) {
  btn.addEventListener('click', () => {
    let currentBtn = btn;

    if (!currentBtn.classList.contains('active')) {
      tabsButtons.forEach(btn => {
        btn.classList.toggle('active');
      })
  
      tabsItems.forEach(item => {
        item.classList.toggle('active')
      })
    }
  })
}