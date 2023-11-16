const formbtn = document.getElementById("btn_form");

formbtn.addEventListener('click',()=>{
	document.getElementById("miFormulario").submit();
});

const typed = new Typed('#typed', {
    stringsElement: '#test',// ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 30, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 5, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
  });
  


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
const botones = document.querySelectorAll('.losh1');
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
				botones[1].addEventListener('click', ()=>{
					console.log("boton 2");
					botones.forEach( (cadaPunto, i)=>{
						botones[i].classList.remove('btn_selec');
					} )
					botones[1].classList.add("btn_selec");
					
					cont = -25;
					console.log(cont)
					controlador_vertical.style.transform=` translateY(${cont}%)`;
				});
				botones[2].addEventListener('click', ()=>{
					console.log("boton 3");
					botones.forEach( (cadaPunto, i)=>{
						botones[i].classList.remove('btn_selec');
					} )
					botones[2].classList.add("btn_selec");
					cont = -50;
					console.log(cont)
					controlador_vertical.style.transform=` translateY(${cont}%)`;
				});
				botones[3].addEventListener('click', ()=>{
					console.log("boton 4");
					botones.forEach( (cadaPunto, i)=>{
						botones[i].classList.remove('btn_selec');
					} )
					botones[3].classList.add("btn_selec");
					cont = -75;
					console.log(cont)
					controlador_vertical.style.transform=` translateY(${cont}%)`;

				});

