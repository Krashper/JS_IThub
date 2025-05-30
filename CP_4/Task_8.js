function Email(email) {
    this.email = email;

    Object.defineProperty(this, 'isValid', {
        get: function() {
            let parts = this.email.split('@');
            let login = parts[0];
            let domainParts = parts[1].split('.');
            let badSymbols = ['*', '#', '$', '%', '^'];
            
            for (var i = 0; i < badSymbols.length; i++) {
                if (login.indexOf(badSymbols[i]) !== -1) {
                    return false;
                }
            }
            
            return domainParts[1].length <= 3;
        }
    });

    this.setEmail = function(parts) {
        this.email = parts[0] + '@' + parts[1] + '.' + parts[2];
    };
}

var email1 = new Email('test@gmail.com');
console.log('valid:', email1.isValid);

var email2 = new Email('te#st@mail.ru');
console.log('invalid:', email2.isValid);

email2.setEmail(['newEmail', 'gmail', 'com']);
console.log('После сеттера:', email2.email);