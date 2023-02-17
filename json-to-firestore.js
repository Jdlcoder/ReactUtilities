const {initializeApp} = require("firebase/app");
const {getFirestore, collection, addDoc} = require("firebase/firestore");
const baseDeDatos = require("./baseDeDatos");

console.log('file working');

// Initialize Cloud Firestore through Firebase
//REMPLAZAR CON LAS CONFIGURACIONES DE SUS CUENTAS DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBT-OJyOeCFZBrR-XneWR78mTvFGEkj_xc",
    authDomain: "react-34880-61d40.firebaseapp.com",
    projectId: "react-34880-61d40",
    storageBucket: "react-34880-61d40.appspot.com",
    messagingSenderId: "27195071869",
    appId: "1:27195071869:web:1db89f6533f958bc444014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const queryColecction = collection(db,'listaProductos');

const callback = () =>{
    console.log('proceso completado exitosamente');
    process.exit();
}
let itemsProcessed = 0;

baseDeDatos.forEach((obj, index, array) => {
    //REMPLAZAR CON LOS NOMBRES DE SUS CAMPOS COMO ESTAN EN SU ARREGLO DE PRODUCTOS
    const newProduct = {
        title: obj.title,
        price: obj.price,
        pictureUrl: obj.pictureUrl,
        description: obj.description,
        category: obj.category,
        stock: obj.stock,
    }
    addDoc(queryColecction, newProduct)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            itemsProcessed++;
            if(itemsProcessed === array.length) {
              callback();
            }
        })
        .catch(error=> {
            console.error("Error adding document: ", error);
        })
});

//para comenzar a subir los documentos, ejecutar en la terminal de comandos
// npm install
// luego
// npm run upload