function ajax(url, method, functionName, dataArray) { // functionName - функция, которая выводит результат!
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            functionName(this.responseText);
        }
    }
    xhttp.open(method, url, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(requestData(dataArray));
}
function requestData (dataArr) {
    let out = '';
    for(let key in dataArr) {
        out += `${key}=${dataArr[key]}&`;
    }
    console.log(out);
    return out;
}
