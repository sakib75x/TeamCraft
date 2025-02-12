import React from "react";

export const metadata = {
    title: "Terms and Conditions | TeamCraft",
    description: "Read our terms and conditions for using TeamCraft.",
}

const Terms = () => {
    return (
        <section className="lg:px-0 bg-white/5 pb-[70px]  px-4 pt-[100px]">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>


                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p className="mb-2">
                        By accessing or using TeamCraft, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our platform.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">2. User Accounts</h2>
                    <p className="mb-2">
                        To access certain features, you must create an account with TeamCraft. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">3. Use of the Platform</h2>
                    <p className="mb-2">
                    TeamCraft is designed for team collaboration and task management. You agree not to misuse our services by engaging in prohibited activities, such as:
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li>Uploading content that is illegal, harmful, or offensive</li>
                        <li>Attempting to interfere with the platform&apos;s functionality or security</li>
                        <li>Violating intellectual property rights of TeamCraft or other users</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Subscription and Payments</h2>
                    <p className="mb-2">
                    TeamCraft offers free and paid subscription plans. By subscribing to a paid plan, you agree to provide accurate payment information and authorize us to charge your payment method for the fees associated with your subscription. All fees are non-refundable except as required by law.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">5. Intellectual Property Rights</h2>
                    <p className="mb-2">
                        All content, features, and functionality of TeamCraft, including text, graphics, logos, and software, are the exclusive property of TeamCraft and are protected by copyright, trademark, and other intellectual property laws. You may not use any TeamCraft materials without our prior written permission.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
                    <p className="mb-2">
                    TeamCraft is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We do not guarantee the accuracy, completeness, or reliability of any content or features. To the maximum extent permitted by law, TeamCraft disclaims all liability for any damages resulting from the use or inability to use the platform.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
                    <p className="mb-2">
                        We reserve the right to suspend or terminate your access to TeamCraft at our discretion if you violate these Terms and Conditions or if we need to perform maintenance or updates to the platform.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">8. Changes to These Terms</h2>
                    <p className="mb-2">
                        We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and by continuing to use TeamCraft, you accept any modified terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
                    <p className="mb-2">
                        If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:your-contact-email@example.com" className="text-blue-500 underline">there will be a mail</a>.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Terms;
