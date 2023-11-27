# Ynov_API_Back

## Installation

### Configuration

-   Créer un fichier Config.js à la racine du projet et y ajouter les lignes suivantes :

```javascript
const IdDB = <nom_utilisateur>
const PasswordDB = <mot_de_passe_utilisateur>
export const HostDB = 'mongodb+srv://'+IdDB+':'+PasswordDB+'@cluster0.swu8zte.mongodb.net/'
```