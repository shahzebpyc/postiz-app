export default function DeletionInstructions() {
    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Data Deletion Instructions</h1>

                <div className="space-y-6 text-gray-300">
                    <p className="text-lg">
                        According to the Facebook Platform rules, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL.
                        If you want to delete your activities for the App, you can remove your information by following these steps:
                    </p>

                    <ol className="list-decimal pl-6 space-y-4">
                        <li>
                            Go to your Facebook Account's <strong>"Settings & Privacy"</strong>. Click <strong>"Settings"</strong>.
                        </li>
                        <li>
                            Look for <strong>"Apps and Websites"</strong> and you will see all of the apps and websites you linked with your Facebook.
                        </li>
                        <li>
                            Search and Click <strong>"Vinsmoke Media"</strong> (or the App Name) in the search bar.
                        </li>
                        <li>
                            Scroll and click <strong>"Remove"</strong>.
                        </li>
                        <li>
                            Congratulations, you have successfully removed your app activities.
                        </li>
                    </ol>

                    <p className="mt-6 text-lg">
                        After you remove our app, we will delete your data from our platform within 60 days.
                    </p>
                </div>
            </div>
        </div>
    );
}
