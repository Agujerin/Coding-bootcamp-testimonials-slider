const buttons = document.getElementById('btnContainer')
const sliderImage = document.getElementById('sliderImg')
const sliderText = document.getElementById('sliderText')
const sliderPersonal = document.getElementById('sliderPersonal')

const classes = ["next-image","prev-image"]

const tanya = {
    imgUrl: './images/image-tanya.jpg',
    text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    role: 'UX Engineer'
}

const john = {
    imgUrl: './images/image-john.jpg',
    text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer'
}

const slidesData = [tanya, john]
let slides = slidesData.length - 1
let sliderIndex = 0

buttons.addEventListener('click',(e)=>{
    if(e.target.id === "nextBtn" && sliderIndex < slides) {
        sliderIndex ++
        sliderImage.classList.remove(...classes)
        sliderImage.classList.add("next-image")
        sliderImage.setAttribute('src',`${slidesData[sliderIndex].imgUrl}`)  
        sliderText.textContent = slidesData[sliderIndex].text 
        sliderPersonal.innerHTML = `${slidesData[sliderIndex].name} <span>${slidesData[sliderIndex].role}</span>`
            
    }else if(e.target.id === "prevBtn" && sliderIndex > 0) {
        sliderIndex --
        sliderImage.classList.remove(...classes)
        sliderImage.classList.add("prev-image")
        sliderImage.setAttribute('src',`${slidesData[sliderIndex].imgUrl}`) 
        sliderText.textContent = slidesData[sliderIndex].text      
        sliderPersonal.innerHTML = `${slidesData[sliderIndex].name} <span>${slidesData[sliderIndex].role}</span>`    
        
    }else return
})

addEventListener('keydown',(e)=>{
    if(e.key === "ArrowRight" && sliderIndex < slides) {
        sliderIndex ++
        sliderImage.classList.remove(...classes)
        sliderImage.classList.add("next-image")
        sliderImage.setAttribute('src',`${slidesData[sliderIndex].imgUrl}`)  
        sliderText.textContent = slidesData[sliderIndex].text 
        sliderPersonal.innerHTML = `${slidesData[sliderIndex].name} <span>${slidesData[sliderIndex].role}</span>`
    }else if (e.key === "ArrowLeft" && sliderIndex > 0) {
        sliderIndex --
        sliderImage.classList.remove(...classes)
        sliderImage.classList.add("prev-image")
        sliderImage.setAttribute('src',`${slidesData[sliderIndex].imgUrl}`) 
        sliderText.textContent = slidesData[sliderIndex].text      
        sliderPersonal.innerHTML = `${slidesData[sliderIndex].name} <span>${slidesData[sliderIndex].role}</span>`    
        
    }else return
})