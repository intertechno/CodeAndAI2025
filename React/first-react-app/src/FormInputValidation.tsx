import { useState } from "react";

function FormInputValidation() {

    console.log("FormInputValidation component starting rendering");

    // define three input fields: name, email, and phone number
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleAddUserClick(event: React.FormEvent) {
        event.preventDefault(); // prevent form submission
        console.log("Add User button clicked");

        // validate that none of the fields are empty
        if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
            alert('All fields are required.');
            return;
        }

        // validate the email address using RegExp
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address.');
            return;
        }

        alert(`User added: Name=${name}, Email=${email}, Phone=${phone}`);
    }

    // return the form with an "Add User" button
    return (
        <form>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button type="button" onClick={handleAddUserClick}>Add User</button>
        </form>
    );
}

export default FormInputValidation;
