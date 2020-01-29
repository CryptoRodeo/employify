const fetch = require('node-fetch');

const handle_git = async (res, listing) =>  
{
    try
    {
        let data = await(await fetch(listing)).json().then((data) => { return data});
        res.send(data);
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.handle_git = handle_git;