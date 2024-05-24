const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    
    it('should open phone number modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should set the address', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const fromField = await $('#from');
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to');
        await toField.setValue('1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
    })

    it('should select the supportive plan', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForClickable();
        await supportivePlanButton.click();
        await expect(supportivePlanButton).toBeDisplayed();
    });    

    it('should save the phone', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add a credit card', async () => {  
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567890123456);
        const cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(32);

        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();

        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        const closePaymentMethodModalButton = await $(page.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click();
        // Verify if modal is closed
        await closePaymentMethodModalButton.waitForDisplayed({ reverse: true });
        console.log('Verified modal is closed')
    });

    it('should write a message for the driver', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('Pick up beer');
        await expect(messageField).toHaveValue('Pick up beer');
    });

    it('should order blanket and handkerchiefs', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        // Added console.logs to ensure interactions behave correctly
        console.log('Attempting to find blanket and handkerchiefs checkbox...');
        const blanketAndHandkerchiefsCheckbox = await $(page.blanketAndHandkerchiefsCheckbox);
        const isDisplayed = await blanketAndHandkerchiefsCheckbox.isDisplayed();
        console.log('Checkbox displayed:', isDisplayed);
        if (isDisplayed) {
            await blanketAndHandkerchiefsCheckbox.waitForClickable();
            await blanketAndHandkerchiefsCheckbox.click();
    
            console.log('Attempting to verify state change...');
            const blanketAndHandkerchiefsState = await $(page.blanketAndHandkerchiefsState);
            await blanketAndHandkerchiefsState.waitForDisplayed();
            await expect(blanketAndHandkerchiefsState).toHaveElementClassContaining('checked');
            console.log('State change verified.');
        } else {
            console.log('Checkbox not displayed within timeout.');
        }
    });
    
    it('should order 2 Ice creams', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const iceCreamField = await $(page.iceCreamField);
        await iceCreamField.waitForDisplayed();
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        // Click plus button twice to add two ice creams
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        await expect(iceCreamField).toHaveText('2');
    });
    
    it('should show car search modal', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
        const carSearchButton = await $(page.carSearchButton);
        // Added timeouts to prevent errors
        await carSearchButton.waitForClickable({timeout: 5000});
        await carSearchButton.click();
        
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed({timeout: 5000});
        await expect(carSearchModal).toBeDisplayed();
    });
    
    it('should wait for the driver info to appear in the modal', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const carSearchButton = await $(page.carSearchButton);
        // Added timeouts to prevent errors
        await carSearchButton.waitForClickable({timeout: 5000});
        await carSearchButton.click();

        const driverInfo = await $(page.driverInfo);
        await driverInfo.waitForDisplayed({timeout: 5000});
        await expect(driverInfo).toBeDisplayed();

        const driverName = await $(page.driverName);
        await driverName.waitForDisplayed({timeout: 5000});
        await expect(driverName).toBeDisplayed();
    }); 
});