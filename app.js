let count = 0; // sets initial count

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn)
 {
     btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if (styles.contains("-2")){
            count = count-2;
        }
        else if (styles.contains("-")){
            count--;
        }
        else if (styles.contains("+")){
            count++;
        }
        else if (styles.contains("+2")){
            count = count+2;
        }
        else if (styles.contains("reset")){
            count = 0;
        }
        value.textContent = count;
     });
 });


