const articleCss = document.querySelector('.article-css');
const articleHtml = document.querySelector('.article-html');
const changeArticle = document.querySelectorAll('.change-article')

const toggle = function () {
  articleCss.classList.toggle('hide');
  articleHtml.classList.toggle('hide');
}

changeArticle.forEach((btn) => {
  btn.addEventListener('click', toggle)
});


