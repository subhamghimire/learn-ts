export type FinalInvoice = {
  __typename: "FinalInvoice";
  createdAt: string;
  createdby: {};
  items: Items;
};

export type DraftInvoice = {
  __typename: "DraftInvoice";
  createdAt: string;
  createdby: {};
  items: Items;
};

type Items = {
  name: string;
  sn: number;
};

type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename == "FinalInvoice";
};

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename == "DraftInvoice";
};

const myInovoice: Invoice = {
  __typename: "FinalInvoice",
  createdAt: "2022-04-02",
  createdby: {},
  items: { name: "subham", sn: 22 },
};

console.log(isFinalInvoice(myInovoice));
