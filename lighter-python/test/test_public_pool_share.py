# coding: utf-8

"""
    

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from lighter.models.public_pool_share import PublicPoolShare

class TestPublicPoolShare(unittest.TestCase):
    """PublicPoolShare unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PublicPoolShare:
        """Test PublicPoolShare
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PublicPoolShare`
        """
        model = PublicPoolShare()
        if include_optional:
            return PublicPoolShare(
                public_pool_index = 1,
                shares_amount = 3000,
                entry_usdc = '3000'
            )
        else:
            return PublicPoolShare(
                public_pool_index = 1,
                shares_amount = 3000,
                entry_usdc = '3000',
        )
        """

    def testPublicPoolShare(self):
        """Test PublicPoolShare"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
