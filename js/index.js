const grande = document.querySelector('.menu__contenedor-grande');
	const puntos = document.querySelectorAll('.punto');
	
	console.log(grande, puntos);
		   let contador=0;
		   console.log("contador fuera: "+contador)
	
				 
					   
				puntos[0].addEventListener('click', ()=>{
					
					puntos.forEach( (cadaPunto, i)=>{
						puntos[i].classList.remove('seleccionado');
					} )
					puntos[0].classList.add('seleccionado');
				   
					
					if(contador<=0){
						contador=contador+25;
					console.log(contador);
	
						if(contador== 25){
							contador=-75;
							grande.style.transform=` translateX(${contador}%)`;
						}
					grande.style.transform=` translateX(${contador}%)`;
					}
					
				});
				puntos[1].addEventListener('click', ()=>{
				 puntos.forEach( (cadaPunto, i)=>{
						puntos[i].classList.remove('seleccionado');
					} )
					puntos[1].classList.add('seleccionado');
					console.log(contador);
					if(contador>= -50){
						contador= contador-25;
						console.log(contador);
						if(contador== -100){
							contador=0;
							grande.style.transform=` translateX(${contador}%)`;
						}
						grande.style.transform=` translateX(${contador}%)`;
					  
					 
					}
					else{
						contador=0;
					   console.log(contador);
					   grande.style.transform=` translateX(${contador}%)`;
					}
	
					
				});