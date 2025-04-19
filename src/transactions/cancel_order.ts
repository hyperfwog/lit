/**
 * Cancel order transaction
 */

/**
 * Cancel order transaction
 */
export class CancelOrder {
  accountIndex?: number;
  orderBookIndex?: number;
  orderIndex?: number;
  nonce?: number;
  sig?: string;
  
  /**
   * Create a new CancelOrder instance from JSON
   * @param jsonStr - JSON string
   * @returns CancelOrder instance
   */
  static fromJson(jsonStr: string): CancelOrder {
    const params = JSON.parse(jsonStr);
    const result = new CancelOrder();
    result.accountIndex = params.AccountIndex;
    result.orderBookIndex = params.OrderBookIndex;
    result.orderIndex = params.OrderIndex;
    result.nonce = params.Nonce;
    result.sig = params.Sig;
    return result;
  }
  
  /**
   * Convert to JSON
   * @returns JSON string
   */
  toJson(): string {
    return JSON.stringify({
      AccountIndex: this.accountIndex,
      OrderBookIndex: this.orderBookIndex,
      OrderIndex: this.orderIndex,
      Nonce: this.nonce,
      Sig: this.sig,
    });
  }
}
