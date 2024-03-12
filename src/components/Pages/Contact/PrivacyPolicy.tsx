import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-screen h-contain bg-brand-cream flex flex-col justify-between py-16 px-8 lg:pt-32">
      <h3 className="text-[26px] text-brand-blue">Your Privacy Suite at the Ai Guy.</h3>
      <p className=" mb-16 text-[18px] ">
        Just like every chord in a symphony matters, we believe your privacy is
        paramount. At the Ai Guy, we're not just about crafting digital
        landscapes; we're about creating a space where your data is treated with
        respect and care. Dive into our privacy policy, tailored to harmonize
        with your expectations and the Australian Privacy Principles.
      </p>
      <div>
        <h5 className="text-[26px]">Our Privacy Jam Session</h5>
        <p className="pl-8 mb-8 text-[18px]">
          Your data and our commitment to protecting it play a sweet duet at
          the Ai Guy. Our privacy practices resonate with the
          Australian Privacy Principles, ensuring your personal information hits
          the right notes.
        </p>
      </div>
      <div>
        <h5 className="text-[26px]">The Setlist of Your Information Collection</h5>
        <p className="pl-8 mb-8 text-[18px]">
          <span className="font-bold">
            1. Backstage Passes (User Contact Forms):
          </span>{" "}
          When you fill out a contact form, we tune into your details, using
          them to respond and serenade you with our services that match your
          rhythm. <br></br>
          <br></br>
          <span className="font-bold">2. Fan Mail (Mailing List): </span>
          Signing up for our mailing list? That’s your VIP ticket to our
          exclusive updates, aligned with the guidelines of the Australian
          Communications and Media Authority. No spam solos here. <br></br>
          <br></br>
          <span className="font-bold">
            3. Online Footprints (Website Activity):
          </span>{" "}
          Our website, www.ai-guy.co, uses cookies and digital
          markers in three genres:
          <div className="pl-8 ">
            <span className="font-bold">
              <br></br> - Performance Beats:
            </span>{" "}
            These help us fine-tune your website experience.
            <span className="font-bold">
              <br></br> - Analytics Melodies:
            </span>{" "}
            These gather statistics, like audience size and preferences.
            <span className="font-bold">
              <br></br> - Advertising Rhythms:
            </span>{" "}
            Tailoring ads that resonate with your style.
          </div>
          <br></br>
          <br></br>Cookie Control: Feel free to adjust your browser's settings
          to manage cookie preferences. Just a heads-up, it might change how our
          website performs. <br></br>
          <br></br>
          <span className="font-bold">4. Direct Marketing Groove:</span> We
          promise no spammy tunes. We use your details to send you customized
          content that vibes with your interests. <br></br>
          <br></br>
          <span className="font-bold">
            5. Collaborations (Information from Others):
          </span>{" "}
          In our advertising efforts, we aim to keep the content relevant and in
          harmony with your interests.
        </p>
        <div>
          <h5 className="text-[26px]">Our Use and Disclosure Policy</h5>
          <p className="pl-8 mb-8 text-[18px]">
            Your personal data is like a backstage secret with us. We only share
            it under the spotlight of your consent, legal obligations, or to
            protect someone’s wellbeing.
          </p>
        </div>
        <div>
          <h5 className="text-[26px]">Quality Control of Your Information</h5>
          <p className="pl-8 mb-8 text-[18px]">
            We’re all about hitting the right notes. If your information needs a
            tune-up, let us know, and we'll get it pitch-perfect.
          </p>
        </div>
        <div>
          <h5 className="text-[26px]">Intellectual Property: Our Creative Symphony</h5>
          <p className="pl-8 mb-8 text-[18px]">
            The content on our website is our digital artwork. Feel free to
            engage with it for your personal symphony, but republishing or using
            it for commercial concerts is off-limits.
          </p>
        </div>
        <div>
          <h5 className="text-[26px]">Data Security: Our Firewall Jam</h5>
          <p className="pl-8 mb-8 text-[18px]">
            We’re on the frontline, guarding your personal information like the
            VIP section at a concert. Our security measures are our little
            secret, but they’re always there, keeping your data safe.
          </p>
        </div>
        <div>
          <h5 className="text-[26px]">Access and Correction: Your VIP Backstage Pass</h5>
          <p className="pl-8 mb-8 text-[18px]">
            Need to update your details or take a peek at what we have? Drop us
            a line, and we’ll assist. There might be times when we can’t grant
            access, but we’ll always have a good reason.
          </p>
        </div>
        <div>
          <h5 className="text-[26px]">Complaints: Let's Fine-Tune Together</h5>
          <p className="pl-8 mb-8 text-[18px]">
            Have a concern? Reach out to us, and we’ll address it.
          </p>
        </div>
        <div>
          <h5 className="text-[26px]">Get in Touch: Join Our Digital Concert</h5>
          <p className="pl-8 mb-8 text-[18px]">
            Have any questions or thoughts about our privacy policy? We’re all
            ears!
            <br></br>
            <br></br>
            <Link to="/contactform">
            <span className="underline">Send us an Email</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
