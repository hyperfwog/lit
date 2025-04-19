/**
 * Create order transaction
 */

/**
 * Create order transaction
 */
export class CreateOrder {
  accountIndex?: number;
  orderBookIndex?: number;
  baseAmount?: number;
  price?: number;
  isAsk?: number;
  orderType?: number;
  expiredAt?: number;
  nonce?: number;
  sig?: string;
  
  /**
   * Create a new CreateOrder instance from JSON
   * @param jsonStr - JSON string
   * @returns CreateOrder instance
   */
  static fromJson(jsonStr: string): CreateOrder {
    const params = JSON.parse(jsonStr);
    const result = new CreateOrder();
    result.accountIndex = params.AccountIndex;
    result.orderBookIndex = params.OrderBookIndex;
    result.baseAmount = params.BaseAmount;
    result.price = params.Price;
    result.isAsk = params.IsAsk;
    result.orderType = params.OrderType;
    result.expiredAt = params.ExpiredAt;
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
      BaseAmount: this.baseAmount,
      Price: this.price,
      IsAsk: this.isAsk,
      OrderType: this.orderType,
      ExpiredAt: this.expiredAt,
      Nonce: this.nonce,
      Sig: this.sig,
    });
  }
}
