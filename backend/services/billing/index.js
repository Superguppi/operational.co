// Billing service stub — not used in self-hosted mode
class Billing {
  async setup() {}
  async billInvoices() {}
  async billInvoice() {}
  async createCustomer() { return null; }
  async onNoPaymentMethod() {}
  async chargeCustomer() { return null; }
  async getSetupIntents() { return { data: [] }; }
  async cancelSetupIntents() { return null; }
  async getPaymentMethods() { return { data: [] }; }
}

export default new Billing();
