function spy(){
}

function receivesAFunction(spy){
     spy();
}

function returnsANamedFunction(){
    let here = function(){
        console.log("name");
    }
    return here;
    }
   
 function returnsAnAnonymousFunction(){
   return   function (anonymous){
   }
 }