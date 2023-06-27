const express = require("express");
const fetch = require("node-fetch");
const { request } = require("graphql-request");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

require("@shopify/shopify-api/adapters/node");
// const { shopifyApi, LATEST_API_VERSION } = require("@shopify/shopify-api");
// const cors = require("cors");
const ShopifyApi = require("@shopify/shopify-api");

const {
  shopifyApi,
  ApiVersion,
  BillingInterval,
} = require("@shopify/shopify-api");
const { restResources } = require("@shopify/shopify-api/rest/admin/2022-07");
// const Shopify = require("shopify-api-node");

const app = express();
app.use(
  cors({
    origin: "https://aiko-fc483--pr41-feature-stamp-redeem-d3fxasrx.web.app",
  })
);
app.use(express.json());
const { Auth, Route } = ShopifyApi;

const port = process.env.PORT || 3001;

const shopifyStore = process.env.SHOPIFY_STORE;
const apiKey = process.env.SHOPIFY_API_KEY;
const apiAdminKey = process.env.SHOPIFY_API_PASSWORD;

const apiEndpoint = `https://${apiKey}:${apiAdminKey}@${shopifyStore}.myshopify.com/admin/api/2022-04/graphql.json`;

app.get("/get-discounts", async (req, res) => {
  try {
    const response = await fetch(
      `https://${shopifyStore}.myshopify.com/admin/api/2023-04/price_rules.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": apiAdminKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/get-stock/:inventory_item_id", async (req, res) => {
  const inventoryItemId = req.params.inventory_item_id;
  try {
    const response = await fetch(
      `https://${shopifyStore}.myshopify.com/admin/api/2023-01/inventory_levels.json?inventory_item_ids=${inventoryItemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": apiAdminKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/get-discount/:id", async (req, res) => {
  try {
    const discountId = req.params.id;

    const response = await fetch(
      `https://${shopifyStore}.myshopify.com/admin/api/2022-04/price_rules/${discountId}/discount_codes.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": apiAdminKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/generate-discount", async (req, res) => {
  try {
    const { basicCodeDiscount } = req.body;

    const discountCodeMutation = `
      mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
        discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
          codeDiscountNode {
            codeDiscount {
              ... on DiscountCodeBasic {
                title
                codes(first: 10) {
                  nodes {
                    code
                  }
                }
                startsAt
                endsAt
                customerSelection {
                  ... on DiscountCustomerAll {
                    allCustomers
                  }
                }
                customerGets {
                  value {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                  items {
                    ... on AllDiscountItems {
                      allItems
                    }
                  }
                }
                appliesOncePerCustomer
              }
            }
          }
          userErrors {
            field
            code
            message
          }
        }
      }
    `;

    const variables = {
      basicCodeDiscount,
    };

    const discountCodeResponse = await request(
      apiEndpoint,
      discountCodeMutation,
      variables
    );
    const { discountCodeBasicCreate } = discountCodeResponse;

    if (discountCodeBasicCreate.userErrors.length > 0) {
      return res
        .status(400)
        .json({ errors: discountCodeBasicCreate.userErrors });
    }

    res
      .status(200)
      .json({ discountCode: discountCodeBasicCreate.codeDiscountNode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
