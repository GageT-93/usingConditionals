const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get Checkbox1 () {
        return $('//form/input[1]');
    }

    // get inputPassword () {
    //     return $('#password');
    // }

    // get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    //}

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

module.exports = new CheckboxesPage();