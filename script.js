window.onload = readN;

function readN() {
    var txtFile = new XMLHttpRequest();
    txtFile.open('GET', '/words.txt', true);
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === 4) {
            // Makes sure the document is ready to parse.
            if (txtFile.status === 200) {
                // Makes sure it's found the file.
                wordList = txtFile.responseText;
                wordArray = wordList.split('\n');
            }
        }
    }
    txtFile.send(null);
}

function phonetitize() {
    letterArray = document.getElementById('inputText').value.replaceAll(/[^a-zA-Z]+/g, '').trim().toLowerCase().split('');

    finalArray = [];
    for (let j = 0; j < letterArray.length; j++) {
        l = letterArray[j]
        currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        while (currentWord.charAt(0).toLowerCase() != l) {
            currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        }
        finalArray.push(currentWord);
    }

    for (let k = 0; k < finalArray.length; k++) {
        finalArray[k] = finalArray[k].charAt(0).toUpperCase() + finalArray[k].slice(1);
    }

    finalString = '';
    for (let k = 0; k < finalArray.length; k++) {
        finalArray[k] = finalArray[k].charAt(0).toUpperCase() + finalArray[k].slice(1);
        finalString = finalString + finalArray[k].charAt(0).toUpperCase() + ' for ' + finalArray[k].charAt(0).toUpperCase() + finalArray[k].slice(1) + '\n';
    }

    // document.getElementById('final').innerText = finalArray.join(' ');

    document.getElementById('final').innerText = finalString;
}