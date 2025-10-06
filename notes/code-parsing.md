**L'exécution d'un script JS dépend du navigateur/moteur utilisé mais suis ces étapes** :
1. Lecture.
2. Chargement par l'interpréteur (= parsing).
3. Exécution : process actuel où quelquechose se passe, où le code produit un effet.

**Les 2 parties sont exécutées côte à côte** :
- Interpréteur : charge les scripts et les lit, les transforme en byte code pour une exécution + facile. 
    > Il démarre l'exécution du script mais ligne par ligne d'une façon optimisée mais très lente.
    > Il transmet aussi le code octet au compilateur.
- Compilateur JiT (Just in Time) : traduit/compile le code JS interprété en langage machine (qui sera transmis à l'ordinateur qui l'exécutera) et l'exécute tandis que le code est en train d'être lu/exécuté.
    > Intégré au navigateur.
    > Très rapide.
    > Dans le v8 de Chrome, le nom du compilateur est 'turbo fan'.

# Moteur JS :
**Le moteur JS/navigateur applique quelques techniques d'optimisation pour accélerer la durée de l'exécution et de la compilation. Donc, le code non modifié entre la dernière exécution et l'exécution actuelle n'est pas nécessairement recompilé mais le code déjà compilé est repris encore à la place.**
> Des APIs sont intégrés aux navigateurs (ex : localisation de l'utiilisateur) en donnant des ponts de communication, des fonctions ou objets JS. Lorsque le code est interprété et compilé, le navigateur sais où trouver ces fonctions, ces APIs

**Dans le moteur JS/navigateur** :
- Heap : Allocation de mémoire à long terme > Stocke la donnée (ex : variables, fonctions...) en mémoire et gère l'accès à celle-ci.
- Stack : Contexte d'exécution (mémoire à court terme) > Gère le flux du programme (appels de fonction & communication). Lorsqu'il est exécuté, le navigateur/moteur pousse les affaires dans la stack sous forme d'une première gigantesque fonction anonyme contenant tout le script du fichier actuellement exécuté. Cette fonction anonyme est donc exécutée anonymement. Lorsque cette fonction n'est plus nécessaire, elle est détruite afin de libérer de l'espace mémoire. Au dessus de cette fonction dans la stack se trouvera la fonction actuellement exécutée et ainsi de suite dès qu'une nouvelle fonction est appelée. Lorsqu'une fonction retourne une valeur ou est finié d'être exécutée, elle est supprimée de la stack (mais pas du heap). La stack contrôle donc l'exécution des fonctions du script actuellement compilé => Flux d'exécution unique (single thread) : "une seule chose à la fois".
- Event loop : code asynchrone avec les event listeners par ex. Le navigateur communique avec le moteur qui est l'event loop > Un clic est une sorte d'information passée au navigateur qui alerte le moteur dès qu'un nouvel événement est déclenché par les listeners du code JS. Cette info est poussée au script grâce à l'event loop qui contrôle que l'événement poussé n'interrompe pas le flux du script qui est censé être exécuté.