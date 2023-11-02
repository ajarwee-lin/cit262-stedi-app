const fetch = require('node-fetch');

it("should get a login token", asyn()=>{


    let loginToken="";//this is an emptry string
    const options = {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            :userName":"ajarwee@gmail.com"
            "Password":"Password@23"
        })
    }

const response = await fetch('https://dev.stedi.me/login', option);

token = await response.text();
console.log("Token "+token);

expect(status).toBe(200);
expect(token.length).toBe(36);

})