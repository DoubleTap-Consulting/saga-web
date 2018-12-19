import React, { Component } from "react";
import { connect } from "react-redux";

import renderHTML from "react-render-html";

import "./privacy.css";

class Privacy extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="privacy">
        <div className="privacy-header brand-background-header">
          <h1>Privacy</h1>
        </div>
        <div className="privacy-container">
          <p>
            {renderHTML(`<h1>Saga.GG Privacy Policy</h1>
            <h3>Effective Date: Dec 7, 2018</h3>
            <br>
            This policy explains what information we collect when you use Saga.GG’s sites, services, mobile applications, products, and content (“Services”). It also has information about how we store, use, transfer, and delete that information. Our aim is not just to comply with privacy law. It’s to earn your trust.
            <br>
            <h1>Information We Collect & How We Use It</h1>
            Saga.GG doesn’t make money from ads. So we don’t collect data in order to advertise to you. The tracking we do at Saga.GG is to make our product work as well as possible.
            <br>
            In order to give you the best possible experience using Saga.GG, we collect information from your interactions with our network. Some of this information, you actively tell us (such as your email address, which we use to track your account or communicate with you). Other information, we collect based on actions you take while using Saga.GG, such as what pages you access and your interactions with our product features (like highlights, follows, and applause). This information includes records of those interactions, your Internet Protocol address, information about your device (such as device or browser type), and referral information.
            <br>
            <h1>We use this information to:</h1>
            <ol>
              <li>provide, test, improve, promote and personalize Saga.GG Services</li>
              <li>fight spam and other forms of abuse</li>
              <li>generate aggregate, non-identifying information about how people use Saga.GG Services</li>
            </ol>
            <br>
            When you create your Saga.GG account, and authenticate with a third-party service (like Twitter, Facebook or Google) we may collect, store, and periodically update information associated with that third-party account, such as your lists of friends or followers. We will never publish through your third-party account without your permission.
            <br><br>
            <H1>Information Disclosure</h1>

            Saga.GG won’t transfer information about you to third parties for the purpose of providing or facilitating third-party advertising to you. We won’t sell information about you.
            <br>
            We may share your account information with third parties in some circumstances, including: (1) with your consent; (2) to a service provider or partner who meets our data protection standards; (3) with academic or non-profit researchers, with aggregation, anonymization, or pseudonomization; (4) when we have a good faith belief it is required by law, such as pursuant to a subpoena or other legal process; (5) when we have a good faith belief that doing so will help prevent imminent harm to someone.
            <br>
            If we are going to share your information in response to legal process, we’ll give you notice so you can challenge it (for example by seeking court intervention), unless we’re prohibited by law or believe doing so may endanger others. We will object to requests for information about users of our services that we believe are improper.
            <br>
            <h1>Data Storage</h1>

            Saga.GG uses third-party vendors and hosting partners, such as Amazon, for hardware, software, networking, storage, and related technology we need to run Saga.GG. We maintain two types of logs: server logs and event logs. By using Saga.GG Services, you authorize Saga.GG to transfer, store, and use your information in the United States and any other country where we operate.
            <br>
            <h1>Third-Party Embeds</h1>
            Some of the content that you see displayed on Saga.GG is not hosted by Saga.GG. These “embeds” are hosted by a third-party and embedded in Saga.GG. For example: YouTube or Vimeo videos, Imgur or Giphy gifs, SoundCloud audio files, Twitter tweets, GitHub code, or Scribd documents that appear within a Saga.GG post. These files send data to the hosted site just as if you were visiting that site directly (for example, when you load a Saga.GG post page with a YouTube video embedded in it, YouTube receives data about your activity). Saga.GG does not control what data third parties collect in cases like this, or what they will do with it. So, third-party embeds on Saga.GG are not covered by this privacy policy. They are covered by the privacy policy of the third-party service.
            <br><br>
            Some embeds may ask you for personal information, such as your email address, through a form. We do our best to keep bad actors off of Saga.GG. However, if you choose to submit your information to a third party this way, we don’t know what they may do with it. As explained above, their actions are not covered by this Privacy Policy. So, please be careful when you see embedded forms on Saga.GG asking for your email address or any other personal information. Make sure you understand who you are submitting your information to and what they say they plan to do with it. We suggest that you do not submit personal information to any third-party through an embedded form.
            <br><br>
            If you embed a form that allows submission of personal information by users, you must provide near the embedded form a prominent link to an applicable Privacy Policy that clearly states how to you intend to use any information collected. Failure to do so may lead Saga.GG to disable the post or take other action to limit or disable your account.
            <br>
            <h1>Tracking & Cookies</h1>
            We use browser cookies and similar technologies to recognize you when you return to our Services. We use them in various ways, for example to log you in, remember your preferences (such as default language), evaluate email effectiveness, allow our paywall and meter to function, and personalize content and other information.
            <br><br>
            Saga.GG doesn’t track you across the Internet. We track only your interactions within the Saga.GG network (which encompasses Saga.GG.com and custom domains hosted by Saga.GG).
            <br><br>
            Some third-party services that we use to provide the Saga.GG Service, such as Google Analytics, may place their own cookies in your browser. This Privacy Policy covers use of cookies by Saga.GG only and not the use of cookies by third parties.
            <br><br>
            Saga.GG complies with the “Do Not Track” (“DNT”) standard recommended by the World Wide Web Consortium. For logged-out users browsing with DNT enabled, Saga.GG’s analytics will not receive data about you, but we will do some first-party tracking in order to customize content and provide data to third-party service providers that enable Saga.GG Services to work. When you use Saga.GG while logged-in to your account, we cannot comply with DNT. Here’s some more information about Saga.GG’s Do Not Track policy.

            <h1>Modifying or Deleting Your Personal Information</h1>
            If you have a Saga.GG account, you can access, modify or export your personal information, or delete your account here.
            <br><br>
            To protect information from accidental or malicious destruction, we may maintain residual copies for a brief time period. But, if you delete your account, your information and content will be unrecoverable after that time. Saga.GG may preserve and maintain copies of your information when required to do so by law.
            <br>
            <h1>Data Security</h1>

            We use encryption (HTTPS/TLS) to protect data transmitted to and from our site. However, no data transmission over the Internet is 100% secure, so we can’t guarantee security. You use the Service at your own risk, and you’re responsible for taking reasonable measures to secure your account.
            <br><br>
            <h1>Business Transfers</h1>
            If we are involved in a merger, acquisition, bankruptcy, reorganization or sale of assets such that your information would be transferred or become subject to a different privacy policy, we’ll notify you in advance so you can opt out of any such new policy by deleting your account before transfer.
            <br><br>
            <h1>Email from Saga.GG</h1>
            Sometimes we’ll send you emails about your account, service changes or new policies. You can’t opt out of this type of “transactional” email (unless you delete your account). But, you can opt out of non-administrative emails such as digests, newsletters, and activity notifications through your account’s “Settings” page
            <br><br>
            When your interact with an email sent from Saga.GG (such as opening an email or clicking on a particular link in an email), we may receive information about that interaction. We won’t email you to ask for your password or other account information. If you receive such an email, please send it to us so we can investigate.
            <br><br>
            <h1>Changes to this Policy</h1>

            Saga.GG may periodically update this Policy. We’ll notify you about significant changes to it. The most current version of the policy will always be here and we will archive former versions of the policy here.
            <br><br>
            <h1>Questions</h1>

            We welcome feedback about this policy at legal@saga.gg.

            <h1>Data Protection Statement for European Union Users</h1>
            Description of Processing Activity

            Saga.GG collects and stores personal information about its users to customize their reading experience and enable personalized distribution of content. It shares minimal data with its service providers.
            <br><br>

            <h1>Purposes of Processing</h1>
            <ol>
              <li>Provide, test, promote, and improve the services</h1>
              <li>Gather usage statistics of services</h1>
              <li>Provide customized reading experience</h1>
              <li>Publish and distribute user-generated content</h1>
              <li>Provide access to paid content</h1>
              <li>Pay authors in Partnership Program for certain content</h1>
              <li>Fight spam, fraud, and other abuse of services</h1>
              <li>Legal Bases</h1>
            </ol>
            <br>
            In order to provide the services, Saga.GG collects and stores personal data about its users on the legal basis of consent given when you create an account and agree to the Privacy Policy.
            <br><br>
            Saga.GG also pursues its legitimate interests by collecting minimal data of logged out users to provide the services, as outlined above.
            <br><br>
            Where Saga.GG collects and stores personal data about non-users, it does so under performance of contract obligations with users who use the services to publish content on web sites hosted by Saga.GG. In such cases, users authoring such content containing personal data of third parties are responsible for that content. Saga.GG will consider related complaints in compliance with the General Data Protection Regulation’s rights of the data subject, as well as rights of expression and access to information.
            <h1>Public Nature of Personal Data</h1>

            Logged-in users may choose to interact publicly with the Saga.GG Services in the form of clapping for a post, highlighting parts of a post, following other user accounts, sharing links on connected social media accounts, or writing original posts. Where such personal data may reveal special category protected data, it is processed on the basis that it is manifestly made public by the user. Additional information on potential consequences of such processing can be found below. If you do not agree to this public usage, do not create an account or use these features of Saga.GG Services.
            <br><br>
            <h1>Categories of Personal Data Collected</h1>
            <ul>
              <li>Logged out users: None</li>
              <li>Logged in users:</li>
              <ul>
                <li>Username</li>
                <li>Display name</li>
                <li>Bio</li>
                <li>Avatar image</li>
                <li>Email address (non-public)</li>
                <li>Session activity (security)</li>
                <li>Linked social media accounts (optional)</li>
                <li>IP address</li>
                <li>Browser information</li>
                <li>Reading history (on Saga.GG network only)</li>
                <li>Network interactions (recommends, follows, etc.)</li>
                <li>Posts, responses, or series published by user</li>
              </ul>
            </ul>
            <br>
            Saga.GG shares minimal personal data with third-party processors in order to provide the Services. These processors offer at least the same level of data protection as that set out in this statement. 
            
            <h3>This includes the following categories of recipients:</h3>
            <ul>
              <li>Hosting, Storage, & Other Infrasructure</li>
              <li>Security</li>
              <li>Analytics</li>
              <li>Communication & Support</li>
              <li>Payment Processors</li>
            </ul>
            <br>
            Search engines will index user profiles, public interactions, and any user-generated content. Users may also share links to your content on social media.
            <h1>Payment Processors</h1>

            Saga.GG provides Services in conjunction with several payment processors, including: Stripe, Paypal, Google Play, and Apple Pay, through which users may pay for Saga.GG memberships or receive payment based on participation in our Partner program. Those companies acting as payment processors may collect and store personal data related to your billing information and history in order to provide their services, and may collect and store personal data and business data to prevent fraud and other abuse.
            <br><br>
            When you delete your Saga.GG account, Saga.GG deletes your personal data as outlined in this document. However, to delete your payment or billing information, you will need to do so with your payment provider, as Saga.GG only has minimal secure access to those records as needed to provide the services.

            <h1>Embedded Content</h1>
            Saga.GG posts may contain third-party embeds, which may in some cases collect and store personal data. The use of personal data by embedded content providers is not covered by this statement, but by the privacy policies of those sites or services.

            <h1>Existence of Automated Decision-making</h1>

            Saga.GG collects and stores personal data about its users to customize reading. This includes automated decision-making to promote content tailored to the preferences and interests indicated by the user, and to their browsing history and network interactions.
            <br><br>
            Saga.GG also filters content for the purposes of fighting and preventing spam, fraud, and other forms of abuse.

            <h1>Potential Consequences of Processing</h1>

            By creating an account on Saga.GG, users may make certain personal data about themselves public and accessible to others on their profile and through network interactions. This may in some cases constitute special category protected data which is considered manifestly made public by the user.
            <br><br>
            Due to the public nature of information posted to Saga.GG, it may be possible for third parties to derive identifying personal data from posts, whether by reading, inference, supplemental research, or automated extraction and analysis.
            <br><br>
            Users are free to use their real name and information, or a pseudonym of their choosing, for their account. Users may also choose to use the service without posting data or engaging in network interactions. However, if you do not agree with and accept the risks of such usage, you may not use the services.

            <h1>Cross-border Transfers</h1>

            Saga.GG is hosted in the United States. By using Saga.GG Services, you authorize Saga.GG to transfer, store, and use your information in the United States and any other country where we operate. Where your data is disclosed to our processors, it is subject by contract to at least the same level of data protection as that set out in this statement.

            <h1>Retention</h1>

            Saga.GG retains personal data associated with your account for the lifetime of your account. If you would like to delete your personal information, you can delete your account at any time. Deleted account profile pages will yield an error 404 “file not found” page, immediately upon initiating deletion, and will become unrecoverable in our system after a period of fourteen days. It may take several additional days for your personal data to be de-indexed from search engines, depending on those search engines’ practices, over which Saga.GG may have limited or no control.
            <br><br>
            To delete your payment or billing information, you will need to do so with your payment provider, as Saga.GG only has minimal secure access to those records as needed to provide the services.

            <h1>Rights of Data Subjects</h1>

            If you sign up for a Saga.GG account, you may at any time request an export of your personal information by contacting us.
            <br><br>
            You may correct information associated with your account from the Settings page, and the Customize Your Interests page to update your interests.
            <br><br>
            You may withdraw consent by deleting your account at any time through the Settings page, which will erase your personal information completely within 14 days (except to the extent Saga.GG is prevented by law from deleting your information).
            <br><br>
            You may object at any time to the use of your personal data by contacting privacy@saga.gg. If your complaint relates to alleged misuse of your personal data by a third party, it may result in suspension of that post or account in keeping with relevant law, public interest, our contractual obligations, and the rights of expression and access to information of others.
            <br><br>
            You may at any time lodge a complaint regarding the processing of your personal data by Saga.GG with the Supervisory Authority of your EU member state.
          `)}
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Privacy);
