
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  linkedin: string;
}
