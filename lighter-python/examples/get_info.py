import asyncio
import datetime
import lighter
import logging

logging.basicConfig(level=logging.INFO)


L1_ADDRESS = "WALLET_L1_ADDRESS"
account_index = 0

async def print_api(method, *args, **kwargs):
    logging.info(f"{method.__name__}: {await method(*args, **kwargs)}")


async def account_apis(client: lighter.ApiClient):
    logging.info("ACCOUNT APIS")
    account_instance = lighter.AccountApi(client)
    res = await account_instance.account(by="l1_address", value=L1_ADDRESS)
    global account_index
    if res.accounts:
        account_index = res.accounts[0].index
    else:
        print("NO ACCOUNT FOUND")
        exit(0)
    await print_api(account_instance.account, by="index", value=str(account_index))
    await print_api(account_instance.accounts, index=0, limit=2, sort="asc")
    await print_api(
        account_instance.accounts_by_l1_address,
        l1_address=L1_ADDRESS,
    )
    await print_api(account_instance.apikeys, account_index=3, api_key_index=255)
    await print_api(account_instance.fee_bucket, account_index=3)
    await print_api(
        account_instance.pnl,
        by="index",
        value=str(account_index),
        resolution="1h",
        start_timestamp=int(datetime.datetime.now().timestamp() - 60 * 60 * 24),
        end_timestamp=int(datetime.datetime.now().timestamp()),
        count_back=2,
    )
    await print_api(account_instance.public_pools, filter="all", limit=1, index=0)


async def block_apis(client: lighter.ApiClient):
    logging.info("BLOCK APIS")
    block_instance = lighter.BlockApi(client)
    await print_api(block_instance.block, by="height", value="1")
    await print_api(block_instance.blocks, index=0, limit=2, sort="asc")
    await print_api(block_instance.current_height)


async def candlestick_apis(client: lighter.ApiClient):
    logging.info("CANDLESTICK APIS")
    candlestick_instance = lighter.CandlestickApi(client)
    await print_api(
        candlestick_instance.candlesticks,
        market_id=0,
        resolution="1h",
        start_timestamp=int(datetime.datetime.now().timestamp() - 60 * 60 * 24),
        end_timestamp=int(datetime.datetime.now().timestamp()),
        count_back=2,
    )
    await print_api(
        candlestick_instance.fundings,
        market_id=0,
        resolution="1h",
        start_timestamp=int(datetime.datetime.now().timestamp() - 60 * 60 * 24),
        end_timestamp=int(datetime.datetime.now().timestamp()),
        count_back=2,
    )


async def info_apis(client: lighter.ApiClient):
    logging.info("INFO APIS")
    info_instance = lighter.InfoApi(client)
    await print_api(info_instance.layer2_basic_info)


async def order_apis(client: lighter.ApiClient):
    logging.info("ORDER APIS")
    order_instance = lighter.OrderApi(client)
    await print_api(order_instance.exchange_stats)
    await print_api(order_instance.order_book_details, market_id=0)
    await print_api(order_instance.order_book_orders, market_id=0, limit=2)
    await print_api(order_instance.order_books)
    await print_api(order_instance.recent_trades, market_id=0, limit=2)
    await print_api(order_instance.trades, sort_by="timestamp", market_id=0, limit=2)


async def transaction_apis(client: lighter.ApiClient):
    logging.info("TRANSACTION APIS")
    transaction_instance = lighter.TransactionApi(client)
    await print_api(transaction_instance.block_txs, by="block_height", value="1")
    await print_api(transaction_instance.next_nonce, account_index=int(account_index), api_key_index=0)
    # use with a valid sequence index
    # await print_api(transaction_instance.tx, by="sequence_index", value="5")
    await print_api(transaction_instance.txs, index=0, limit=2)


async def main():
    client = lighter.ApiClient(
        configuration=lighter.Configuration(
            host="https://testnet.zklighter.elliot.ai"
        )
    )
    await account_apis(client)
    await block_apis(client)
    await candlestick_apis(client)
    await info_apis(client)
    await order_apis(client)
    await transaction_apis(client)


if __name__ == "__main__":
    asyncio.run(main())
