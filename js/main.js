window.onload = () => {
  const skills = document.querySelectorAll('.about-me__skills li');
  let zIndex = 0;

  const showSkill = () => {
    [...skills].map((skill,i) => {
      setTimeout(() => {

        if (i === skills.length -1)  {
          showSkill();
        }

        zIndex++;
        skill.style.zIndex = zIndex;
      }, 1000 * i)
    });
  };

  showSkill();

}
