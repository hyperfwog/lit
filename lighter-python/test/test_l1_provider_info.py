# coding: utf-8

"""
    

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from lighter.models.l1_provider_info import L1ProviderInfo

class TestL1ProviderInfo(unittest.TestCase):
    """L1ProviderInfo unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> L1ProviderInfo:
        """Test L1ProviderInfo
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `L1ProviderInfo`
        """
        model = L1ProviderInfo()
        if include_optional:
            return L1ProviderInfo(
                chain_id = 1,
                network_id = 1,
                latest_block_number = 45434,
                network_rpc = ''
            )
        else:
            return L1ProviderInfo(
                chain_id = 1,
                network_id = 1,
                latest_block_number = 45434,
                network_rpc = '',
        )
        """

    def testL1ProviderInfo(self):
        """Test L1ProviderInfo"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
