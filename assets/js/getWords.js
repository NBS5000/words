/**
 * ! gets synonnyms and antonyms - for & against
 * @param forAg = for / against
 */

async function getWords(forAg) {
    
    const input = document.getElementById("inputText");
    const word = input.value;

    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/${forAg}`;

    const wordDiv = document.getElementById(forAg);

    /*const options = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': 'f5a3e69c6bmshdd343bdddc1cbd8p103af4jsn157bd708844a',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };*/
    
    

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': 'f5a3e69c6bmshdd343bdddc1cbd8p103af4jsn157bd708844a',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    });
    

    const resJson = await response.json(); //extract JSON from the http response
    const words = resJson[forAg];
    let wordList = `<div class="wordResults"><h2 id="chk_h2">Do you ${forAg==="synonyms"?"stand for":"stand against"}:</h2>`;
    for (let i = 0; i < words.length; i++) {
        const el = words[i];
        wordList = wordList+`<div class="wrapper_chk"><input class="chk_${forAg} chk_forAg" type="checkbox" name='chk_${i}_${el}' id='chk_${i}_${el}' value=${i}> <label class="chk_label" for='chk_${i}_${el}'>${el}</label></div>`;
    }
    wordList = wordList+`</div>`;
    wordDiv.innerHTML = wordList;


/*
    const chk_headers = document.getElementById("headerList");
    const headers = firstSplit[0];
    const arr_headers = String(headers).split(",");
    let chk_string = `<form action="hashData()" id="headerForm"><h2 id="header_h2">SELECT COLUMNS TO HASH</h2>`;
    for (let i = 0; i < arr_headers.length; i++) {
        const el = arr_headers[i];
        chk_string = chk_string+`<div class="wrapper_headerChk"><input class="headerChk" type="checkbox" name='chk_${i}_${el}' id='chk_${i}_${el}' value=${i}> <label class="chk_label" for='chk_${i}_${el}'>${el}</label></div>`;
    }
    chk_string = chk_string+`<button id="btn_headerForm"><span>Hash</span></button></form>`;
    chk_headers.innerHTML = chk_string;
*/
/*    const the_return = document.getElementById("fileName");
    const str = `<br/><span id="selectedFileName">${file.name}</span>`;
    the_return.innerHTML = str;
    document.getElementById("downloadSection").style.display = "none";*/

    return Promise.resolve();;
}