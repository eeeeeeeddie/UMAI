const items=document.querySelectorAll('.section,.store,.food-photo,.tokyo-placeholder');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.08});
items.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
