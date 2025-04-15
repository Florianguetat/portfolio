       // Sélectionner tous les titres de section
       const expandableTitles = document.querySelectorAll('.expandable');

       // Pour chaque titre de section, ajouter un écouteur d'événement pour le clic
       expandableTitles.forEach(title => {
           title.addEventListener('click', () => {
               // Chercher l'élément sibling suivant du titre cliqué
               const info = title.nextElementSibling;
               // Vérifier s'il s'agit d'une .hidden-info
               if (info && info.classList.contains('hidden-info')) {
                   // Basculer la classe 'active' pour afficher/cacher les informations
                   info.classList.toggle('active');
               }
           });
       });