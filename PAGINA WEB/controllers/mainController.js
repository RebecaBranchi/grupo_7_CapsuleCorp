const getHome = (req,res)=>{
    res.render("users/index")
};

const getLogin = (req,res)=>{
    res.render("users/login")
};

const getRegister = (req,res)=>{
    res.render("users/register")
}




module.exports ={
    getHome,
    getLogin,
    getRegister
}