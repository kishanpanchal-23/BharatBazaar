const Mysql = require('../db');
// const path = require('path');

const getProducts = async(req,res)=>{
    const q = 'SELECT * FROM products';
    const product = await new Promise((resolve, reject)=>{
        Mysql.query(q, (err,data)=>{
            if(err){
                return reject(err);
            }else{
                 res.json(data);
                return resolve(data);
            }
        })
    })
    return product;
};

const getProduct = async(req,res)=>{
    const q = 'SELECT * FROM products WHERE `id` = ?';
    const id = req.params.id
    const product = await new Promise((resolve, reject)=>{
        Mysql.query(q,[id], (err,data)=>{
            if(err){
                return reject(err);
            }else{
                res.json(data);
                return resolve(data);
            }
        })
    })
    return product;
};

const createProduct = async(req,res)=>{
    const q = "INSERT INTO products (`title`, `description`, `price`, `img`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.file.filename,
    ]
    const product = await new Promise((resolve, reject)=>{
        Mysql.query(q,[values],(err,data)=>{
            if(err){
               return reject(err);
            }else{
            // Log the history
                Mysql.query("INSERT INTO product_history (table_name, action, row_id, admins_id) VALUES (?, 'create', ?, ?)",
                ["products", data.insertId ,req.admins_id]);
                return resolve(data);
            }
        })
    })
    return res.status(200).json("Product stored successfully");
};

const updateProduct = async(req,res)=>{
    const q = 'UPDATE products SET `title`,`description`,`price`,`img` WHERE `id` = ?'
    const id = req.params.id;
    const updatedValues = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.file.filename,
    ]

    const product = await new Promise((resolve, reject)=>{
        Mysql.query(q,[...updatedValues, id], (err,data)=>{
            if(err){
                return reject(err);
            }else{
                // log history
                Mysql.query('INSERT INTO prodcut_history (table_name, action, row_id, admins_id) VALUES (?, "update", ?, ?)',
                ["prodcuts", data.insertId , req.admins_id]);
                res.json(data);
                return resolve(data);
            }
        })
    });
     return product;
};

const deleteProduct = async(req,res)=>{
    const q = 'DELETE FROM products WHERE `id` = ?';
    const id = req.params.id;

    const product = await new Promise((resolve, reject)=>{
        Mysql.query(q,[id],(err,data)=>{
            if(err){
                return reject(err);
            }else{
                // log history
                Mysql.query("INSERT INTO product_history (table_name, action, row_id, admins_id) VALUES (?, 'delete', ?, ?)",
                ["products",data.insertId,req.admins_id]);
                res.json("deleted")
                return resolve(data)
            }
        })
    });
    return product;
};

module.exports = {getProducts, getProduct, createProduct, updateProduct, deleteProduct};