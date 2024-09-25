// RANDOM PASSWORD GENERATOR

// Declare Variables
const pass_length = 12;
const include_lower = true;
const include_upper = true;
const include_numbers = true;
const include_symbols = true;

// Declare Functions
function gen_password(length, lower, upper, number, symbol){
    const lowwer_char = "abcdefghijklmnopqrstuvwxyz";
    const upper_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number_char = "1234567890";
    const symbol_char = "!@#$%^&*()+-=";

    let allowed_char = "";
    let password = "";

    allowed_char += lower ? lowwer_char : "";
    allowed_char += upper ? upper_char : "";
    allowed_char += number ? number_char : "";
    allowed_char += symbol ? symbol_char : "";

    if (length <= 0){
        return `(Password length must be at least one)`;
    }
    if (allowed_char === 0){
        return `(At least one set of char needs to be selected)`;
    }

    for (let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowed_char.length);
        password += allowed_char[randomIndex];
    }

    return password;
}

// Execute Functions
const password = gen_password(pass_length, include_lower, include_upper, include_numbers, include_symbols);

console.log(`Generated password ${password}`);