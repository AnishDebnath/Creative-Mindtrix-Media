export interface ContactRequestBody {
  name?: string;
  phone?: string;
  email?: string;
  projectModel?: string;
  selectedServices?: string[];
  requirements?: string;
}

export interface OwnerEmailData {
  name: string;
  phone: string;
  email?: string;
  projectModel: string;
  services: string[];
  requirements?: string;
  submittedAt: string;
}

export interface ClientEmailData {
  name: string;
  projectModel: string;
  services: string[];
  phone: string;
}

