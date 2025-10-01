import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from "@angular/forms";

@Directive({
    selector:'[restrictedWords]',
    // standalone:true,
    providers:[{
        provide:NG_VALIDATORS,
        multi:true,
        useExisting:RestrictedWords
    }]
})
export class RestrictedWords implements Validators {
    @Input('restrictedWords')  restrictedWords:String[]=[]
    validate(control:AbstractControl): null | ValidationErrors{
        if(!control.value) return null;

        const invalidWords=this.restrictedWords.map(w=>control.value.includes(w)?w:null).filter(w=>w!==null)

        return invalidWords.length>0?{restrictedWords:invalidWords.join(',')}:null;
    }
}
