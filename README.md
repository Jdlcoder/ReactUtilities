### `Antes de ejecutar este archivo y cargar nuevos documentos dentro de la coleccion items, deben borrar todos los documentos que ya hayan creado, para que luego no vayan a tener conflictos con la informacion de los diferentes productos.`

Para correr este proyecto es necesario:

1. Instalar los paquetes:
### `npm install`

2. Agregar su arreglo de productos en el archivo **'baseDeDatos.js'**
#### `Importante remover los campos de id`

3. En el archivo '.env' ubicado en el directorio raiz, definir sus credenciales

4. En el archvio 'json-to-firestore.js', en la linea #31, modificar el objeto **newProduct** con los mismo nombres de sus campos

5. Ubicarse en la terminal dentro de la carpeta *'exportar productos firebase'* y ejecutar el comando:

### `npm run upload`

Luego de ejecutar el archivo, revisar que se hallan creado los documentos dentro de firestore.
