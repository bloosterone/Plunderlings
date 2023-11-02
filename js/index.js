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

const controlador_vertical = document.querySelector('.controlador_vertical');
const botones = document.querySelectorAll('.btn');
let cont=0;

				botones[0].addEventListener('click', ()=>{
					console.log("boton 1");
					botones.forEach( (cadaPunto, i)=>{
						botones[i].classList.remove('btn_selec');
					} );
					botones[0].classList.add("btn_selec");
					cont=0;
	
						// if(contador== 25){
						// 	contador=-75;
						// 	controlador_vertical.style.transform=` translateY(${contador}%)`;
						// }
					controlador_vertical.style.transform=` translateY(${cont}%)`;
					

				});
				botones[2].addEventListener('click', ()=>{
					console.log("boton 2");
					botones.forEach( (cadaPunto, i)=>{
						botones[i].classList.remove('btn_selec');
					} )
					botones[2].classList.add("btn_selec");
					
					cont = -25;
					console.log(cont)
					controlador_vertical.style.transform=` translateY(${cont}%)`;
				});
				botones[3].addEventListener('click', ()=>{
					console.log("boton 3");
					botones.forEach( (cadaPunto, i)=>{
						botones[i].classList.remove('btn_selec');
					} )
					botones[3].classList.add("btn_selec");
					cont = -50;
					console.log(cont)
					controlador_vertical.style.transform=` translateY(${cont}%)`;
				});
				botones[1].addEventListener('click', ()=>{
					console.log("boton 4");
					botones.forEach( (cadaPunto, i)=>{
						botones[i].classList.remove('btn_selec');
					} )
					botones[1].classList.add("btn_selec");
					cont = -75;
					console.log(cont)
					controlador_vertical.style.transform=` translateY(${cont}%)`;

				});