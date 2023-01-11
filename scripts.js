
/* ************** HAMBURGER MENU ***************** */

(() => {

  const $btn = document.querySelector(".hamburger"),
    $menu = document.querySelector(".menu");
  
  document.addEventListener("click", e => {
    if (e.target.matches(".hambuger") || e.target.matches(`.hamburger *`)) {
      $btn.classList.toggle("is-active");
      $menu.classList.toggle("is-active");
    }
    if (e.target.matches(".menu a")) {
      $btn.classList.remove("is-active");
      $menu.classList.remove("is-active");
    }
  });

})();

/* ************* GAME ************* */

(() => {

  const $points = document.querySelector(".points"),
    $errors = document.querySelector(".errors");
   
  let point = 0,
    error = 0;
  
  
  const belgiumFlag = e => {
  
    if (e.target.matches(".belgium")) {
      document.removeEventListener("click", belgiumFlag);
      const $ball = document.querySelector(".country.belgium");

      //Open question
      const $boxQuestion = document.querySelector(
        ".background-question.belgica"
      );
      $boxQuestion.classList.add("is-active");

      $boxQuestion.addEventListener("click", (e) => {
        if (e.target.matches(".choices li")) {
          if (e.target.matches(".correct")) {
            point += 1;
            $points.textContent = `${point}`;
            $boxQuestion.classList.remove("is-active");
            $ball.classList.add("goal");
            $ball.textContent = "GOAL";
            $ball.setAttribute("style", "cursor: auto");
          } else {
            error += 1;
            $errors.textContent = `${error}`;
            $boxQuestion.classList.remove("is-active");
            $ball.classList.add("saved");
            $ball.textContent = "SAVED :(";
            $ball.setAttribute("style", "cursor: auto");
          }
        }
      });
    }
  }

  const brazilFlag = e => {

    if (e.target.matches(".brazil")) {
        document.removeEventListener("click", brazilFlag);
        const $ball = document.querySelector(".country.brazil");

        //Open question
        const $boxQuestion = document.querySelector(
          ".background-question.brasil"
        );
        $boxQuestion.classList.add("is-active");

        $boxQuestion.addEventListener("click", (e) => {
          if (e.target.matches(".choices li")) {
            if (e.target.matches(".correct")) {
              point += 1;
              $points.textContent = `${point}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("goal");
              $ball.textContent = "GOAL";
              $ball.setAttribute("style", "cursor: auto");
            } else {
              error += 1;
              $errors.textContent = `${error}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("saved");
              $ball.textContent = "SAVED :(";
              $ball.setAttribute("style", "cursor: auto");
            }
          }
        });
    }
  }

  const englandFlag = e => {

    if (e.target.matches(".england")) {
        document.removeEventListener("click", englandFlag);
        const $ball = document.querySelector(".country.england");

        //Open question
        const $boxQuestion = document.querySelector(
          ".background-question.inglaterra"
        );
        $boxQuestion.classList.add("is-active");

        $boxQuestion.addEventListener("click", (e) => {
          if (e.target.matches(".choices li")) {
            if (e.target.matches(".correct")) {
              point += 1;
              $points.textContent = `${point}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("goal");
              $ball.textContent = "GOAL";
              $ball.setAttribute("style", "cursor: auto");
            } else {
              error += 1;
              $errors.textContent = `${error}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("saved");
              $ball.textContent = "SAVED :(";
              $ball.setAttribute("style", "cursor: auto");
            }
          }
        });
    }
  }

  const argentinaFlag = e => {

    if (e.target.matches(".argentina")) {
        document.removeEventListener("click", argentinaFlag);
        const $ball = document.querySelector(".country.argentina");

        //Open question
        const $boxQuestion = document.querySelector(
          ".background-question.argentina"
        );
        $boxQuestion.classList.add("is-active");

        $boxQuestion.addEventListener("click", (e) => {
          if (e.target.matches(".choices li")) {
            if (e.target.matches(".correct")) {
              point += 1;
              $points.textContent = `${point}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("goal");
              $ball.textContent = "GOAL";
              $ball.setAttribute("style", "cursor: auto");
            } else {
              error += 1;
              $errors.textContent = `${error}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("saved");
              $ball.textContent = "SAVED :(";
              $ball.setAttribute("style", "cursor: auto");
            }
          }
        });
    }
  }


  const germanyFlag = e => {

    if (e.target.matches(".germany")) {
        document.removeEventListener("click", germanyFlag);
        const $ball = document.querySelector(".country.germany");

        //Open question
        const $boxQuestion = document.querySelector(
          ".background-question.alemania"
        );
        $boxQuestion.classList.add("is-active");

        $boxQuestion.addEventListener("click", (e) => {
          if (e.target.matches(".choices li")) {
            if (e.target.matches(".correct")) {
              point += 1;
              $points.textContent = `${point}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("goal");
              $ball.textContent = "GOAL";
              $ball.setAttribute("style", "cursor: auto");
            } else {
              error += 1;
              $errors.textContent = `${error}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("saved");
              $ball.textContent = "SAVED :(";
              $ball.setAttribute("style", "cursor: auto");
            } 
          }
        });
      }
  }

  const mexicoFlag = e => {

    if (e.target.matches(".mexico")) {
        document.removeEventListener("click", mexicoFlag);
        const $ball = document.querySelector(".country.mexico");

        //Open question
        const $boxQuestion = document.querySelector(
          ".background-question.mexico"
        );
        $boxQuestion.classList.add("is-active");

        $boxQuestion.addEventListener("click", (e) => {
          if (e.target.matches(".choices li")) {
            if (e.target.matches(".correct")) {
              point += 1;
              $points.textContent = `${point}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("goal");
              $ball.textContent = "GOAL";
              $ball.setAttribute("style", "cursor: auto");
            } else {
              error += 1;
              $errors.textContent = `${error}`;
              $boxQuestion.classList.remove("is-active");
              $ball.classList.add("saved");
              $ball.textContent = "SAVED :(";
              $ball.setAttribute("style", "cursor: auto");
            }
          }
        });
      }
  }


  document.addEventListener("click", belgiumFlag);
  document.addEventListener("click", brazilFlag);
  document.addEventListener("click", englandFlag);
  document.addEventListener("click", argentinaFlag);
  document.addEventListener("click", germanyFlag);
  document.addEventListener("click", mexicoFlag);

  

})();









