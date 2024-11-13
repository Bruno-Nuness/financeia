import {
  TransationCategory,
  TransationPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINEMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Habitação",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transaporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransationPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransationPaymentMethod.BANK_TRANSFER],
  },
  //   {
  //     value: TransationPaymentMethod.,
  //     label:
  //       TRANSACTION_PAYMENT_METHOD_LABELS[TransationPaymentMethod.BANK_SLIP],
  //   },
  {
    value: TransationPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransationPaymentMethod.CASH],
  },
  //   {
  //     value: TransationPaymentMethod.CREDT_CARD,
  //     label:
  //       TRANSACTION_PAYMENT_METHOD_LABELS[TransationPaymentMethod.CREDT_CARD],
  //   },
  {
    value: TransationPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransationPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransationPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransationPaymentMethod.OTHER],
  },
  {
    value: TransationPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransationPaymentMethod.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransationCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransationCategory.EDUCATION],
  },
  //   {
  //     value: TransationCategory.ENTERTAINMENT,
  //     label: TRANSACTION_CATEGORY_LABELS[TransationCategory.ENTERTAINMENT],
  //   },
  {
    value: TransationCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransationCategory.FOOD],
  },
  {
    value: TransationCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransationCategory.HEALTH],
  },
  {
    value: TransationCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransationCategory.HOUSING],
  },
  {
    value: TransationCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransationCategory.OTHER],
  },
  //   {
  //     value: TransationCategory.SALARY,
  //     label: TRANSACTION_CATEGORY_LABELS[TransationCategory.SALARY],
  //   },
  {
    value: TransationCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransationCategory.TRANSPORTATION],
  },
  {
    value: TransationCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransationCategory.UTILITY],
  },
];
