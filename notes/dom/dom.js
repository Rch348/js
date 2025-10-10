/**
 * DOM (Document Object Model) : créé et exposé par le navigateur à partir du code HTML.
 * - JS est un langage hébergé : le navigateur fournit l'environnement pour l'exécution du JS et le moteur JS qui analyse et comprend tout le code JS avant de l'exécuter.
 * - Le fichier de code HTML est téléchargé par le navigateur avant de l'afficher.
 * - Le navigateur met à disposition une fonctionnalité pour laisser JS interagir avec le code HTML affiché : le DOM.
 * - Le DOM est ce code HTML téléchargé et affiché ou + précisemment, la représentation d'objet de ce code que le navigateur crée derrière dans lequel on peut interagir avec JS.
 * - Ce 'document' est (un objet) le noeud racine DOM exposé par le navigateur > le + haut  point d'entrée pour accéder au code HTML depuis JS, fournissant diverses méthodes & fonctionnalités pour accéder aux éléments HTML, les requêter.
 * - L'objet 'window' est un objet global ayant le 'document' (ci-dessus) en tant que propriété : situé encore un niveau au dessus de 'document', donc l'objet global et le point d'entrée le + élevé réellement disponible dans JS, dans le navigateur avec lui aussi, des propriétés (ex. : window width) > Les navigateurs analysent toujours le code JS en ajoutant automatiquement l'objet 'window' devant les fonctions, peu importe où elles se trouvent (ex. : alert() revient à dire en réalité window.alert(), idem pour document).
 * - Le navigateur ne travaille pas avec le texte HTML mais avec les objets stockés en mémoire : les tags HTML sont transformés en noeuds d'éléments (element node) considérés comme des objets. En fonction de l'indentation des tags, le navigateur crée ainsi un arbre de noeuds (<html> étant le noeud d'élément au sommet). Entre les noeuds d'élément se trouvent des noeuds de texte (text node) faisant partie de cette arborescence symbolisant les espaces des indentations entre les noeuds d'élément.
 * - En + des noeuds élément, le contenu à l'intérieur de ces éléments pouvant être d'autres éléments mais aussi du texte stocké en tant qu'objets d'un genre différent avec différentes propriétés & méthodes.
 * - $0 : tapé dans la console du navigateur (Chrome dev tools) permet d'accéder au dernier élément sélectionné dans la tab 'Elements'.
 */

/**
 * console.dir() permet d'accéder aux propriétés/méthodes de l'objet passé en paramètre.
 */

/**
 * Requêter les éléments :
 * - querySelector() & getElementById() : sélectionnent 1 élément à la fois, retournent un seul élément > référence direct aux éléments du DOM.
 *  . querySelector() : prend un sélecteur/pseudo sélecteur CSS ('tag', '#', '.') et retournera toujours le 1° élément correspondant de la page car peut cibler plusieurs éléments en réalité.
 *  . getElementById() : prend un ID assigné à un élément HTML (retourne 1 seul élément car 1 seul ID par page), ne pas mettre le '#'. 
 * - querySelectorAll() & getElementsByTagName() : sélectionnent plusieurs éléments en même temps, accèdent aux collections d'éléments, objets arrays (pas un vrai array), node list.
 *  . querySelectorAll() : prend un sélecteur CSS mais retournera tous les éléments correspondants, similaire à un instantané du DOM actuel.
 *  . getElementsByTagName() : retourne tous les éléments liés à un certain tag HTML, les éléments ajoutés ou supprimés de l'objet array seront reflétés !== querySelectorAll().
 * - Nodes VS Elements : 
 *  . Nodes : objets créés par le DOM, tags HTML = elements nodes, les textes créent des 'text nodes' avec leurs propres propriétés/méthodes.
 *  . Elements (type de node) : nodes/noeuds créés à partir des tags HTML rendus, sans le texte à l'intérieur. Possèdents leurs propres propriétés/méthodes.
 *  > Pas d'interaction avec les propriétés/méthodes des text nodes ou element nodes car il faudra ajouter/modifier/supprimer des tags HTML et modifier le texte à l'intérieur des tags via le child content qui est le texte de cet élément.
 */

/**
 * TRAVERSEE DU DOM :
 * - Child :
 *  . Enfant direct d'un noeud ou élément.
 *  . Ex. : <div>
 *             <p><em>test</em></p> // Le tag p est l'enfant direct du tag div mais pas le tag em qui est celui du tag p.
 *          </div>
 * - Descendant :
 *  . Enfant direct ou indirect d'un noeud ou élément.
 *  . Dans l'ex. précédant, les tags p & em sont des descendants du tag div.
 * - Parent (!Child):
 *  . Parent direct d'un noeud ou élément.
 *  . Dans le 1° ex., le tag div est le parent du tag p mais pas celui du tag em.
 * - Ancêtre (!Descendant) :
 *  . Parent direct ou indirect d'un noeud ou élément.
 *  . Dans le 1° ex., le tag div est l'ancêtre des tags p & em.
 * 
 * - children : accéde aux éléments enfants mais pas aux noeuds de texte !== childNodes.
 * - childNodes : accède aux noeuds d'élément, donc aux éléments enfants + noeuds de texte.
 *  > Retourne une nodeList et possède une propriété data contenant une string avec un retour de ligne et un certain nombre d'espace correspondant à celui des indentations nécessaires le parent & l'enfant.
 * - Ex. de sélection du 1° ou dernier tag li d'une liste :
 *  const ul = document.querySelector('ul');
 *  ul.firstElementChild // Sélectionne le 1°.
 *  ul.lastChild         // Sélectionne le dernier.
 */





/**
 * Here's a summary of the various methods you got to reach out to DOM elements (note: you can only query for element nodes).

    Besides the below query methods, you also got these special properties on the document object to select parts of the document:

    document.body => Selects the <body> element node.

    document.head => Selects the <head> element node.

    document.documentElement => Selects the <html> element node

    ----

    QUERY METHODS

    ----

    document.querySelector(<CSS selector>);
    Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found.

    More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

    document.getElementById(<ID>);
    Takes an ID (without #, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns null if no element with the specified ID could be found.

    More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

    document.querySelectorAll(<CSS selector>);
    Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) NodeList. Returns and empty NodeList if no matching element could be found.

    More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

    document.getElementsByClassName(<CSS CLASS>);
    Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

    More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

    document.getElementsByTagName(<HTML TAG>);
    Takes an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

    More information: https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

    There also is the getElementsByName() method which really isn't used commonly (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName).
 */

/**
 * PROPRIETES DU DOM :
 * - Dans les objets du DOM, la propriété style permet d'accéder aux règles CSS. /!\ Le nom de ces règles ne comportent pas de '-' mais sont transformés en camelCase.
 * 
 */