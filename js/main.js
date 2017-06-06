window.onload = function() {
  let skills = document.querySelectorAll('.about-me__skills li');
  let zIndex = 0;

  function showSkill() {
    for(let i = 0; i <= skills.length -1; i++) {
      setTimeout(function() {
        if (i >= skills.length -1) { // TODO: Fix having to add blank li in html
          showSkill();
        }
        zIndex++;
        if(typeof skills[i] !== 'undefined') {
          skills[i].style.zIndex = zIndex;
        } else {
          debugger;
        }
      }, 1000 * i);
    }
  }

  showSkill();
}
