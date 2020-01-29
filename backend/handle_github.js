const fetch = require('node-fetch');

const return_listings = async (res, listing) =>  
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

exports.return_listings = return_listings;