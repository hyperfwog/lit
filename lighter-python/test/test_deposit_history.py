# coding: utf-8

"""
    

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from lighter.models.deposit_history import DepositHistory

class TestDepositHistory(unittest.TestCase):
    """DepositHistory unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> DepositHistory:
        """Test DepositHistory
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `DepositHistory`
        """
        model = DepositHistory()
        if include_optional:
            return DepositHistory(
                code = 200,
                message = '',
                deposits = [
                    lighter.models.deposit_history_item.DepositHistoryItem(
                        id = '', 
                        amount = '0.1', 
                        timestamp = 1640995200, 
                        status = 'failed', )
                    ],
                cursor = ''
            )
        else:
            return DepositHistory(
                code = 200,
                deposits = [
                    lighter.models.deposit_history_item.DepositHistoryItem(
                        id = '', 
                        amount = '0.1', 
                        timestamp = 1640995200, 
                        status = 'failed', )
                    ],
                cursor = '',
        )
        """

    def testDepositHistory(self):
        """Test DepositHistory"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
