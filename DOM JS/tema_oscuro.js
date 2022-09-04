const d = document,
      ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"),
        $stage = d.querySelector(".stage"),
        $ball = d.querySelector(".ball");

    console.log($selectors);

    let moon = "🌛",
        sun = "🌞";

    const lightMode =()=>{
        $selectors.forEach((el) => el.classList.add(classDark));
        $stage.classList.toggle("stage-dark")
        $ball.classList.toggle("ball-dark")
        $themeBtn.textContent = sun;
        ls.setItem("theme","light")
    }
    const darkMode =()=>{
        $selectors.forEach((el) => el.classList.remove(classDark));
        $stage.classList.remove("stage-dark");
        $ball.classList.remove("ball-dark")
        $themeBtn.textContent = moon;
        ls.setItem("theme","dark")
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                lightMode();
            } else {
                darkMode();
            }
        }
    })
    d.addEventListener("DOMContentLoaded", (e)=>{
        //console.log(ls.getItem("theme"))
         if(ls.getItem("theme")===null) ls.setItem("theme","light");
         if(ls.getItem("theme")=== "light") lightMode();
         if(ls.getItem("theme")=== "dark") darkMode();
         
     })
}


