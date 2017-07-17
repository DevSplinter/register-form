(function(){
   
   function Validator(form){
       this.form = form;
       this.fields = this.form.querySelectorAll("[required]");
       this.errors = [];
       
      
       if(!this.fields.length){
           return;
           }
        
       this.form.onsubmit = function(e){
           e.preventDefault();
           
           var formValid = this.validate();
           
           if(formValid){
               this.form.submit();
           }else{
               return false;
           }
       }.bind(this);
   }
    
    
    Validator.prototype.validate = function(){
        this.clearErrors();
        
        for(var i = 0; i < this.fields.length; i++){
            this.validateField(this.fields[i]);
        }
        
            if(!this.errors.length){
                this.showConfirmation();
                
            }else{
                return false;
            
        }
    }
    
    Validator.prototype.validateField = function (field){
        var fieldValid = field.validity.valid;
        
        if(fieldValid){
            this.markAsValid(field);
        }else{
            this.errors.push(field.dataset.errorMessage);
            this.markAsInvalid(field);
            
        }
    }    
    
    Validator.prototype.markAsValid = function(field){
        field.classList.remove("invalid");
        field.classList.add("valid");
    }
    
    Validator.prototype.markAsInvalid = function(field){
        field.classList.remove("valid");
        field.classList.add("invalid");
    }
    
    Validator.prototype.showConfirmation = function(){
        var confirmation = document.createDocumentFragment(),
            confirmImg = document.createElement("img"); 
        
        confirmImg.setAttribute("src", "img/confirm2.png");
        
        
        this.form.textContent = "";
        this.form.appendChild(confirmImg);
        this.form.setAttribute("class","approved");
        
    }
    

    
    Validator.prototype.clearErrors = function(){
        this.errors.length = 0;
        
    }

    var validator1 = new Validator(document.querySelector("#form"));
    var validator3 = new Validator(document.querySelector("#form2"));
    var validator4 = new Validator(document.querySelector("#form3"));
    var validator5 = new Validator(document.querySelector("#form4"));
    var validator6 = new Validator(document.querySelector("#form5"));
    
})()