const contenedor_img = document.querySelector('.section__container-imagenes');

const menu_img2 = document.querySelectorAll(".checkbox2");

// Reemplaza "tuClase" con la clase que deseas seleccionar

// Define una función para manejar el evento
// Obtén todos los elementos que deseas poner a la escucha
 // Reemplaza "tuClase" con la clase que deseas seleccionar
 let miH1 = document.getElementById("mi-h1");
 let link = "https://raw.githubusercontent.com/bloosterone/Plunderlings/main/bd.json";
 botonRedireccionar.addEventListener('click', () => {
	// Redirige la nueva ventana a la URL deseada
	window.location.href = link;
  });


// Define una función para manejar el evento
function handleClick(event, index) {
	const clickedElement = event.target;
	// const backgroundImageURL = window.getComputedStyle(clickedElement).getPropertyValue('background-image');
	// const cleanURL = backgroundImageURL.replace('url("', '').replace('")', '');
	const url = 'https://raw.githubusercontent.com/bloosterone/Plunderlings/main/bd.json';
	fetch(url)
	.then(response => {
	  if (!response.ok) {
		throw new Error('No se pudo cargar el archivo JSON.');
	  }
	  return response.json();
	})
	.then(data => {
	  // El contenido del archivo JSON se almacena en la variable "data"
	  const imagenes = data.imagenes;
  
	  // Puedes acceder a las imágenes y sus títulos aquí
	  const imagenSeleccionada = imagenes[index];
	   // Usar el índice para acceder a la imagen específica
	//   console.log(`Título: ${imagenSeleccionada.titulo}`);
	//   console.log(`Ruta de la imagen: ${imagenSeleccionada.ruta}`);
	let rutadeimg = `${imagenSeleccionada.ruta}`;
		 link = `${imagenSeleccionada.link}`;
		const botonRedireccionar = document.getElementById('botonRedireccionar');
	  miH1.textContent = `${imagenSeleccionada.titulo}`;
	  $("#miImagen").css('transition', 'all 3s ease-in-out').attr("src",rutadeimg );
	  console.log(link);
	  botonRedireccionar.addEventListener('click', () => {
		
	

		// Redirige la nueva ventana a la URL deseada
		window.location.href = link;
	  });
	})
	.catch(error => {
	  console.error('Error al cargar el archivo JSON:', error);
	});
  
	
	
	// console.log("Seleccioné el elemento");
  
	// Remueve la clase "checkbox" de todos los elementos
	menu_img2.forEach((element) => {
	  element.classList.remove("checkbox");
	});
  
	// Agrega la clase "checkbox" al elemento clicado
	clickedElement.classList.add("checkbox");
  }
  
  // Recorre todos los elementos y agrega el controlador de eventos
  menu_img2.forEach((element, index) => {
	element.addEventListener('click', (event) => {
	  handleClick(event, index); // Pasa el índice como argumento
	});
  });
  


//----------------------FLECHAS--------------------

const grande2 = document.querySelector('.display');
	const puntos2 = document.querySelectorAll('.punto2');
	
	console.log(grande, puntos2);
		   let contador2=0;
		   console.log("contador2 fuera: "+contador2)
	
				 
					   
				puntos2[0].addEventListener('click', ()=>{
					
					
					
					if(contador2<=0){
						contador2=contador2+25;
					    console.log(contador2);
	
						if(contador2== 25){
							contador2=-75;
							grande2.style.transform=` translateX(${contador2}%)`;
						}
					grande2.style.transform=` translateX(${contador2}%)`;
					}
					
				});
				puntos2[1].addEventListener('click', ()=>{
				 
					console.log(contador2);
					if(contador2>= -50){
						contador2= contador2-25;
						console.log(contador2);
						if(contador2== -100){
							contador2=0;
							grande2.style.transform=` translateX(${contador2}%)`;
						}
						grande2.style.transform=` translateX(${contador2}%)`;
					  
					 
					}
					else{
						contador2=0;
					   console.log(contador2);
					   grande2.style.transform=` translateX(${contador2}%)`;
					}
	
					
				});
