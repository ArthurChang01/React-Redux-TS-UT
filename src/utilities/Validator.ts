import 'jquery';
import 'jquery-validation';

export function Validator(rules:JQueryValidation.RulesDictionary, messages?:Object){
    if (!rules)
        console.log("rules can't be empty!");

    //validator's config
    let config:JQueryValidation.ValidationOptions = {
        rules: rules,
        highlight: function(element:HTMLElement) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element:HTMLElement) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error:JQuery, element:JQuery) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages:null
    };

    //customize error message
    if (messages)
        config.messages = messages;

    $('form').validate(config);
}