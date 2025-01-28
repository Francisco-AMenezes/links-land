function toggleMode(){
    const html = document.documentElement
 
    html.classList.toggle('light')
 
    const img = document.querySelector('#profile img')
 
    if(html.classList.contains('light')) {
      img.setAttribute('src', "./assets/logo-land.png")
      img.setAttribute('alt', "logo da LAND Audio.")   
 
    } else {
      img.setAttribute('src', "./assets/logo-land.png")
      img.setAttribute('alt', "logo da LAND Audio.")
 
    }
 
 
 }