window.onload = function () {
    let lookup = document.getElementById('lookup');
    let txtBox = document.getElementById('country');
    let result = document.getElementById('result');
    lookup.addEventListener("click", function () {
    
        if (txtBox.value.length == 0) { result.innerHTML = ""}
        else{
            let request = new XMLHttpRequest();
            request.onreadystatechange= function () {
                if (request.readyState == XMLHttpRequest.DONE){
                    if (request.status == 200){
                        let ans = request.responseText;
                        result.innerHTML = ans;
                    }
                }
            }
            request.open('GET', 'world.php?country=' + txtBox.value, true);
            request.send();
        }
    });
}