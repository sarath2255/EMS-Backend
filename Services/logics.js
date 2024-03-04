// import db.js
const db = require('../Services/db')

//logic for get all employees from the database

const getAllEmployees=()=>{
    return db.employee.find().then(
        (result)=>{
            if(result){
                return{
                    statuscode :200,
                    employees:result
                }
            }
            else{
                return{
                    statuscode:404,
                    message :'Emplyees not found'
                }
            }
        }
    )
}

//logic for add an employees to the database
const addEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        //id id is present in the db
        if(result){
            return{
                statuscode:401,
                message:"Employee already exist"
            }
        }
        else{
            //if id is not present in the db,to save all the data in db
            const newEmployee=new db.employee({id,name,age,designation,salary})
            newEmployee.save()
            return{
                statuscode:200,
                message:"Employee added successfully..."
            }
        }
    })

}

//logic for delete an employee

const dltemp=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statuscode:200,
                message :"employee deleted successfully"
            }
            
        }
        else{
            return{
                statuscode:401,
                message :"can't delete an employee from the database"
            }

        }
    })
}


//logic for view employee

const getAnEmployee=(id)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statuscode:200,
                employees:result
            }
        }else{
            return{
            
                    statuscode:404,
                    employees:result
                }
            }
        
       
     
    })
}
   

//logic for update an employee details

const updateEmployee=(id,name,age,designation,salary)=>{ //updated details

    return db.employee.findOne({id}).then((result)=>{
        if(result){
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            //to save the employee details to the mongodb
            result.save();
            return{
                statuscode:200,
                message:"Employees details updated successfully"
            }
        }else{
            return{
            
                    statuscode:404,
                    message:"Employees not found"
                }
            }
        
       
     
    })
    

}






module.exports={
    getAllEmployees,
    addEmployee,dltemp,getAnEmployee,updateEmployee
}
