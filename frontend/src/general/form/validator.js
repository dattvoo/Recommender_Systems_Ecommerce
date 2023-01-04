
//constructor
function Validator(options){

    function getParent(element,selector){
        while (element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            else{
                element  = element.parentElement;
            }
        }
    }

    let selectorRules = {};

    function validate(inputElement,rule){
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        let errorMessage ;

        let rules = selectorRules[rule.selector]
        
        
        for (let element of rules){
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = element(formElement.querySelector(rule.selector+':checked'));
                    break;
                default:
                    errorMessage = element(inputElement.value);
            }
            if(errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        }
        else{
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            errorElement.innerText = "";
        }

        return !errorMessage
    }


    let formElement = document.querySelector(options.form);
    if(formElement){

        formElement.onsubmit = function(e){
            e.preventDefault();

            let isFormValid = true;
            //lap qua tung rule
            options.rules.forEach(function(rule) {
                let inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            if(isFormValid){
                if(typeof options.onSubmit === 'function'){

                    var enableInputs = formElement.querySelectorAll('[name]:not([dissable])');
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        
                        switch(input.type){
                            case 'radio':
                                if(input.matches(':checked')){
                                    values[input.name] = input.value;
                                    break;
                                }
                                break;

                            case 'checkbox':
                                if(!input.checked){ 
                                    return values 
                                }
                                if(!values[input.name]){
                                values[input.name] = ''
                                }
                                if(!Array.isArray(values[input.name])){
                                values[input.name] = []
                                } 
                                values[input.name].push(input.value)
                                break 

                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default: 
                                values[input.name] = input.value; 
                        }

                        return values;
                    },{});
                    options.onSubmit(formValues)
                }
            }
            else{
                console.log('loi')
            }
        }

        options.rules.forEach(function(rule) {
            
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }
            else{
                selectorRules[rule.selector] = [rule.test];
            }

            let inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement,rule);
                }

                inputElement.oninput = function(){
                    let errorElement =  getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                    errorElement.innerText = "";
                }
            });
        });   
  
    }
}

//rules
Validator.isRequired = function(selector,message){
    return{
        selector: selector,
        test: function(value){
            return value ? undefined : message || "Vui lòng nhập trường này."
        }
    }
}

Validator.isEmail = function(selector,message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Nhập email';
        }
    }
}

Validator.minLength = function(selector,min,message){
    return{
        selector: selector,
        test: function(value){
            return value.length>=min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự.`;
        }
    }
}

Validator.isConfirm = function(selector, getConfirmValue,message){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Gía trị nhập vào không chính xác.'
        }
    }
}