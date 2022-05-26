const ProductsModel =require('../model/ProductsModel');


// C = Create

exports.CreateProduct=(req,res)=>{
    let reqBody =req.body;
    ProductsModel.create(reqBody, (error, data)=>{
    if(error){
       res.status(400).json({status:'fail',data:error})
    }
    else{
        res.status(400).json({status:'sucess',data:data})
    }
    })
}

// R = Read

exports.ReadProduct=(req,res)=>{
    let Query = {};
    let Projection="ProductName ProductCode Img UnitPrice Qty TotalPrice CreateDate"
     ProductsModel.find(Query,Projection,(error, data)=>{
        if(error){
            res.status(400).json({status:'fail',data:error})
         }
         else{
             res.status(400).json({status:'sucess',data:data})
         }
    })
}

// Update 
exports.UpdateProduct=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    let reqBody=req.body;
    ProductsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
 }

// exports.UpdateProduct=(req,res)=>{
//     let id = req.params.id;
//     let Query = {_id:id};
//     let reqBody = req.body;

//     ProductsModel.updateOne(Query,reqBody,(error,data)=>{
//         if(error){
//             res.status(400).json({status:'fail',data:error})
//          }
//          else{
//              res.status(400).json({status:'sucess',data:data})
//          }
//     })
// }

// Delete 

exports.DeleteProduct=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    ProductsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// exports.DeleteProduct=(req,res)=>{
//     let id = req.params.id;
//     let Query = {_id:id};
//     ProductsModel.remove(Query,(error,data)=>{
//         if(error){
//             res.status(400).json({status:'fail',data:error})
//          }
//          else{
//              res.status(400).json({status:'sucess',data:data})
//          }
//     })
// }