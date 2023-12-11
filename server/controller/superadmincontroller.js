const Mysql = require("../db");
const bcrypt = require('bcrypt');

const Login = async(req,res) =>{
    try {
        // Checking exits admin
    const query = 'SELECT * FROM admin WHERE email = ? OR password = ?';
    const { email, password } = req.body;
    const ExistingAdmin = await new Promise((resolve,reject)=>{
        Mysql.query(query,[email,password],(err,data)=>{
            if(err){
                return reject(err);
            }
            else{
                return resolve(data);
            }
        })
    });
    if(ExistingAdmin.length) return(res.status(409).json({message:"Admin is already exits"}));
    
    // password hasing for admin
    const hasedPassword = await bcrypt.hash(password, 10);

    // superadmin creation
    const cquery = 'INSERT INTO admin (`username`, `email`, `password`) VALUES (?)';
    const values = [
        req.body.username,
        req.body.email,
        hasedPassword
    ];
    
    const createAdmin = await new Promise((resolve,reject)=>{
        Mysql.query(cquery,[values],(err,data)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(data);
            }
        })
    });
    return res.status(200).json(createAdmin);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
}

const adminLogin = async(req, res) =>{
    const q = 'SELECT * FROM admins WHERE username = ? OR password = ?';
    const {username, password} = req.body;
    const ExistingAdmin = await new Promise((resolve, reject)=>{
        Mysql.query(q,[username,password],(err,data)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(data);
            }
        })
    });
     
    if(ExistingAdmin.length) return res.status(500).json("Admin already exist");

    // hashpassword
    const hashpassword = await bcrypt.hash(password,10);

    // create single admin;
    const cq = 'INSERT INTO admins (`username`, `password`) VALUES (?)';
    const values = [
        username,
        hashpassword
    ]
    const createAdmin = await new Promise((resolve, reject)=>{
        Mysql.query(cq,[values],(err,data)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(data);
            }
        })
    });
    return res.status(200).send("admin loged in successfully");
}

const getAdmins = async(req,res) =>{
    // res.send("get admins")
    const gq = "SELECT * FROM admins";
   const admins = await new Promise((resolve,reject)=>{
    Mysql.query(gq, (err,results)=>{
        if(err){
            return reject(err)
        }else{
            res.json(results);
            return resolve(results);
        }
    })
   });
   return admins;
}

const getAdmin = async(req, res) => {
   const gq = 'SELECT * FROM admins WHERE id = ?';
   const id = req.params.id ;

   const admins = await new Promise((resolve, reject)=> {
    Mysql.query(gq, [id], (err,data)=>{
        if(err){
            return reject(err);
        }else{
            return resolve(data[0]);
        }
    })
   });

   return (res.status(200).send(admins));
}

const postAdmin = async(req,res) =>{
    const pq = "INSERT INTO admins (`username`, `password`) VALUES (?)";
    const hasedPassword = await bcrypt.hash(req.body.password,10);
    const values = [
        req.body.username,
        hasedPassword
    ];

    const admin = await new Promise((resolve, reject)=>{
        Mysql.query(pq,[values],(err,results)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(results);
            }
        })
    })

    return (res.status(200).json({message:"admin created successfully"}));
}

const updateAdmin = async(req,res) =>{
    const uq = 'UPDATE admins SET `username`=?, `password`=? WHERE `id` = ?';
    const id  = req.params.id;
    const hashedpassword = await bcrypt.hash(req.body.password,8);
    const updatedValues = [
        req.body.username,
        hashedpassword
    ];
    try {
        const admins = await new Promise((resolve,reject)=>{
            Mysql.query(uq, [...updatedValues, id], (err,result)=>{
                if(err){
                    return reject(err);
                }else{
                    return resolve(result);
                }
            })
        }); 
        return (res.status(200).json({message:"admin updated successfully"}));
        // if(admins.affectedRows > 0){
        //     
        // }else{
        //     return res.status(404).json({ message: "Admin not found" });
        // }
       } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }

}

const deleteAdmin = async(req,res) =>{
   const dq = 'DELETE FROM admins WHERE `id` = ?'
   const id = req.params.id;

   const admins = await new Promise((resolve, reject)=>{
    Mysql.query(dq, [id], (err,result)=>{
        if(err){
            return reject(err);
        }else{
            return resolve(result);
        }
    })
   });
   return (res.status(200).json("user deleted successfully")) 
}

module.exports = {Login, adminLogin, getAdmins, getAdmin, postAdmin, updateAdmin, deleteAdmin};