const Mysql = require("../db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const registration = async (req, res) => {
  try {
    // CHECK EXITING USERS
    const q = "SELECT * FROM userss WHERE email = ? OR username = ?";
    const existingUser = await new Promise((resolve,reject)=>{
      Mysql.query(q,[req.body.email, req.body.username],(err, data) => {
        if (err) {
          return reject(err);
        }else{
          resolve(data);
        }
      })
    });

     if (existingUser.length) return(res.status(409).json("User already exits"));
     
    // Hash Password
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    // User Creation
    const qc = "INSERT INTO userss (`username`,`email`,`password`) VALUES (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword
    ];
    const createUser = await new Promise((resolve,reject)=>{
      Mysql.query(qc, [values], (err,data)=>{
        if(err){
          return reject(err);
        }else{
          resolve(data);
        }
     })
    });
    return res.status(200).json(createUser);

  } catch (error) {
     console.log(error);
     res.status(500).json({message:"Something Went Wrong"});
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check for user registratered or not
    const q = "SELECT * FROM userss WHERE email = ? OR password =? ";

    const checkUser = await new Promise((resolve, reject)=>{
      Mysql.query(q,[email,password],(err,data)=>{
        if(err){
          return reject(err);
        }else{
          if(data.length > 0){
            const comparePassword = bcrypt.compare(password,data[0].password,function(err,result){
              if(err){
                console.log(comparePassword);
                return err
              }else{
                 // Token generate
                 const id = data[0].id;
                 const token  = jwt.sign({id}, process.env.SECRET_KEY  );
                 res.status(201).json({user:data, token:token});
              }
            })};
          resolve(data);
        }});
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Something Went Wrong"});
  }
};

module.exports = { registration, login };
