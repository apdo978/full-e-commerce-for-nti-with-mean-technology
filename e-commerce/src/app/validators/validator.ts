import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator to check if the email contains a specific domain
export function customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) return null; // If the field is empty, no validation is needed
       const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailMatch = emailPattern.test(control.value);

        if (!emailMatch ) {
            return { invalidDomain: { value: control.value } };
        }
        return emailMatch ? null : { invalidEmail: { value: control.value } };
    };
}
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null; // إذا كانت القيمة فارغة، لا حاجة للتحقق

    // قواعد كلمة المرور
    const hasUpperCase = /[A-Z]/.test(control.value);    // تحقق من وجود حرف كبير
    const hasLowerCase = /[a-z]/.test(control.value);    // تحقق من وجود حرف صغير
    const hasNumbers = /\d/.test(control.value);         // تحقق من وجود أرقام
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);  // تحقق من وجود رموز خاصة
    const isValidLength = control.value.length >= 8;     // تحقق من طول كلمة المرور

    // إذا كانت كلمة المرور تحتوي على جميع القواعد
    if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && isValidLength) {
      return null; // كلمة المرور قوية
    }
    return { weakPassword: true }; // إذا كانت كلمة المرور ضعيفة
  };
}