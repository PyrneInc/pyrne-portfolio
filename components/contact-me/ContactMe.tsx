export default function ContactMe() {
    return (
        <section id="contact-me" className="py-16 bg-gray-800 text-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-yellow-500">Contact Me</h2>
                <p className="mt-4 text-lg text-gray-400">
                    Let’s work together or discuss innovative ideas.
                </p>

                {/* Contact Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="mailto:your-email@example.com"
                        className="px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 transition-all"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-black transition-all"
                    >
                        Connect on LinkedIn
                    </a>
                </div>

                {/* Optional Form */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <form action="https://formsubmit.co/your-email@example.com" method="POST">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Your Message"
                            className="w-full mt-6 px-4 py-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}