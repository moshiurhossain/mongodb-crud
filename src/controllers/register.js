const register_controller =(req,res)=>{
    const {userName,email,password}=req.body
    
    if(!userName) return res.status(404).send('username is required')
    if(!email) return res.status(404).send('email is required')
    if(!password) return res.status(404).send('password is required')

        res.send('register successful')
}

module.exports = register_controller