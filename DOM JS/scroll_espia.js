const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const cb =(entries)=>{
                // console.log("entries", entries);
               
                entries.forEach((entry)=>{
                // console.log("entry", entry);
                const id = entry.target.getAttribute("id");
                // console.log(id);
                if(entry.isIntersecting){
                    d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
                }else{
                    d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active"); 
                }

                w.addEventListener("visibilitychange", (e)=>
                d.visibilityState === "visible"
                ? entry.target.play()
                :entry.target.pause()
                );
               });

               
            };


        const observer = new IntersectionObserver(cb, {});

        $sections.forEach((el)=>observer.observe(el));

}
