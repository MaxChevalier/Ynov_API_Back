# Ynov_API_Back

## Installation

### Configuration

-   Créer un fichier Config.js à la racine du projet et y ajouter les lignes suivantes :

```javascript
const IdDB = <nom_utilisateur>;
const PasswordDB = <mot_de_passe_utilisateur>;
export const HostDB = 'mongodb+srv://'+IdDB+':'+PasswordDB+'@cluster0.swu8zte.mongodb.net/';
exports.clientID = <client_id_google>;
exports.trefleToken = <token_trefle>;
```

- instaler les depandaces avec la commande 
```bash
cat requirements.txt | npm install -g
```
- lancer le serveur avec la commande 
```bash
npm start
```

### Utilisation

routes disponibles :

ip/api/user/login => connexion utilisateur (POST) body : {email: <email>, password: <password>}
ip/api/user/register => inscription utilisateur (POST) body : {email: <email>, password: <password>, name: <name>}

ip/api/flowers/ => liste des fleurs (GET)
ip/api/flowers/:id => fleur par id (GET)
ip/api/flowers/:id => supprime une fleur par id (DELETE)
ip/api/flowers/:id => modifie une fleur par id (PUT) : body : {name: <name>, description: <description>, trefle_id: <trefle_id>}
ip/api/flowers/ => cree fleur par id (POST) : body : {name: <name>, description: <description>, trefle_id: <trefle_id>}

ip/api/shop/ => liste des magasin (GET)
ip/api/shop/ => cree un magasin (POST) : body : {name: <name>, description: <description>, adress: <adress>, phone: <phone>, email: <email>, openingHours: <openingHours> workers: [<workers>]}
ip/api/shop/:id => magasin par id (GET)
ip/api/shop/:id => supprime un magasin par id (DELETE)
ip/api/shop/:id => modifie un magasin par id (PUT) : body : {name: <name>, description: <description>, adress: <adress>, phone: <phone>, email: <email>, openingHours: <openingHours> workers: [<workers>]}

ip/api/bouquets/ => liste des bouquets (GET)
ip/api/bouquets/ => cree un bouquet (POST) : body : {name: <name>, description: <description>, flowers: [<flowers>], price: <price>, quantity: <quantity>, shop: <shop>}
ip/api/bouquets/:id => bouquet par id (GET)
ip/api/bouquets/:id => supprime un bouquet par id (DELETE)
ip/api/bouquets/:id => modifie un bouquet par id (PUT) : body : {name: <name>, description: <description>, flowers: [<flowers>], price: <price>, quantity: <quantity>, shop: <shop>}