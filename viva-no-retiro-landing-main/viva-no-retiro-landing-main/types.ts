export interface Property {
  id: string;
  title: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  features: string[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}