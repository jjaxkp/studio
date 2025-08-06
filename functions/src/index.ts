import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";

// Cloud Function to send email notification when a new contact form is submitted
export const sendContactNotification = onDocumentCreated(
  "ContactLeads/{leadId}",
  (event) => {
    const contactLead = event.data?.data();
    
    if (!contactLead) {
      logger.warn("No data found in the contact lead document");
      return;
    }

    // Log the submission (in a real app, you'd send an actual email here)
    logger.info("New contact form submission:", {
      leadId: event.params.leadId,
      name: contactLead.name,
      email: contactLead.email,
      company: contactLead.company,
      message: contactLead.message?.substring(0, 100) + "...", // First 100 chars
      timestamp: contactLead.submissionTimestamp,
    });

    // TODO: In a production environment, integrate with a service like SendGrid, Mailgun, or Gmail API
    // Example pseudo-code:
    // await sendEmail({
    //   to: 'contact@meshesha.com',
    //   subject: `New Contact Form Submission from ${contactLead.name}`,
    //   body: `
    //     Name: ${contactLead.name}
    //     Email: ${contactLead.email}
    //     Company: ${contactLead.company || 'N/A'}
    //     Message: ${contactLead.message}
    //   `
    // });

    logger.info("Email notification would be sent to internal team");
    return null;
  }
);