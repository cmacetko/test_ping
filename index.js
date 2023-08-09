const { spawn } = require("child_process");

const ping = async function(Host){

    return new Promise((resolve, reject) => {

        var CmPing = spawn('ping', [Host]);
        var TmpOut = "";

        CmPing.stdout.on('data', (data) => {

            TmpOut += data.toString();

        });

        CmPing.stderr.on('data', (data) => {

            reject(data);
            
        });

        CmPing.on('close', (code) => {

            if( code === 0 )
            {
                
                resolve(TmpOut);

            }else{

                reject(code);

            }
            
        });

    });

};

const init = async function(){

    console.log(">> Antes do Ping <<");

    try {

        const RetPing = await ping("google.com.br");

        console.log(RetPing);

    } catch(err) {

        console.log(err);

    }
    
    console.log(">> Depois do Ping <<");

};

init();