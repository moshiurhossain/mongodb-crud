const register_controller =(req,res)=>{
    try{
    const {userName,email,password}=req.body
    
    if(!userName) return res.status(404).send('username is required')
    if(!email) return res.status(404).send('email is required')
    if(!password) return res.status(404).send('password is required')

        res.status(200).send('register successful')
    }
    catch(err){
        res.status(500).send(err)
    }

}

module.exports = register_controller