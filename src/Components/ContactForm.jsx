import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xrbzjwno");

    if (state.succeeded) {
        return <p className="text-center text-green-500">Thanks for contacting us!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

            <label htmlFor="email" className="block mb-4">
                <span className="block text-gray-700 text-sm font-medium mb-2">Email Address</span>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                />
            </label>

            <label htmlFor="message" className="block mb-6">
                <span className="block text-gray-700 text-sm font-medium mb-2">Your Message</span>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                ></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                />
            </label>

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </form>
    );
}

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <ContactForm />
        </div>
    );
}

export default App;
