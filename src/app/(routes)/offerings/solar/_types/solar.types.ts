export type BenefitItem = {
  id: string | number;
  description: string;
};

export interface BenefitsListProps {
  title: string;
  benefits: BenefitItem[];
}
