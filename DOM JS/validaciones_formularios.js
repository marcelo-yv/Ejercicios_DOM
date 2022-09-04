const d = document;

export default function contactFormValidations(){

 const $form = d.querySelector(".contac-form"),
       $inputs = d.querySelectorAll(".contac-form [required]");

       console.log($inputs)

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contac-form-error","none")
        input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e)=> {
        if(e.target.matches(".contac-form [required]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
            // console.log($input)
            // console.log(pattern)

            if(pattern && $input.value !== ""){
                // console.log("input tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }

            if(!pattern){
                // console.log("input no tiene patron")
                return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    })

}