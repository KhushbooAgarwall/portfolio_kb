// Theme
const $themeBtn = document.querySelector('[data-theme-btn]');
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem('theme')){
    $HTML.dataset.theme = sessionStorage.getItem('theme');
}
else{
    $HTML.dataset.theme = isDark ? 'dark' : 'Light';
    // sessionStorage.setItem('theme', $HTML.dataset.theme);
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    sessionStorage.setItem('theme', $HTML.dataset.theme)
}

$themeBtn.addEventListener('click', changeTheme);

// Tab
const $tabBtn = document.querySelectorAll('[data-tab-btn]');
let [lastActiveTab] =document.querySelectorAll('[data-tab-content]');
let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener('click', function(){
        lastActiveTab.classList.remove('active');
        lastActiveTabBtn.classList.remove('active');

        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add('active');
        this.classList.add('active');

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});

// Email
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("LHrh_WnAcgENWNsYo");

  const form = document.querySelector(".input-wrapper");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_khi1txj", "template_0ydvf9k", this)
        .then(function (response) {
          alert("Message sent successfully!");
          form.reset();
        }, function (error) {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        });
    });
  }
});
