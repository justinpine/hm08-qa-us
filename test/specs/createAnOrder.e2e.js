const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    beforeEach(async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    });
    
    it('should open phone number modal', async () => {
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    });

    it('should set the address', async () => {
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
    });

    it('should select the supportive plan', async () => {
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForClickable();
        await supportivePlanButton.click();
        await expect(supportivePlanButton).toBeDisplayed();
    });    

    it('should save the phone', async () => {       
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add a credit card', async () => {  
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        await expect(paymentMethodButton).toBeClickable();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        await expect(addCardButton).toBeClickable();

        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue('1234567890123456');
        await expect(cardNumber).toHaveValue('1234567890123456');

        const cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue('32');
        await expect(cardCode).toHaveValue('32');

        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();
        await expect(cardSignatureStrip).toBeClickable();

        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();
        await expect(linkCardButton).toBeClickable();

        const closePaymentMethodModalButton = await $(page.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click();
        await closePaymentMethodModalButton.waitForDisplayed({ reverse: true });
        await expect(closePaymentMethodModalButton).not.toBeDisplayed();
    });

    it('should write a message for the driver', async () => {
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('Pick up beer');
        await expect(messageField).toHaveValue('Pick up beer');
    });

    it('should order blanket and handkerchiefs', async () => {
        const blanketAndHandkerchiefsCheckbox = await $(page.blanketAndHandkerchiefsCheckbox);
        await blanketAndHandkerchiefsCheckbox.waitForClickable();
        await blanketAndHandkerchiefsCheckbox.click();
        const isChecked = await blanketAndHandkerchiefsCheckbox.isSelected();
        await expect(isChecked).toBe(true);
    
        const blanketAndHandkerchiefsState = await $(page.blanketAndHandkerchiefsState);
        await blanketAndHandkerchiefsState.waitForDisplayed();
        await expect(blanketAndHandkerchiefsState).toHaveElementClassContaining('checked');
    });
    
    it('should order 2 Ice creams', async () => {
        const iceCreamField = await $(page.iceCreamField);
        await iceCreamField.waitForDisplayed();
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        await expect(iceCreamField).toHaveText('2');
    });
    
    it('should show car search modal', async () => {
        const carSearchButton = await $(page.carSearchButton);
        await carSearchButton.waitForClickable();
        await carSearchButton.click();
        await expect(carSearchButton).toBeClickable();
        
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(carSearchModal).toBeDisplayed();
    });
    
    it('should wait for the driver info to appear in the modal', async () => {
        const carSearchButton = await $(page.carSearchButton);
        await carSearchButton.waitForClickable();
        await carSearchButton.click();
        await expect(carSearchButton).toBeClickable();

        const driverInfo = await $(page.driverInfo);
        await driverInfo.waitForDisplayed();
        await expect(driverInfo).toBeDisplayed();

        const driverName = await $(page.driverName);
        await driverName.waitForDisplayed();
        await expect(driverName).toBeDisplayed();
    }); 
});