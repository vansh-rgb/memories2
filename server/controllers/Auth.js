import User from "../models/user.js";
export const signup = async (req,res)=>{
    console.log(req.body);
    if(!req.body.username || !req.body.password){
        return res.send('Please send all the information')
    }
    else{
        const user = await User.find({username: req.body.username});
        console.log(user,"hii");
       if(user.length>0){
        console.log("username already exists");
        return res.status(404).json({"message": "user already exists"});
       }
       else{
            try {
                const {username,password} = req.body;
                console.log(req.body);
                User.create({
                username: username,
                password: password,
            })
            return res.status(200).json({"username": username})
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export const login = async (req,res)=>{
    console.log(req.body);

    if(!req.body.username|| !req.body.password){
        res.send('Please send all the information')
    }
    else{
        const user = await User.find({username: req.body.username});
        console.log(user);
        if(user.length>0){
            if(user[0].password === req.body.password){
                console.log("userfound");
                try {
                    const {username,password} = req.body;
                    console.log(req.body);
                    User.create({
                        username: username,
                        password: password,
                    })
                    return res.status(200).json({"username": username});
                } catch (error) {
                    return res.status(400).json({"message": error});
                }
            }
            else {
                return res.status(400).json({"message": "password is incorrect"});
            }
        }
        else{
            return  res.status(400).json({"message": "user not found"});
        }
    }
}
