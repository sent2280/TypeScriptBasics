// Var declaration

//Re-declration of var is allowed
var name1:string = "kumar";
var name1:string = "senthil";   

function varDeclration(){
    
    var name2:string = "test123";
    var name1:string = "senthil";
    if(1==1){
       var name3:string = "test123";
       console.log("Inside Var... " + name1);
    }
}
varDeclration();

//Re-declration of Let is not allowed
let name4:string = "test123";     
let name4:string = "test123";       // Compiler Error

function letDeclration(){
    
    let name5:string = "test123";
    if(1==1){
       console.log("Inside Let ... " + name4);
    }
}
letDeclration();