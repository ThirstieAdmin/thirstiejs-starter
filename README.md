# thirstiejs-starter

This repository contains a simple web app using the Thirstie Ecomm-vue SDK to power a three tier compliant, beverage alcohol e-commerce experience.

Using the Thirstie SDK package requires that you obtain API keys from your Thirstie representative.

## Install

The only run time dependency for this project is the Thirstie SDK package `@thirstie/ecomm-vue`, but we use [Parcel](https://parceljs.org/) as a build tool.  In practice use can use any build tool.

`npm install`

## Launching the demo

You must update the `src/index.js` script to load the API keys that your Thirstie representative provided, or use environment variables to pass the keys to the script.

You may also want to update `src/index.js` to reflect your styling preferences, use the site logo of your choice, etc.

The script assumes that you place your API keys in environment variables, `THAPIKEY` and `THMAPSKEY`, so after updating your configuration you can launch the site with:

```bash
> THMAPSKEY=<google maps api key> THAPIKEY=<your thirstie api key> npm start
```

The demo app will be launched on http://localhost:1234/


## Test scenarios

###  Zip Codes Addresses

You can use any valid address to test.  These are samples we use in QA testing.

**In Coverage**
| zip code | address |
| --- | --- |
| 10024 | 201 West 89th Street, NY, NY 10024 |
| 90210 | 905 Loma Vista Dr, Beverly Hills, CA 90210 |
| 60657	3175 N Broadway, Chicago, IL 60657 |

**No Coverage**
| zip code | address |
| --- | --- |
| 15212 | 117 Sandusky St, Pittsburgh PA 15212 |
| 02215 | 4 Jersey St, Boston, MA 02215 |

## Test Credit Cards

Since we use Stripe for payment processing, you can use [Stripe's test cards](https://docs.stripe.com/testing?testing-method=card-numbers#cards) for testing during checkout.

**Valid Cards**
| card number | scenario |
| `4242 4242 4242 4242` | Visa (Requires 3-digit CVC) |
| `5555 5555 5555 4444` | Master Card (Requires 3-digit CVC) |
| `2223 0031 2200 3222` | Master Card (Requires 3-digit CVC) |
| `3782 822463 10005` | American Express (Requires 4-digit CVC) |
| `3714 496353 98431` | American Express (Requires 4-digit CVC) |

**Problem States**
| card number | scenario |
| `4000 0000 0000 0002` | Processor Declined |
| `4000 0000 0000 0127` | Always returns "Incorrect CVV/CVC" |
