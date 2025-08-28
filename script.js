
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());


const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(r => io.observe(r));


window.addEventListener('load', ()=>{
    const skills = document.querySelectorAll('.skill-box');
    skills.forEach((el,i)=> setTimeout(()=> el.classList.add('visible'), 250 + i*120));
});


emailjs.init('yPs9cMJHVdW-3kf8m');

const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    
    const data = {
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value
    };

    //emailjs
    emailjs.send('service_etnp45k', 'template_jriyx6a', data) 
      .then(() => {
        formAlert.style.display = 'block';
        formAlert.className = 'alert alert-success';
        formAlert.textContent = 'Message sent!';
        contactForm.reset();
      })
      .catch(err => {
        formAlert.style.display = 'block';
        formAlert.className = 'alert alert-danger';
        formAlert.textContent = 'Failed to send: ' + err.text;
        console.error('EmailJS Error:', err);
      });
  });
}


// (function(){
//   const canvas = document.getElementById('waveCanvas');
//   if(!canvas) return;
//   const ctx = canvas.getContext('2d');
//   let w = canvas.width = innerWidth;
//   let h = canvas.height = innerHeight;
//   let t = 0;

//   window.addEventListener('resize', ()=>{ w = canvas.width = innerWidth; h = canvas.height = innerHeight; });

//   function wave(yOffset, speed, amp, colorStop){
//     ctx.beginPath();
//     ctx.moveTo(0, h);
//     for(let x=0;x<=w;x+=1){
//       const y = Math.sin((x*0.008)+t*speed) * amp + (h*0.5) + yOffset;
//       ctx.lineTo(x,y);
//     }
//     ctx.lineTo(w, h);
//     ctx.closePath();
//     const grad = ctx.createLinearGradient(0,0,w,h);
//     grad.addColorStop(0, 'rgba(0,212,255,0.02)');
//     grad.addColorStop(1, 'rgba(123,97,255,0.02)');
//     ctx.fillStyle = grad;
//     ctx.fill();
//   }

//   function render(){
//     ctx.clearRect(0,0,w,h);
//     ctx.globalCompositeOperation = 'lighter';
//     wave(-60, 0.8, 40);
//     wave(40, 1.2, 60);
//     wave(120, 1.6, 80);
//     t += 0.02;
//     requestAnimationFrame(render);
//   }
//   render();
// })();


document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  });
});