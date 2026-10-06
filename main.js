const url = "https://dice-roller-jwp-node-gqegc7h4f5d0gxfj.centralus-01.azurewebsites.net"




async function rollDice() {
    const request = await fetch(url + "/api/roll");
    const data = await request.json();
   
    for (let i = 0; i < 5; i++) {
        setDie('die'+i, data[i]);
    }
    }

    function setDie(index, value) {
    if (index < 0 || index >= 5) return;

    document.getElementById(index).innerHTML= `
        <h2>${value}</h2>
    `;

}
async function corsTest() {
    const request = await fetch(url + "/corsFail");
    const data = await request.json();
    console.log(data);
}
