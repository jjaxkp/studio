import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface ContactLead {
  name: string;
  email: string;
  company?: string;
  message: string;
  submissionTimestamp: Timestamp;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<string> {
  try {
    const contactLead: ContactLead = {
      ...data,
      submissionTimestamp: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, 'ContactLeads'), contactLead);
    console.log('Contact form submitted with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form. Please try again.');
  }
}