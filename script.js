document.addEventListener('DOMContentLoaded',function(){
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name=document.getElementById('name').value||'';
      const email=document.getElementById('email').value||'';
      const message=document.getElementById('message').value||'';
      const subject=encodeURIComponent('Portfolio contact from '+(name||email||'Website'));
      const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
      window.location.href = 'mailto:sanvedya@example.com?subject='+subject+'&body='+body;
    });
  }
});
