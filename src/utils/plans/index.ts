export type PlanDetailsProps = {
  maxServices: number;
};

export type PlansProps = {
  BASIC: PlanDetailsProps;
  PROFESSIONAL: PlanDetailsProps;
};

export const PLANS = {
  BASIC: {
    maxServices: 3,
  },
  PROFESSIONAL: {
    maxServices: 50,
  },
};

export const subscriptionPlans = [
  {
    id: "BASIC",
    name: "BASIC",
    description: "Perfeito para clínicas menores",
    oldPrice: "R$ 99,90",
    price: "R$ 29,90",
    features: [
      `Até ${PLANS["BASIC"].maxServices} serviços`,
      "Agendamentos ilimitados",
      "Suporte",
      "Relatórios",
    ],
  },
  {
    id: "PROFESSIONAL",
    name: "PROFESSIONAL",
    description: "Ideal para clínicas grandes",
    oldPrice: "R$ 199,90",
    price: "R$ 99,90",
    features: [
      `Até ${PLANS["PROFESSIONAL"].maxServices} serviços`,
      "Agendamentos ilimitados",
      "Suporte prioritario",
      "Relatórios avançados",
    ],
  },
];
