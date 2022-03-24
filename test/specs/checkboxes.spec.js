const CheckboxesPage = require('../pageobjects/checkboxes.page');

describe('Checkbox checking', () => {
    it('should verify if Checkbox 1 is checked', async () => {
        await CheckboxesPage.open();
        browser.pause(1000)
        await expect(CheckboxesPage).Checkbox1.toBeChecked()
        
    });
});