async function loadSomething() {
    let LoadPercentage = 0;
    var out = document.getElementById("output");
    out.innerHTML = "Loading...<br/>" + LoadPercentage + "%";
    const time = setInterval(() => {
        out.innerHTML = "Loading...<br/>" + LoadPercentage + "%";
    
        if (LoadPercentage === 100) {
            clearInterval(time);
        }
        
        LoadPercentage += 1;
    }, 50);
    
    await new Promise(resolve => {
        const checkInterval = setInterval(() => {
            if (LoadPercentage === 100) {
                clearInterval(checkInterval);
                resolve();
            }
        }, 50);
    });
    out.innerHTML = "Loading complete! Fetching data...";
    const fetchedData = await fetchData();
    out.innerHTML = `Data fetched: ${fetchedData}`;
}

async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("This is the fetched data.");
        }, 1000); 
    });
}
