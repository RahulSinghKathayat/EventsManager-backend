import User from "../models/user.model.js";


const signupUser = async(req, res) =>{
    const {username, password} = req.body

    const existedUser = await User.findOne({
        $or: [{username}]
    })

    if(existedUser){
        return res.status(404).json({
            message: "user is already there"
        })
    }

    const user = await User.create({
        username, 
        password
    })
    const createdUser = await User.findById(user._id).select(
        "-password"
    )
    if(!createdUser){
        return res.status(404).json({
            message: "user not found"
        })
    }
    return res.status(201).json({
            messsage: "user registered successfully"
        })
}

const signinUser = async(req,res) => {
    const { username, password } = req.body

    if(!username){
        return res.status(400).json({
            message: "user not found"
        })
    }

    const user = await User.findOne({
        username
    })

    if(!user){
        return res.status(401).json({
            message: "user not found"
        })
    }

    return res.status(200).json({
        message: "user loggedIn successfully"
    })
}

export { signupUser, signinUser }