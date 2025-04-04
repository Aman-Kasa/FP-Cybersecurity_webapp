import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FIREBASE/config/firebase";
import { useState, useEffect } from "react";
import { updateUserProgress } from "../../FIREBASE/firestore/firestore";
import { getAuth } from "firebase/auth";

function Lessons({ setActiveSection, user }) {
  const [level, setLevel] = useState("intro");
  const [completedLessons, setCompletedLessons] = useState(0);
  const auth = getAuth();
  const currentUser = auth.currentUser || user;

  useEffect(() => {
    if (currentUser) {
      fetchUserProgress(currentUser.uid);
    }
  }, [currentUser]);

  async function fetchUserProgress(uid) {
    const userDoc = await getDoc(doc(db, "userProgress", uid));
    if (userDoc.exists()) {
      setCompletedLessons(userDoc.data().completedLessons || 0);
    }
  }

  async function handleNextLevel(nextLevel) {
    if (currentUser) {
      const newCompletedLessons = completedLessons + 1;
      setCompletedLessons(newCompletedLessons);
      setLevel(nextLevel);
      
      await updateUserProgress(currentUser.uid, newCompletedLessons);
    }
  }
  return (
    <div className="guide-container">
      {level === "intro" && (
        <div className="intro-section">
          <h1>Welcome to Cybersecurity Lessons</h1>
          <p>
            This guide will take you through different levels of cybersecurity
            awareness. Read through the lessons carefully and click the
            respective buttons to proceed.
          </p>
          <button onClick={() => handleNextLevel("beginner")} className="start-button">
            Start Lesson
          </button>
        </div>
      )}

      {level === "beginner" && (
                  <section>
                  <h2>Beginner Level</h2>
                  <div className="level-section">
                    <h3>1. Identifying and Handling Suspicious Emails</h3>
                    <p><strong>Key Concept:</strong> Phishing emails trick users into revealing sensitive information.</p>
                    <p><strong>Best Practices:</strong></p>
                    <ul>
                      <li>Never open emails from unknown senders.</li>
                      <li>Avoid clicking on suspicious links.</li>
                      <li>Report phishing emails as spam.</li>
                      <li>Verify sender details before taking any action.</li>
                    </ul>
          
                    <h3>2. Creating Strong Passwords</h3>
                    <p><strong>Key Concept:</strong> A strong password reduces the risk of hacking.</p>
                    <p><strong>Best Practices:</strong></p>
                    <ul>
                      <li>Use a unique, complex password for each account.</li>
                      <li>Avoid common words or personal details.</li>
                      <li>Use a password manager to store passwords securely.</li>
                    </ul>
          
                    <h3>3. Protecting Personal Information Online</h3>
                    <p><strong>Key Concept:</strong> Personal information should not be shared online carelessly.</p>
                    <p><strong>Best Practices:</strong></p>
                    <ul>
                      <li>Never share sensitive data like your home address or financial details.</li>
                      <li>Be cautious about sharing personal details on social media.</li>
                      <li>Use privacy settings to limit who can see your information.</li>
                    </ul>
          
                    <h3>4. Understanding HTTPS and Website Security</h3>
                    <p><strong>Key Concept:</strong> HTTPS ensures secure communication between your browser and a website.</p>
                    <p><strong>Best Practices:</strong></p>
                    <ul>
                      <li>Always check for HTTPS before entering sensitive information.</li>
                      <li>Avoid submitting personal data on HTTP sites.</li>
                      <li>Look for the padlock icon in the browser address bar.</li>
                    </ul>
          
                    <h3>5. Role of Firewalls</h3>
                    <p><strong>Key Concept:</strong> A firewall protects your computer from unauthorized access.</p>
                    <p><strong>Best Practices:</strong></p>
                    <ul>
                      <li>Enable firewalls on your devices.</li>
                      <li>Keep software and security settings up to date.</li>
                      <li>Avoid downloading files from untrusted sources.</li>
                    </ul>
                  </div>
                  <button onClick={() => handleNextLevel("intermediate")} className="next-button">
            Next Level
          </button>
        </section>
      )}


      {level === "intermediate" && (
         <section>
         <h2>Intermediate Level</h2>
         <div className="level-section">
           <h3>1. Understanding Two-Factor Authentication (2FA)</h3>
           <p><strong>Key Concept:</strong> 2FA adds an extra layer of security.</p>
           <p><strong>Best Practices:</strong></p>
           <ul>
             <li>Enable 2FA on all important accounts.</li>
             <li>Use authenticator apps instead of SMS when possible.</li>
             <li>Keep backup codes in a secure location.</li>
           </ul>
 
           <h3>2. Recognizing Phishing Attacks</h3>
           <p><strong>Key Concept:</strong> Phishing emails create urgency to trick users.</p>
           <p><strong>Best Practices:</strong></p>
           <ul>
             <li>Verify email sources before clicking on links.</li>
             <li>Look for spelling errors and suspicious URLs.</li>
             <li>Report phishing attempts to your email provider.</li>
           </ul>
 
           <h3>3. VPN (Virtual Private Network) and Online Privacy</h3>
           <p><strong>Key Concept:</strong> A VPN encrypts your internet connection and hides online activity.</p>
           <p><strong>Best Practices:</strong></p>
           <ul>
             <li>Use a VPN when connected to public Wi-Fi.</li>
             <li>Choose reputable VPN providers.</li>
             <li>Avoid free VPN services with poor security practices.</li>
           </ul>
 
           <h3>4. Safe Password Practices</h3>
           <p><strong>Key Concept:</strong> Sharing passwords can compromise security.</p>
           <p><strong>Best Practices:</strong></p>
           <ul>
             <li>Never share your password with anyone.</li>
             <li>Use long passwords with mixed characters.</li>
             <li>Enable multi-factor authentication where possible.</li>
           </ul>
 
           <h3>5. Understanding Malware</h3>
           <p><strong>Key Concept:</strong> Malware is malicious software that can harm your device.</p>
           <p><strong>Best Practices:</strong></p>
           <ul>
             <li>Install and update antivirus software.</li>
             <li>Avoid downloading unknown email attachments.</li>
             <li>Be cautious when clicking links from untrusted sources.</li>
           </ul>
         </div>
         <button onClick={() => handleNextLevel("advanced")} className="next-button">
            Next Level
          </button>
        </section>
      )}


      {level === "advanced" && (
        <section>
        <h2>Advanced Level</h2>
        <div className="level-section">
          <h3>1. SSL/TLS Encryption for Secure Communication</h3>
          <p><strong>Key Concept:</strong> SSL/TLS encrypts data between your browser and a server.</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>Ensure websites use HTTPS before entering sensitive data.</li>
            <li>Avoid sharing financial information on unsecured sites.</li>
            <li>Use up-to-date browsers that support strong encryption.</li>
          </ul>

          <h3>2. Principle of Least Privilege (PoLP)</h3>
          <p><strong>Key Concept:</strong> Users should only have access to the resources they need.</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>Restrict access to sensitive data based on roles.</li>
            <li>Regularly review and update access permissions.</li>
            <li>Implement multi-level authentication for sensitive data.</li>
          </ul>

          <h3>3. Man-in-the-Middle (MITM) Attacks</h3>
          <p><strong>Key Concept:</strong> MITM attacks intercept and manipulate communication.</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>Use encrypted connections (e.g., HTTPS, VPNs).</li>
            <li>Avoid using public Wi-Fi for sensitive transactions.</li>
            <li>Regularly update security software and network settings.</li>
          </ul>

          <h3>4. Importance of Penetration Testing (Pentesting)</h3>
          <p><strong>Key Concept:</strong> Penetration testing evaluates security by simulating cyberattacks.</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>Conduct regular security assessments.</li>
            <li>Identify and patch vulnerabilities before attackers exploit them.</li>
            <li>Use ethical hackers to test system security.</li>
          </ul>

          <h3>5. Understanding Zero-Day Vulnerabilities</h3>
          <p><strong>Key Concept:</strong> A zero-day vulnerability is a software flaw discovered before a fix is available.</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>Regularly update software and security patches.</li>
            <li>Use intrusion detection systems.</li>
            <li>Monitor security advisories for emerging threats.</li>
          </ul>
        </div>
        <button onClick={() => handleNextLevel("completed")} className="next-button">
            Finish Lessons
          </button>
          </section>
      )}
      { level === "completed" && (
        <section>
          <h3>Congratulations on completing all the lessons🎉</h3>
          <p>
              By following these cybersecurity best practices, you can significantly reduce the risk of cyber threats and keep your personal and professional data safe.
            </p>
          
            <button onClick={() => setActiveSection("quizzes")} className="quiz-button">
            Go to Quiz
          </button>
          
        </section>
      )}
    </div>
  );
}

export default Lessons;
