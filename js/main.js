window.onload = function() {
  let skills = document.querySelectorAll('.about-me__skills li');
  let zIndex = 0;

  function showSkill() {
    for(let i = 0; i <= skills.length; i++) {
      setTimeout(function() {
        if (i >= skills.length) {
          showSkill();
        }
        zIndex++;
        skills[i].style.zIndex = zIndex;
      }, 5000 * i);
    }
  }

  showSkill();
}
