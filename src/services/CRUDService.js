import { Client } from "pg"
import db from '../models/index';
require("dotenv").config()
 
let credentials = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
}



let createNewUser = async (firstname, lastname, username, password, email) => {
    /*
    try {
        const client = new Client(credentials)
 
        await client.connect()
        const res = await client.query(`INSERT INTO accounts (username, password, email) 
                                        VALUES ('${username}', '${password}', '${email}');`)
        
        await client.end()
        console.log(res)
        return({
            errorCode : 0,
            message : "New User Created!"
        })
    } catch (error) {
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
    */
    try {
        //  const client = new Client(credentials)
        let res = await db.User.create({firstName: firstname, lastName: lastname, userName: username, password: password, email: email})
        /*
        await client.connect()
        const res = await client.query(`INSERT INTO accounts (username, password, email) 
                                        VALUES ('${username}', '${password}', '${email}');`)
        
        await client.end()
        */
        if(res){
            return({
                errorCode : 0,
                message : "New User Created!"
            })
        }
        else{
            return({
                errorCode : 2,
                message : "Get No response from database!"
            })
        }
    } catch (error) {
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
}

let updateUser = async (firstname, lastname, username, password, email) => {
    /*
    const client = new Client(credentials)

    await client.connect()
    const res = await client.query(`UPDATE accounts 
                                    SET username = '${username}',
                                        password = '${password}'
                                    WHERE email = '${email}';`)

    await client.end()
    */
    try{
        let res = await db.User.update({firstName: firstname, lastName: lastname, userName: username, password: password},
            {where: {email: email}}
        )
        if(res){
            return({
                errorCode : 0,
                message : "User has been updated!"
            })
        }
        else{
            return({
                errorCode : 2,
                message : "Get No response from database!"
            })
        }
    }
    catch(error){
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
}

let deleteUser = async (userId) => {

    try{
        let res = await db.User.destroy({
            where: {
                // criteria
                id: userId
            }
        })
        if(res){
            return({
                errorCode : 0,
                message : "User has been updated!"
            })
        }
        else{
            return({
                errorCode : 2,
                message : "Get No response from database!"
            })
        }
    }
    catch(error){
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
    /*
    try {
        const client = new Client(credentials)

        await client.connect()
        const res = await client.query(`DELETE FROM accounts 
                                        WHERE user_id = '${userId}';`)

        await client.end()
        console.log(res)
        return({
            errorCode : 0,
            message : "User has been deleted!"
        })
    } catch (error) {
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
    */
}

 
module.exports = {
    createNewUser : createNewUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}