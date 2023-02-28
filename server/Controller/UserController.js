import User from "../model/userSchema.js";

export const UserLogin = async (req, res) => {  
  try {
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({ username : username , password : password})
    if(user){
      return res.status(200).json({data : user});
    } else {
      return res.status(401).json('Invalid Login');
    }
  } catch (error) {
    res.status(500).json('Error: ', error.message);       
  }
};

export const UserSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username : req.body.username})
    if(exist){
        return res.status(401).json({ message: 'User already exist'});
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ mesage: user });
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

