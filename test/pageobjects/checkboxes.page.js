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
    
    open () {
        return super.open('checkboxes');
    }
}

module.exports = new CheckboxesPage();