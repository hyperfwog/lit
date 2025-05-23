# coding: utf-8

"""
    

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from lighter.models.req_get_trades import ReqGetTrades

class TestReqGetTrades(unittest.TestCase):
    """ReqGetTrades unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ReqGetTrades:
        """Test ReqGetTrades
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ReqGetTrades`
        """
        model = ReqGetTrades()
        if include_optional:
            return ReqGetTrades(
                market_id = 56,
                account_index = 56,
                order_index = 56,
                sort_by = 'block_height',
                sort_dir = 'asc',
                cursor = '',
                var_from = 56,
                ask_filter = 56,
                limit = 1
            )
        else:
            return ReqGetTrades(
                sort_by = 'block_height',
                limit = 1,
        )
        """

    def testReqGetTrades(self):
        """Test ReqGetTrades"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
