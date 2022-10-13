import CRUDService from '../services/CRUDService';

let createNewUser = async (req, res) =>{
    let message = await CRUDService.createNewUser(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.email);
    if(message.errorCode === 0){
        return(res.status(200).json(message));
    }
    else{
        return(res.status(400).json(message));  
    }
}

let updateUserInfo = async (req, res) =>{
    let message = await CRUDService.updateUser(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.email);
    if(message.errorCode === 0){
        return(res.status(200).json(message));
    }
    else{
        return(res.status(400).json(message));  
    }
}

let deleteUser = async (req, res) =>{
    console.log("User id: "+ req.params.id)
    let message = await CRUDService.deleteUser(req.params.id);
    if(message.errorCode === 0){
        return(res.status(200).json(message));
    }
    else{
        return(res.status(400).json(message));  
    }
}

module.exports = {
    createNewUser : createNewUser,
    updateUserInfo : updateUserInfo,
    deleteUser : deleteUser
}