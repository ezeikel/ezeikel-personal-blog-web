window.onload = () => {
  const skills = document.querySelectorAll('.about-me__skills li');
  let index = 0;

  const showSkill = () => {
    [...skills].map((skill,i) => {
      setTimeout(() => {

        if (i === skills.length -1)  {
          showSkill();
        }

        index++;
        skill.style.zIndex = index;
      }, 1000 * i)
    });
  };

  showSkill();

}
