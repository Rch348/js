const task3Element = document.getElementById('task-3');

// 1.
function alertString () {
    alert("L'alerte est lancée")
}

function alertName (name) {
    alert(name)
}

// 2.
alertString()
alertName('Feisar')

// 3.
task3Element.addEventListener('click', alertString)

// 4.
function returnCombineString (str1, str2, str3) {
    // Pour + de lisibilité :
    // const combinedText = str1 + str2 + str3
    // return combinetext
    return str1 + str2 + str3
}

// 5.
// const result = returnCombineString('Auricom & ', 'Qirex & ', 'AG System')
// alert(result)
alert(returnCombineString('Auricom & ', 'Qirex & ', 'AG System'))