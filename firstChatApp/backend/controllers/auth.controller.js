

export const signup  =  async (req,res) =>{
   try {
    const {fullname,username,password,confirmedPassword, gender}= req.body;

} catch (error) {
    
   }
}

export const login = (req,res) =>{
    console.log("loginUser");
    res.send("loginUser");
}

export const logout = (req,res) =>{
    console.log("logoutUser");
    res.send("logoutUser");
}