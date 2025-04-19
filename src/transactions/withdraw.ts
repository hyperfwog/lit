/**
 * Withdraw transaction
 */

/**
 * Withdraw transaction
 */
export class Withdraw {
  accountIndex?: number;
  amount?: number;
  nonce?: number;
  sig?: string;
  
  /**
   * Create a new Withdraw instance from JSON
   * @param jsonStr - JSON string
   * @returns Withdraw instance
   */
  static fromJson(jsonStr: string): Withdraw {
    const params = JSON.parse(jsonStr);
    const result = new Withdraw();
    result.accountIndex = params.AccountIndex;
    result.amount = params.Amount;
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
      Amount: this.amount,
      Nonce: this.nonce,
      Sig: this.sig,
    });
  }
}
