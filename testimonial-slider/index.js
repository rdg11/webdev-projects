const testimonials = [
    {
        name: "Fleurette M.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "I could probably go into sales for you. Since I invested in Dolphin I made over 100,000 dollars profits. Definitely worth the investment."
    },
    {
        name: "Samara O.",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "Your company is truly upstanding and is behind its product 100%. Dolphin did exactly what you said it does. It's exactly what I've been looking for. It's incredible."
    },
    {
        name: "Shannah Y.",
        photoUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "Dolphin is great. Best. Product. Ever! I use Dolphin often. Thanks Dolphin!"
    },
    {
        name: "Baldwin U.",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "I wish I would have thought of it first. I just can't get enough of Dolphin. I want to get a T-Shirt with Dolphin on it so I can show it off to everyone. I would like to personally thank you for your outstanding product."
    },  
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    }, 5000)
}