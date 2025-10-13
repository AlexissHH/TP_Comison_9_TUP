Isntalaccion de React Vite 

comando para crear un proyecto de React con Vite:

```bash
npm create vite@latest nombre-del-proyecto -- --template react
```
Luego, navega al directorio del proyecto:

```bash
cd nombre-del-proyecto
```
Instala las dependencias del proyecto:

```bash
npm install --- nuevo vite ya lo trae por defecto 
```
Finalmente, inicia el servidor de desarrollo:

```bash
npm run dev  ---esto iniciara el servidor de desarrollo y podras ver tu aplicacion en el navegador en la direccion http://localhost:5173

Arquitectura de carpetas y archivos

dentro de la carpeta src, que es donde se encuentra el codigo fuente de la aplicacion, veras las siguientes carpetas y archivos:

- assets: carpeta donde puedes almacenar imagenes, fuentes y otros recursos estaticos.
- components: carpeta donde puedes crear componentes reutilizables de React.
- App.jsx: archivo principal de la aplicacion, donde se define la estructura general.
- main.jsx: punto de entrada de la aplicacion, donde se monta el componente App en el DOM.
- styles: puedes crear una carpeta llamada styles para almacenar tus archivos CSS o usar CSS-in-JS segun tu preferencia.
- pages: si tu aplicacion tiene multiples paginas, puedes crear una carpeta llamada pages para organizar tus componentes de pagina.
- hooks: si utilizas hooks personalizados, puedes crear una carpeta llamada hooks para almacenarlos.
- utils: carpeta para funciones utilitarias y helpers que pueden ser usadas en diferentes partes de la aplicacion.
- services: si tu aplicacion interactua con APIs o servicios externos, puedes crear una carpeta llamada services para manejar esas interacciones.
- store: si utilizas un estado global (como Redux o Context API), puedes crear una carpeta llamada store para manejar el estado de la aplicacion.
- endpoints: si tienes multiples endpoints para consumir APIs, puedes crear una carpeta llamada endpoints para organizarlos.
- constants: carpeta para definir constantes que se usan en toda la aplicacion, como rutas, mensajes, etc.
- routes: si tu aplicacion utiliza enrutamiento (como React Router), puedes crear una carpeta llamada routes para definir las rutas de la aplicacion.
- layouts: si tienes diferentes layouts para distintas secciones de tu aplicacion, puedes crear una carpeta llamada layouts para organizarlos.
- RouteProtect: si tienes rutas protegidas que requieren autenticacion, puedes crear una carpeta llamada RouteProtect para manejar la logica de proteccion de rutas.

- creacion de componentes: para crear un componente en React, simplemente crea un archivo .jsx en la carpeta components y define tu componente como una funcion o una clase. Luego, puedes importar y usar ese componente en otras partes de tu aplicacion.

- DOM Virtual: es una representacion ligera del DOM real que React utiliza para optimizar las actualizaciones de la interfaz de usuario. Cuando el estado de un componente cambia, React crea una nueva version del DOM virtual y lo compara con la version anterior. Luego, solo actualiza las partes del DOM real que han cambiado, lo que mejora el rendimiento.

- props: son las propiedades que se pasan a los componentes para hacerlos mas dinamicos y reutilizables.
- drilling: es una tecnica que consiste en pasar datos desde un componente padre a un componente hijo a traves de props, y luego desde el componente hijo a sus propios hijos, y asi sucesivamente. Esto puede llevar a una estructura de componentes muy profunda y dificil de manejar.

- destructuring: es una caracteristica de JavaScript que permite extraer valores de objetos o arrays y asignarlos a variables de manera mas sencilla y legible. En el contexto de React, se utiliza comunmente para extraer props o estado en componentes funcionales.

- useState: es un hook de React que permite agregar estado a los componentes funcionales. Devuelve un par de valores: el estado actual y una funcion para actualizar ese estado.