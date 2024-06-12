const user = require("../models/user.model");
const bcrypt = require("bcrypt")


const login = async (req, res) => {
    console.log(req.body)
}


const register = async (req, res) => {

    const { email} = req.body
    
    // kullanıcı kontrolü
    const userCheck = await user.findOne({email : req.body.email}) 


if(userCheck){
    console.log("Email kullanımda")
}

req.body.password = await bcript.hash(req.body.password, 10)
console.log(req.body.password);

req.body

    console.log(req.body)
}


module.exports = {
    login,
    register
}


