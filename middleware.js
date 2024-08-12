const middle= middleware=(req,res,next)=>{
    req.time=new Date(Date.now()).toString();
    console.log(`you have sent the `,req.method,`request`);
    console.log(`your host is : `,req.hostname,``);
    console.log(`path : `,req.path,``);
    console.log(`cureent date and time : `,req.time,``);
    next();
}
module.exports=middle;