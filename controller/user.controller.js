



const users = require('../Data/Data.json')

if (users) {

    console.log("data found from data.json", users.length);
}

getRandomUser = (req, res) => {
    const randomIndex = Math.floor(Math.random() * users.length)
    const randomUser = users[randomIndex]
    res.send(randomUser)
    console.log(`Random user found in id ${randomUser.id}`);

}


getAllusers = (req, res) => {

    // console.log(req);
    // res.download("D:/projectJS/Backend project/milestone-1/module-3/express-mvc-acc/controllers/ols.controller.js")
    /*    res.download(__dirname + '/single_gfg.txt', function (err) {
           if (err) {
               console.log(err);
           }    
       }) */
    // res.redirect('/foo/bar')   


    console.log("file send to dowload");
    // const { limit, name } = req.query;
    // console.log(limit, name);
    // res.send(tools.slice(0, limit))

    res.send(users)
}


postARandomUser = (req, res) => {




    const randomIndex = Math.floor(Math.random() * users.length)
    const randomUser = users[randomIndex]

    users.push(randomUser)
    randomUser.id = users.length + 1 + 3412331999;
    res.send(users)
    console.log(`A Random User Added with id num : ${randomUser.id}`);


    
}




const delteAUser = (req, res) => {
tomro 
}

module.exports = {

    getRandomUser,
    getAllusers,
    postARandomUser
}