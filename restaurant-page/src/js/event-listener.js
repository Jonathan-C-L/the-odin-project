export {addGlobalEventListener};

// event delegation function
function addGlobalEventListener(type, selector, parent = document, callback){

    parent.addEventListener(type, e =>{
        if(e.target.matches(selector)){
            callback(e);
        }
    });
}