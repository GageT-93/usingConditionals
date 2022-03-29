const CheckboxesPage = require('../pageobjects/checkboxes.page');

describe('Checkbox checking', () => {

    it('select first option', async () => {
        await CheckboxesPage.open();
        if(!(await CheckboxesPage.Checkbox1.getAttribute('checked'))){
            await CheckboxesPage.Checkbox1.click()
            await browser.pause(2000);
        }
        await expect(CheckboxesPage.Checkbox1).toBeChecked();
    });
});