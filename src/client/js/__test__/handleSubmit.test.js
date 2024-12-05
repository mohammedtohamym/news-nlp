/**
 * @jest-environment jsdom
 */

const handleSubmit = require("../formHandler");

describe('Testing handleSubmit function', () => {
    test('Should be defined', () => {
        expect(handleSubmit).toBeDefined();   // Check if the function is defined
    });

    test('Submit button triggers event handler', () => {
        document.body.innerHTML = `
            <form id="urlForm">
                <input id="name" type="text" name="url" placeholder="Enter URL" required>
                <button id="submitButton" type="submit">Submit</button>
            </form>
        `;
        
        const form = document.getElementById('urlForm');
        const submitButton = document.getElementById('submitButton');
        submitButton.click = jest.fn();   // Mock the click function
        form.submit();

        expect(submitButton.click).toHaveBeenCalled();  // Ensure button's click event was triggered
    });
});
