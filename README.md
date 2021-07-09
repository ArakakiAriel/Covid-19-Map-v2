# Covid-19-Map-v2 (https://arakakiariel.github.io/Covid-19-Map-v2/)
New repo creating the covid-19 tracker using react


## Despliegue de aplicación web 
- Para poder desplegar nuestra aplicación, una vez terminado el proyecto le damos al siguiente comando en nuestra terminal
```terminal
$ npm run build
```
- Esto nos va a crear una carpeta build dentro de nuestro proyecto

### Despliegue en Github Pages [(LINK)](https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git)
0. Verificar siempre el archivo index.html de la carpeta build, que las rutas href locales tengan el "." al principio sino va a romper cuando lo despleguemos porque no encuentra el archivo (ej: <link rel="icon" href="./favicon.ico" />)
1. Cambiamos el nombre de la carpeta ```build``` a ```docs```
2. En caso de no haber subido a Github el proyecto lo subimos, caso contrario igual pusheamos los cambios.
3. Vamos al repo donde tenemos nuestro proyecto dentro de Github y hacemos click en Settings.
4. Buscamos "GitHub Pages" => Branch Master y carpeta /docs
5. Guardamos los cambios