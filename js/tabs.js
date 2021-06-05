// ___________ТАБЫ____________
  
let activeBtnEl = document.querySelector('.js-active'); //переменной присваивается ссылка на элемент с классом ".js-active"
let activeTabEl = document.querySelector('.tab-content-active'); //переменной присваивается ссылка на элемент с классом ".tab-content-active"

document.querySelectorAll('.js-tabs').forEach(function(tabsBtn) { //для каждого элемента с классом .js-tabs вызывается функция с аргументом 'tabsBtn'

  tabsBtn.addEventListener('click', function(event) { //по событию 'click' на "tabsBtn" выполняется :  
    activeBtnEl.classList.remove('js-active'); //отключаем класс '.js-active'
    activeBtnEl = this; //присваиваем переменной новую ссылку (свершенное событие, т.е. активная кнопка)
    this.classList.add('js-active'); //добавляем класс на нажатую (активную) кнопку
    
    
    
    
    const path = this.dataset.path; //значение константы 'path' берется у события 'click'   

    activeTabEl.classList.remove('tab-content-active'); //отключение класса '.tab-content-active'
    activeTabEl = document.querySelector(`[data-target="${path}"]`); //переменная activeTabEl перенаправляется на селектор, на котором выполняется условие: атрибут 'data-target'='path'
    activeTabEl.classList.add('tab-content-active'); //и здесь же подключается класс 'tab-content-active' (включение соответствующего контента, относящегося к нажатой кнопке)
  })   
})