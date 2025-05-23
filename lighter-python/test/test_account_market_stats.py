# coding: utf-8

"""
    

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from lighter.models.account_market_stats import AccountMarketStats

class TestAccountMarketStats(unittest.TestCase):
    """AccountMarketStats unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AccountMarketStats:
        """Test AccountMarketStats
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AccountMarketStats`
        """
        model = AccountMarketStats()
        if include_optional:
            return AccountMarketStats(
                market_id = 1,
                daily_trades_count = 68,
                daily_base_token_volume = 235.25,
                daily_quote_token_volume = 93566.25
            )
        else:
            return AccountMarketStats(
                market_id = 1,
                daily_trades_count = 68,
                daily_base_token_volume = 235.25,
                daily_quote_token_volume = 93566.25,
        )
        """

    def testAccountMarketStats(self):
        """Test AccountMarketStats"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
