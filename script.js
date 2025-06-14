const btn = document.querySelector('.cta-button');
const modal = document.getElementById('btn-env');
btn.addEventListener('click', () =>{
    
    document.getElementById('modal').style.display = 'block';
    document.getElementById('madal').style.opacity = '1';
    document.getElementById('modalmodal').style.zIndex = '1000';
    document.getElementById('modalmodal').style.transition = 'all 5s';
    document.getElementById('modalmodal').style.backgroundColor = 'rgba(0,0,0,0.5)';
})

modal.addEventListener('click', ()  =>{
    
    location.reload();
})
